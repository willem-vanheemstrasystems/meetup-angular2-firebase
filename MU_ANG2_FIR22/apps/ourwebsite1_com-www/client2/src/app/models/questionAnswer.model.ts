import { QuestionModel } from "../models/question.model";
import { AnswerModel } from "../models/answer.model";

export class QuestionAnswerModel {
  constructor(
    public question: QuestionModel,
    public answer: AnswerModel
  ) { }
}
