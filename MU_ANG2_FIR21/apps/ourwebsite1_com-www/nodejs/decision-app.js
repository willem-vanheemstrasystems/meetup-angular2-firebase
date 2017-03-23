var DecisionApp = exports;
(function (DecisionApp) {
    //logs messages to the console
    DecisionApp.log = function (message) {
        console.log(message);
    };

    //add function
    function add(data, shape, callback) {
        try {        
            DecisionApp.log("*************");
            DecisionApp.log("add function called");              
            DecisionApp.log("data.a=" + data.a);
            var v = Number(shape.properties.value);
            if(isNaN(v)) {
                throw new Error("'" + v + "' is not a number");
            }
            DecisionApp.log("adding: " + v);
            data.a += v;
            DecisionApp.log("data.a=" + data.a);
            callback(null, shape);        
        } catch (e) {
            callback(e, shape);
        }        
    }
    DecisionApp.add = add;

    //check value function
    function checkValue(data, shape, callback) {
        try  {
            DecisionApp.log("*************");
            DecisionApp.log("checkValue function called");       
            DecisionApp.log("checking data.a (" + data.a + ") is less than shape.properties.decision (" + shape.properties.decision + ")");
            if(data.a < shape.properties.decision) {
                DecisionApp.log("data.a < shape.properties.decision selecting path[0]");
                shape.paths[0].selected = true;
                shape.paths[1].selected = false;
            } else {
                DecisionApp.log("data.a >= shape.properties.decision selecting path[1]");
                shape.paths[0].selected = false;
                shape.paths[1].selected = true;
            }
            callback(null, shape);
        } catch (e) {
            callback(e, shape);
        }
    }
    DecisionApp.checkValue = checkValue;

    //complete function
    function complete(err, result, processedShapes) {
        DecisionApp.log("*************");
        DecisionApp.log("complete function called");
        DecisionApp.log("error: " + err);
        DecisionApp.log("result: " + result.a);    
        for(var x = 0; x < processedShapes.length; x++) {
            DecisionApp.log("processed Shape: " + processedShapes[x].description + " id:" + processedShapes[x].id);
        }
        DecisionApp.log("Processed shapes JSON");
        DecisionApp.log(JSON.stringify(processedShapes));
    }
    DecisionApp.complete = complete;
})(DecisionApp || (DecisionApp = {}));