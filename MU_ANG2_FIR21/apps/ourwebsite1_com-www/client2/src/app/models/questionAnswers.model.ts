import { QuestionModel } from "../models/question.model";
import { AnswersModel } from "../models/answers.model";

export class QuestionAnswersModel {
  constructor(
    public question: QuestionModel,
    public answers: AnswersModel[]
  ) { }
}