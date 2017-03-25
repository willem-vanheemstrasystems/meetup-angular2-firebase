import { QuestionAnswersModel } from "../models/questionAnswers.model";
import { QuestionModel } from "../models/question.model";
import { AnswerModel } from "../models/answer.model";
import { AnswersModel } from "../models/answers.model";

export const QuestionsAnswersBase: QuestionAnswersModel[] = [
  new QuestionAnswersModel(
    new QuestionModel(
      1, "Gebruik je reeds Speedo?"
    ),
    new AnswersModel(
      [
        new AnswerModel(1, "Nee"), 
        new AnswerModel(2, "Speedo Online"), 
        new AnswerModel(3, "Speedo for Windows")
      ]
    )
  ),
  new QuestionAnswersModel(
    new QuestionModel(
      2, "Ben je ondernemer of accountant?"
    ),
    new AnswersModel(
      [
        new AnswerModel(1, "Ondernemer"), 
        new AnswerModel(2, "Accountant")
      ]
    )    
  ),
  new QuestionAnswersModel(
    new QuestionModel(
      3, "Waarvoor ga je Speedo gebruiken?"
    ),
    new AnswersModel(
      [
        new AnswerModel(1, "Boekhouden"), 
        new AnswerModel(2, "Boekhouden + Factureren"),
        new AnswerModel(3, "Alleen Factureren"), 
        new AnswerModel(4, "Boekhouden + Factureren + Orders + Logistiek")      
      ]
    )
  ),
  new QuestionAnswersModel(
    new QuestionModel(
      4, "Hoeveel facturen maak je per jaar?"
    ),
    new AnswersModel(
      [
        new AnswerModel(1, "1-50"), 
        new AnswerModel(2, ">50")
      ]
    )
  ),
  new QuestionAnswersModel(
    new QuestionModel(
      5, "Hoeveel administraties voer je?"
    ),
    new AnswersModel(
      [
        new AnswerModel(1, "1-2"), 
        new AnswerModel(2, "3"),
        new AnswerModel(2, ">3")     
      ]
    ) 
  ),
  new QuestionAnswersModel(
    new QuestionModel(
      6, "Hoe uitgebreid wens je de functionaliteit voor het boekhouden?"
    ),
    new AnswersModel(
      [
        new AnswerModel(1, "Zo eenvoudig mogelijk"), 
        new AnswerModel(2, "Uitgebreid"),
        new AnswerModel(3, "Extra uitgebreid")     
      ]
    ) 
  )
];