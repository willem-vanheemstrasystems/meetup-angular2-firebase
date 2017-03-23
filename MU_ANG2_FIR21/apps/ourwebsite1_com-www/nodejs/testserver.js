var TestApp = require("./testapp.js");
var TestTree = require("./testtree.js");
var decisionTree = require("./decisiontree-full.min.js");

//create a data object to process
var data = { "a": 1 };

//execute the tree on the root shape
decisionTree.execute(TestTree.shape, data, TestApp.complete, { "TestApp": TestApp });