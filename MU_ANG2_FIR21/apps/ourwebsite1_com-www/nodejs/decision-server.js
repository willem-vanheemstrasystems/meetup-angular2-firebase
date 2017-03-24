// Based on http://petecleary.github.io/DecisionTreeJS/examples/Node-BasicApp/index.html
var DecisionApp = require("./decision-app.js");
var DecisionTree = require("./decision-tree.js");
var DecisionTreeLib = require("./decisiontree-full.min.js");

//create a data object to process
var data = { "question": {"id": 2, "display": "Gebruik je reeds Speedo?"}, "answer": {"id": 2, "display": "Minox Online"}};

//execute the tree on the root shape
DecisionTreeLib.execute(DecisionTree.shape, data, DecisionApp.complete, { "DecisionApp": DecisionApp });