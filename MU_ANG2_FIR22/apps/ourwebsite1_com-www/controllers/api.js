exports.install = function() {

	// Sets cors for this API
	F.cors('/api/*', ['get', 'post', 'put', 'delete'], true);

	// Creates routes
	F.restful('/api/users/', ['*User'], json_query, json_read, json_save, json_delete);
	F.restful('/api/products/', ['*Product'], json_query, json_read, json_save, json_delete);
	F.restful('/api/questions/', ['*Question'], json_query, json_read, json_save, json_delete);
	F.restful('/api/questionnaires/', ['*Questionnaire'], json_query, json_read, json_save, json_delete);

	// Is same as:
	// F.route('/api/users/',      json_query,   ['*User']);
	// F.route('/api/users/{id}/', json_read,    ['*User']);
	// F.route('/api/users/',      json_save,    ['post', '*User']);
	// F.route('/api/users/{id}/', json_save,    ['put', '*User']);
	// F.route('/api/users/{id}/', json_delete,  ['delete', '*User']);

    // Public API for applications
	F.route('/api/serviceworker/', json_serviceworker, ['#authorize', 'post', '*Service'], 128);
	F.route('/api/notifications/', json_notifications, ['#authorize', 'post', '*Notification']);
	F.route('/api/applications/',  json_applications,  ['#authorize']);
	F.route('/api/users/',         json_users,         ['#authorize']);
	F.route('/session/',           json_session);      // Uses `controller.query.token`
	F.route('/openplatform/',      json_info);         // Doesn't need authorize, it's a public data

    // Special case, it will return the next question and possible answers
	F.route('/api/questionnaire/', json_questionnaire, ['#questionnaire', 'post', '*Questionnaire']);
	// Expects a JSON POST request, like:
	// {"id": "1", "values":[{ "question":{"id":"1", "display":"Gebruik je reeds Speedo?"}, "answer":{"id":"2", "display":"Speedo Online"}}]}
};

function json_query() {
	var self = this;
	var options = {};

	options.search = self.query.search;

	self.$query(options, self.callback());
}

function json_read(id) {	
	var self = this;
	var options = {};

	options.id = id;

	self.$get(options, self.callback());
}

function json_create() {
	var self = this;
	self.$save(self.callback());
}

function json_save(id) {
	var self = this;

	if (id)
		self.body.id = id;

	self.$save(self.callback());
}

function json_delete(id) {
	var self = this;
	var options = {};

	options.id = id;

	self.$remove(options, self.callback());
}

// Middleware for API (a security element)
F.middleware('authorize', function(req, res, next, options, controller) {

	var idapp = req.headers['x-openplatform-id'] || '';
	var iduser = req.headers['x-openplatform-user'] || '';

	if (!idapp || !iduser) {
		next = null;
		controller.invalid(400).push('error-invalid-headers');
		return false;
	}

	var app = APPLICATIONS.findItem('id', idapp);

	if (!app) {
		next = null;
		controller.invalid(400).push('error-application-notfound');
		return false;
	}

	if (app.origin && app.origin.length && app.origin.indexOf(req.ip) === -1) {
		next = null;
		controller.invalid(400).push('error-application-origin');
		return false;
	}

	if (app.secret && app.secret !== req.headers['x-openplatform-secret']) {
		next = null;
		controller.invalid(400).push('error-application-secret');
		return false;
	}

	var type = req.split[1];
	if (type !== 'openplatform' && !app[type]) {
		next = null;
		controller.invalid(400).push('error-application-permissions');
		return false;
	}

	var user = USERS.findItem('id', iduser);
	if (!user) {
		next = null;
		controller.invalid().push('error-user-notfound');
		return false;
	}

	if (!user.applications[app.internal]) {
		next = null;
		self.invalid(400).push('error-user-application');
		return false;
	}

	req.user = user;
	controller.app = app;
	next();
});

