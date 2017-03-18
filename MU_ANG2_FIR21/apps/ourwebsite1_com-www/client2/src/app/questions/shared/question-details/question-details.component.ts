import { Component, OnInit, Input } from '@angular/core';
import { QuestionModel } from '../../../models/question.model';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {

	@Input()
	question: QuestionModel;

  constructor() { }

  ngOnInit() {
  }

}
