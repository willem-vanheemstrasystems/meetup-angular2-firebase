NEWSCHEMA('Questionnaire').make(function(schema) {

	schema.setSave(function(error, model, controller, callback) {
        console.log("schema-questionnaire - schema.setSave() called");	        
		// var item = model.$clean();
		// if (!item.url)
		// 	item.url = controller.app.url;
		// item.datecreated = new Date();
		// item.internal = controller.app.internal;
		// controller.user.notify(item);


        // TEMP SOLUTION HARDCODED, THIS SHOULD BECOME DYNAMIC
        var questionAnswersArray = {'question':[{'id':'2', 'display':'Ben je ondernemer of accountant?'}], 'answers': [{'id':'1', 'display':'Ondernemer'},{'id':'2', 'display':'Accountant'}]};


        console.log("schema-questionnaire - schema.setSave(), questionAnswersArray = ", questionAnswersArray);
		callback(SUCCESS(true, questionAnswersArray));
	});

});