// Middleware for API (a questionnaire element)
F.middleware('questionnaire', function(req, res, next, options, controller) {
    console.log("controllers - api.js - F.middleware questionnaire called");

// See also: https://github.com/totaljs/examples/tree/master/middleware

    console.log("controllers - api.js - F.middleware questionnaire, controller.body.$clean() = ");
	//console.log(controller.query); // This gets the form data from the POST request URL
    //console.log(controller.body.$clean()); // This gets the form data from the POST request body
    console.log(JSON.stringify(controller.body.$clean())); // WORKS!

	next();
});

// Sends data to other applications
function json_serviceworker() {
	var self = this;
	self.$save(self, self.callback());
}

// Return next question, based on previous questions and answers
function json_questionnaire() {
    console.log("controllers - api.js, json_questionnaire() called");	
	var self = this;

    //console.log("controllers - api.js, json_questionnaire(), self.query = ", self.query); // This gets the form data from the POST request URL
    //console.log("controllers - api.js, json_questionnaire(), self.body.$clean() = ", self.body.$clean()); // This gets the form data from the POST request body

	// Based on http://petecleary.github.io/DecisionTreeJS/examples/Node-BasicApp/index.html

    //create a data object to process
//    var data = { "question": {"id": 2, "display": "Gebruik je reeds Speedo?"}, "answer": {"id": 2, "display": "Speedo Online"}};
    var data = self.body.$clean();
	var DecisionTree = require("../decisions/decision-tree-" + data.id + ".js");
	var DecisionTreeLib = require("../decisions/decisiontree-full.min.js");
	data = data.values;
	data = data.pop(); // Get last object in Array, i.e. latest question answered
	//console.log("controllers - api.js, json_questionnaire(), data = ", data); // WORKS!

	var DecisionApp = exports;
	(function (DecisionApp) {
		//logs messages to the console
		DecisionApp.log = function (message) {
			console.log(message);
		};

		//add new question with answers function
		function addNewQuestionWithAnswers(data, shape, callback) {
			try {
				DecisionApp.log("*************");
				DecisionApp.log("add new question with answers function called");		
				DecisionApp.log("adding: " + shape.properties.new_question);
				data.new_question = shape.properties.new_question;
				DecisionApp.log("adding: " + shape.properties.new_answers);
				data.new_answers = shape.properties.new_answers;
				callback(null, shape);  
			} catch (e) {
				callback(e, shape);
			}
		}
		DecisionApp.addNewQuestionWithAnswers = addNewQuestionWithAnswers;

		//check question id function
		function checkQuestionId(data, shape, callback) {
			try  {
				DecisionApp.log("*************");
				DecisionApp.log("checkQuestionId function called");
				DecisionApp.log("checking data.question.id (" + data.question.id + ") is equal to shape.paths[i].value");
				for(var i=0; i<shape.paths.length; i++) {
                   shape.paths[i].selected = false;  // RESET ALL paths TO false
					if(Number(data.question.id) == Number(shape.paths[i].value)) {	
						DecisionApp.log("data.question.id " + data.question.id + " == shape.paths[" + i + "].value " + shape.paths[i].value + ", selecting path[" + i + "]");
						shape.paths[i].selected = true;
					}
				}
				callback(null, shape);
			} catch (e) {
				callback(e, shape);
			}
		}
		DecisionApp.checkQuestionId = checkQuestionId;

		//check answer id function
		function checkAnswerId(data, shape, callback) {
			try  {
				DecisionApp.log("*************");
				DecisionApp.log("checkAnswerId function called");       
				DecisionApp.log("checking data.answer.id (" + data.answer.id + ") is equal to shape.paths[i].value");
				for(var i=0; i<shape.paths.length; i++) {
                    shape.paths[i].selected = false;  // RESET ALL paths TO false
					if(Number(data.answer.id) == Number(shape.paths[i].value)) {
						DecisionApp.log("data.answer.id " + data.answer.id + " == shape.paths[" + i + "].value " + shape.paths[i].value + ", selecting path[" + i + "]");
						shape.paths[i].selected = true;
					}
				}
				callback(null, shape);
			} catch (e) {
				callback(e, shape);
			}
		}
		DecisionApp.checkAnswerId = checkAnswerId;

		//complete function
		function complete(err, result, processedShapes) {
			DecisionApp.log("*************");
			DecisionApp.log("complete function called");
			DecisionApp.log("error: " + err);
			DecisionApp.log("question: " + JSON.stringify(result.question));
			DecisionApp.log("answer: " + JSON.stringify(result.answer));  
			for(var x = 0; x < processedShapes.length; x++) {
				DecisionApp.log("processed Shape: " + processedShapes[x].description + " id:" + processedShapes[x].id);
			}
			DecisionApp.log("new question: " + JSON.stringify(result.new_question));
			DecisionApp.log("new answers: " + JSON.stringify(result.new_answers));        
			DecisionApp.log("Processed shapes JSON");
			//DecisionApp.log(JSON.stringify(processedShapes));

			var response = {};
			response.success = true;
			response.value = {};
			response.value.question = result.new_question;
			response.value.answers = result.new_answers;

			// {
			//   "success": true,
			//   "value": {
			//     "question": {
			//       "id": "2",
			//       "display": "Ben je ondernemer of accountant?"
			//     },
			//     "answers": [
			//       {
			//         "id": "1",
			//         "display": "Ondernemer"
			//       },
			//       {
			//         "id": "2",
			//         "display": "Accountant"
			//       }
			//     ]
			//   }
			// }

			self.json(response);
		}
		DecisionApp.complete = complete;
	})(DecisionApp || (DecisionApp = {}));

	//execute the tree on the root shape
	DecisionTreeLib.execute(DecisionTree.shape, data, DecisionApp.complete, { "DecisionApp": DecisionApp });

}

