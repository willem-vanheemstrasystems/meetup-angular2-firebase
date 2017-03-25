import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { QuestionsService } from "../../../services/questions.service";
import { QuestionModel } from '../../../models/question.model';
import { Subject, Observable } from "rxjs";

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  filterQuestions: string = '';

	@Input()
	questions: QuestionModel[];

	@Input()
	count: number;

	@Output()
	viewQuestion: EventEmitter<number> = new EventEmitter<number>();

	@Output()
	editQuestion: EventEmitter<number> = new EventEmitter<number>();

  terms: string = "";
  private searchTermStream = new Subject<string>();

  page: number = 1;
  private pageStream = new Subject<number>();

  constructor(
		protected questionsService: QuestionsService
	) { }

  ngOnInit() {
		console.log("QuestionsListComponent - ngOnInit(), this.questions", this.questions);		
  }

  search(terms: string) {
    this.searchTermStream.next(terms)
  }

  goToPage(page: number) {
    this.pageStream.next(page)
  }

	viewQuestionButton(questionId: number) {
		this.viewQuestion.emit(questionId)
	}

	editQuestionButton(questionId: number) {
		this.editQuestion.emit(questionId)
	}
}
