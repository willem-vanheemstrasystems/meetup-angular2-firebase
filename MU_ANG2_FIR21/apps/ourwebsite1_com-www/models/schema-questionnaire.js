NEWSCHEMA('Questionnaire').make(function(schema) {

	schema.define('id', 'UID');
	//schema.define('display', 'Text', true);
	//schema.define('questionnaire.question.display', 'Text', true); // NOT VALID

	schema.setSave(function(error, model, controller, callback) {
        console.log("schema-questionnaire - schema.setSave() called");	        
		// var item = model.$clean();
		// if (!item.url)
		// 	item.url = controller.app.url;
		// item.datecreated = new Date();
		// item.internal = controller.app.internal;
		// controller.user.notify(item);

        // TEMP SOLUTION HARDCODED, THIS SHOULD BECOME DYNAMIC
        var questionAnswersArray = {'question':{'id':'2', 'display':'Ben je ondernemer of accountant?'}, 'answers': [{'id':'1', 'display':'Ondernemer'},{'id':'2', 'display':'Accountant'}]};

        console.log("schema-questionnaire - schema.setSave(), questionAnswersArray = ", questionAnswersArray);
		callback(SUCCESS(true, questionAnswersArray));
	});

	schema.setGet(function(error, model, options, callback) {
		var questionnaires = NOSQL('questionnaires');

		// Reads the questionnaire
		questionnaires.one().make(function(builder) {
			builder.where('id', options.id);
			builder.callback(callback, 'error-questionnaire-404');
		});
	});

	schema.setQuery(function(error, options, callback) {

		var questionnaires = NOSQL('questionnaires');

		// Reads the questionnaires
		questionnaires.find().make(function(builder) {

			if (options.search) {
				builder.or();
				//builder.search('questionnaire.question.display', search); // CHECK THIS
				builder.end();
			}

			builder.fields('id', 'questionnaire');
			builder.callback(callback);
		});
	});

});