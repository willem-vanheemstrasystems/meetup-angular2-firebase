// Based on 'Use ExpressJS to Get URL and POST Parameters' at https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters

// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8002;
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// cors
// Based on https://jonathanmh.com/how-to-enable-cors-in-express-js-node-js/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes will go here
app.post('/api/questionnaire', function(req, res) {
    //console.log("NodeJS server - req = ", req);

    console.log("NodeJS server - req.body = ", req.body);

    // var question = req.param('question');
    // console.log("NodeJS server - question = ", question);

    //var foo = req.param('foo');
    //console.log("NodeJS server - foo = ", foo);

    // var data = {
    //   "bestAnimals": [
    //     "wombat",
    //     "corgi",
    //     "puffer fish",
    //     "owl",
    //     "crow"
    //   ]
    // };

    // var next_question = {'question':{'id':'2', 'display':'Ben je ondernemer of accountant?'}, 'answers': [{'id':'1', 'display':'Ondernemer'},{'id':'2', 'display':'Accountant'}]};

    // var data = {'success':true, 'value': next_question};

    // console.log("NodeJS server - res data = ", data);

    // res.json(data);

//   var user_id = req.param('id');
//   var token = req.param('token');
//   var geo = req.param('geo');  

//   res.send(user_id + ' ' + token + ' ' + geo);

    handleRequest(req, res);
});

// handle the incoming request
var handleRequest = function(req, res){
    console.log("NodeJS server - handleRequest(req, res) called");
    var nextQuestion;

    // req.body = 
    // [ 
    //     { 
    //         question: { id: 1, display: 'Gebruik je reeds Minox?' },
    //         answer: { id: 3, display: 'Minox for Windows' } 
    //     } 
    // ]
    var currentQuestionAnswers = req.body[req.body.length-1];
    console.log("NodeJS server - handleRequest(req, res), currentQuestionAnswers = ", currentQuestionAnswers);

    switch(parseInt(currentQuestionAnswers.question.id)) {
        case 1:
            nextQuestion = {"question":{"id":"2", "display":"Ben je ondernemer of accountant?"}, "answers": [{"id":"1", "display":"Ondernemer"},{"id":"2", "display":"Accountant"}]};
            break;
        case 2:
            nextQuestion = {"question":{"id":"3", "display":"Waarvoor ga je Speedo gebruiken?"}, "answers": [{"id":"1", "display":"Boekhouden"},{"id":"2", "display":"Boekhouden + Factureren"},{"id":"3", "display":"Alleen factureren"},{"id":"4", "display":"Boekhouden + Factureren + Orders + Logistiek"}]};
            break;
        case 3:
            nextQuestion = {"question":{"id":"4", "display":"Hoeveel facturen maak je per jaar?"}, "answers": [{"id":"1", "display":"1-50"},{"id":"2", "display":">50"}]};
            break;
        case 4:
            nextQuestion = {'question':{'id':'5', 'display':'Hoeveel administraties voer je?'}, 'answers': [{'id':'1', 'display':'1-2'},{'id':'2', 'display':'3'},{'id':'3', 'display':'>3'}]};
            break;
        case 5:
            nextQuestion = {'question':{'id':'6', 'display':'Hoe uitgebreid wens je de functionaliteit voor het boekhouden?'}, 'answers': [{'id':'1', 'display':'Zo eenvoudig mogelijk'},{'id':'2', 'display':'Uitgebreid'},{'id':'3', 'display':'Extra uitgebreid'}]};
            break;
        case 6:
            nextQuestion = {'question':null, 'answers': []};
            break;
        default:
    }

    var outcome = decisionTree(req);
    console.log("NodeJS server - handleRequest(req, res), outcome = ", outcome);

    console.log("NodeJS server - handleRequest(req, res), nextQuestion = ", nextQuestion);
    var data = {'success':true, 'value': nextQuestion};

    handleResponse(data, res);
};

var decisionTree = function(req) {
    // Based on http://petecleary.github.io/DecisionTreeJS/examples/Node-BasicApp/index.html
    console.log("NodeJS server - decisionTree(req) called");

    return {'question':null, 'answers': []};
}

// handle the outgoing response
var handleResponse = function(data, res) {
    console.log("NodeJS server - handleResponse(data, res), res data = ", data);
    res.json(data);    
};

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);