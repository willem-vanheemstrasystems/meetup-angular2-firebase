import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionModel } from '../../../models/question.model';

// interface SelectItem { 
// 	value: string;
// 	label: string;
// }

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input()
  question: QuestionModel = <QuestionModel>{};

  @Output()
  saveQuestion: EventEmitter<QuestionModel> = new EventEmitter<QuestionModel>();

  @Output()
  deleteQuestion: EventEmitter<QuestionModel> = new EventEmitter<QuestionModel>();

  @Output()
  cancelQuestion: EventEmitter<QuestionModel> = new EventEmitter<QuestionModel>();

	// colors: SelectItem[] = [
	// 	{ value: 'red', label: 'Red' },
	// 	{ value: 'blue', label: 'Blue' },
	// 	{ value: 'green', label: 'Green' },
	// 	{ value: 'orange', label: 'Orange' },
	// 	{ value: 'yellow', label: 'Yellow' },
	// 	{ value: 'purple', label: 'Purple' }
	// ] 

	// sizes: SelectItem[] = [
	// 	{ value: 'tiny', label: 'Tiny' },
	// 	{ value: 'small', label: 'Small' },
	// 	{ value: 'medium', label: 'Medium' },
	// 	{ value: 'large', label: 'Large' },
	// 	{ value: 'huge', label: 'Huge' }
	// ] 

  constructor() { }

  ngOnInit() {
  }

  saveQuestionButton(question: QuestionModel) {
    this.saveQuestion.emit(question);
  }

  deleteQuestionButton(question: QuestionModel) {
    this.deleteQuestion.emit(question);
  }

  cancelQuestionButton(question: QuestionModel) {
    this.cancelQuestion.emit(question);
  }

}
