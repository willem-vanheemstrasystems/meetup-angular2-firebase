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
    }
    DecisionApp.complete = complete;
})(DecisionApp || (DecisionApp = {}));