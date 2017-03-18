NEWSCHEMA('Question').make(function(schema) {

	schema.define('id', 'UID');
	schema.define('display', 'Text', true);

	schema.setSave(function(error, model, options, callback) {

		var questions = NOSQL('questions');

		// Removes hidden properties of the SchemaBuilder
		var data = model.$clean();

		// Checks if the question exists
		if (!model.id) {
			data.id = UID();
			data.datecreated = F.datetime;
			questions.insert(data).callback(SUCCESS(callback));
			return;
		}

		data.dateupdated = F.datetime;

		// We don't need to modify id
		delete data.id;

		questions.modify(data).make(function(builder) {
			builder.where('id', model.id);
			builder.callback(SUCCESS(callback));
		});
	});

	schema.setGet(function(error, model, options, callback) {

		var questions = NOSQL('questions');

		// Reads the question
		questions.one().make(function(builder) {
			builder.where('id', options.id);
			builder.callback(callback, 'error-question-404');
		});
	});

	schema.setQuery(function(error, options, callback) {

		var questions = NOSQL('questions');

		// Reads the question
		questions.find().make(function(builder) {

			if (options.search) {
				builder.or();
				builder.search('display', search);
				builder.end();
			}

			builder.fields('id', 'display');
			builder.callback(callback);
		});
	});

	schema.setRemove(function(error, options, callback) {

		var questions = NOSQL('questions');

		// Removes the question
		questions.remove().make(function(builder) {
			builder.where('id', options.id);
			builder.callback(SUCCESS(callback));
		});
	});
});