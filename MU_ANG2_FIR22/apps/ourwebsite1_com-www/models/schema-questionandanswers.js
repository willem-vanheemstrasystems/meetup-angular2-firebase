NEWSCHEMA('QuestionAndAnswer').make(function(schema) {

    var _self = this;

	//schema.define('id', 'UID');
	schema.define('question', 'Question');
	schema.define('answer', 'Answer');
});