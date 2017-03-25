import { QuestionAnswersModel } from "../models/questionAnswers.model";

export class QuestionnaireModel {
  constructor(
    public id: number,
    public questionnaire: QuestionAnswersModel[]
  ) { }
}