NEWSCHEMA('Product').make(function(schema) {

	schema.define('id', 'UID');
	schema.define('title', 'Capitalize(30)', true);
	schema.define('link', 'Text', true);
	schema.define('status', 'Text');

	schema.setSave(function(error, model, options, callback) {

		var products = NOSQL('products');

		// Removes hidden properties of the SchemaBuilder
		var data = model.$clean();

		// Checks if the product exists
		if (!model.id) {
			data.id = UID();
			data.datecreated = F.datetime;
			products.insert(data).callback(SUCCESS(callback));
			return;
		}

		data.dateupdated = F.datetime;

		// We don't need to modify id
		delete data.id;

		products.modify(data).make(function(builder) {
			builder.where('id', model.id);
			builder.callback(SUCCESS(callback));
		});
	});

	schema.setGet(function(error, model, options, callback) {

		var products = NOSQL('products');

		// Reads the product
		products.one().make(function(builder) {
			builder.where('id', options.id);
			builder.callback(callback, 'error-product-404');
		});
	});

	schema.setQuery(function(error, options, callback) {

		var products = NOSQL('products');

		// Reads the product
		products.find().make(function(builder) {

			if (options.search) {
				builder.or();
				builder.search('title', search);
				builder.end();
			}

			builder.fields('id', 'title', 'link', 'status', 'datecreated');
			builder.callback(callback);
		});
	});

	schema.setRemove(function(error, options, callback) {

		var products = NOSQL('products');

		// Removes the product
		products.remove().make(function(builder) {
			builder.where('id', options.id);
			builder.callback(SUCCESS(callback));
		});
	});
});