// Creates a notification
function json_notifications() {
	var self = this;
	self.$save(self, self.callback());
}

// Returns all registered applications
function json_applications() {
	var self = this;
	var arr = [];

	for (var i = 0, length = APPLICATIONS.length; i < length; i++) {
		var item = APPLICATIONS[i];
		if (!self.user.applications[item.internal])
			continue;
		arr.push(item.export());
	}

	self.json(arr);
}

// Returns all users
function json_users() {
	var self = this;
	var arr = [];

	for (var i = 0, length = USERS.length; i < length; i++)
		arr.push(USERS[i].export(self.app));

	self.json(arr);
}

// Returns information about this OpenPlatform (name, version, author, URL)
function json_info() {
	this.json(OPENPLATFORM.info());
}

// Returns user's profile information according to the session header
function json_session() {

	var self = this;
	var idapp = self.req.headers['x-openplatform-id'] || '';
	if (!idapp)
		return self.invalid(400).push('error-invalid-headers');

	var token = self.query.token || '';
	var arr = token.split('~');
	if (arr.length !== 4)
		return self.invalid(400).push('error-invalid-token');

	var user = USERS.findItem('internal', arr[1].parseInt());
	if (!user || !user.online || user.session !== arr[0])
		return self.invalid(400).push('error-invalid-token');

	var app = APPLICATIONS.findItem('internal', arr[2].parseInt());
	if (!app || !user.applications[app.internal] || user.signature(app) !== token)
		return self.invalid(400).push('error-invalid-token');

	if (app.origin && app.origin.length && app.origin.indexOf(self.req.ip) === -1)
		return self.invalid(400).push('error-application-origin');

	if (app.secret && app.secret !== self.req.headers['x-openplatform-secret'])
		return self.invalid(400).push('error-application-secret');

	var output = user.export(app);
	output.config = app.config;
	output.openplatform = OPENPLATFORM.info();
	self.json(output);
}