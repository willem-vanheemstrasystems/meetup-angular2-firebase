NEWSCHEMA('Questionnaire').make(function(schema) {

    var _self = this;

	//schema.define('id', 'UID');
	schema.define('id', 'String');
	schema.define('values', '[QuestionAndAnswer]');

//	schema.define('question', 'Question');
//	schema.define('answers', '[Answer]');

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

		var _nextQuestion = _self.nextQuestion(model, controller);
//        console.log("schema-questionnaire - schema.setSave(), _nextQuestion = ", _nextQuestion);
		callback(SUCCESS(true, _nextQuestion));
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
    // THE BELOW FUNCTION NEEDS TO BE MOVED TO SOMEWHERE MORE APROPRIATE
	_self.nextQuestion = function(model, controller) {
//		console.log("schema-questionnaire - nextQuestion, model = ", model);
//		console.log("schema-questionnaire - nextQuestion, controller = ", controller);
        var questionAnswersArray = {'question':{'id':'2', 'display':'Ben je ondernemer of accountant?'}, 'answers': [{'id':'1', 'display':'Ondernemer'},{'id':'2', 'display':'Accountant'}]};
        return questionAnswersArray;
	};
});