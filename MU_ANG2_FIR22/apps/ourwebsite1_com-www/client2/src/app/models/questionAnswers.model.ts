import { QuestionModel } from "../models/question.model";
import { AnswerModel } from "../models/answer.model";

export class QuestionAnswersModel {
  constructor(
    public question: QuestionModel,
    public answers: AnswerModel[]
  ) { }
}