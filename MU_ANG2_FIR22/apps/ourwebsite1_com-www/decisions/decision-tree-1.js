var shape = exports.shape = {
    "id": 1,
    "description": "Start",
    "shapeType": "Entry",
    "nextShape": {
        "id": 2,
        "description": "Select question by id",
        "shapeType": "Decision",            
        "processName": "DecisionApp.addNewQuestionWithAnswers",
        "decideName": "DecisionApp.checkQuestionId",
        "nextShape": null,                   
        "paths": [{
            "value": 1, // For question with id 1
            "selected": false,
            "nextShape": {
                "id": 3,
                "description": "Select answer by id",
                "shapeType": "Decision",
                "processName": "DecisionApp.addNewQuestionWithAnswers",
                "decideName": "DecisionApp.checkAnswerId",
                "nextShape": null,
                "paths": [{
                    "value": 1, // For question with id 1 and answer with id 1
                    "selected": false,
                    "nextShape": {
                        "id": 4,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 2, "display": "1.1>Ben je ondernemer of accountant?"}, "new_answers": [{"id": 1, "display": "Ondernemer"},{"id": 2, "display": "Accountant"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShape": {
                            "id": 9999,
                            "shapeType": "Terminator",
                            "description": "End"
                        }
                    }
                },
                {
                    "value": 2, // For question with id 1 and answer with id 2
                    "selected": false,
                    "nextShape": {
                        "id": 5,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 2, "display": "1.2>Ben je ondernemer of accountant?"}, "new_answers": [{"id": 1, "display": "Ondernemer"},{"id": 2, "display": "Accountant"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShapeId": 9999
                    }
                },
                {
                    "value": 3, // For question with id 1 and answer with id 3
                    "selected": false,
                    "nextShape": {
                        "id": 6,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 2, "display": "1.3>Ben je ondernemer of accountant?"}, "new_answers": [{"id": 1, "display": "Ondernemer"},{"id": 2, "display": "Accountant"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShapeId": 9999
                    }
                }]
            }
        },
        {
            "value": 2, // For question with id 2
            "selected": false,
            "nextShape": {
                "id": 7,
                "description": "Select answer by id",
                "shapeType": "Decision",
                "processName": "DecisionApp.addNewQuestionWithAnswers",
                "decideName": "DecisionApp.checkAnswerId",
                "nextShape": null,
                "paths": [{
                    "value": 1, // For question with id 2 and answer with id 1
                    "selected": false,
                    "nextShape": {
                        "id": 8,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 3, "display": "2.1>Waarvoor ga je Speedo gebruiken?"}, "new_answers": [{"id": 1, "display": "a"},{"id": 2, "display": "b"},{"id": 3, "display": "c"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShapeId": 9999
                    }
                },
                {
                    "value": 2, // For question with id 2 and answer with id 2
                    "selected": false,
                    "nextShape": {
                        "id": 9,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 3, "display": "2.2>Waarvoor ga je Speedo gebruiken?"}, "new_answers": [{"id": 1, "display": "A"},{"id": 2, "display": "B"},{"id": 3, "display": "C"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShapeId": 9999
                    }
                },
                {
                    "value": 3, // For question with id 2 and answer with id 3
                    "selected": false,
                    "nextShape": {
                        "id": 10,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 3, "display": "2.3>Waarvoor ga je Speedo gebruiken?"}, "new_answers": [{"id": 1, "display": "A1"},{"id": 2, "display": "B1"},{"id": 3, "display": "C1"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShapeId": 9999
                    }
                }]
            }
        },
        {
            "value": 3, // For question with id 3
            "selected": false,
            "nextShape": {
                "id": 11,
                "description": "Select answer by id",
                "shapeType": "Decision",
                "processName": "DecisionApp.addNewQuestionWithAnswers",
                "decideName": "DecisionApp.checkAnswerId",
                "nextShape": null,
                "paths": [{
                    "value": 1, // For question with id 3 and answer with id 1
                    "selected": false,
                    "nextShape": {
                        "id": 12,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 4, "display": "3.1>Hoeveel facturen maak je per jaar?"}, "new_answers": [{"id": 1, "display": "a"},{"id": 2, "display": "b"},{"id": 3, "display": "c"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShapeId": 9999
                    }
                },
                {
                    "value": 2, // For question with id 3 and answer with id 2
                    "selected": false,
                    "nextShape": {
                        "id": 13,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 4, "display": "3.2>Hoeveel facturen maak je per jaar?"}, "new_answers": [{"id": 1, "display": "A"},{"id": 2, "display": "B"},{"id": 3, "display": "C"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShapeId": 9999
                    }
                },
                {
                    "value": 3, // For question with id 3 and answer with id 3
                    "selected": false,
                    "nextShape": {
                        "id": 14,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 4, "display": "3.3>Hoeveel facturen maak je per jaar?"}, "new_answers": [{"id": 1, "display": "A1"},{"id": 2, "display": "B1"},{"id": 3, "display": "C1"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShapeId": 9999
                    }
                }]
            }
        }]
    }
};