import { AnswerModel } from "../models/answer.model";

export class AnswersModel  extends Array {
  constructor(
    public answers: AnswerModel[]
  ) { 
    super();
  }
}