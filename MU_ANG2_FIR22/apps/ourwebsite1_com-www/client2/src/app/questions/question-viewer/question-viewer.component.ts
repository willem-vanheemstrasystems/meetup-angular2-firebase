import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionModel } from '../../models/question.model';
import { QuestionsService } from '../../services/questions.service';
import { QuestionDetailsComponent } from '../shared/question-details/question-details.component';

@Component({
  selector: 'app-question-viewer',
  templateUrl: './question-viewer.component.html',
  styleUrls: ['./question-viewer.component.scss'],
	providers: [ QuestionsService ]
})
export class QuestionViewerComponent implements OnInit {

	question: QuestionModel;

  constructor(
		private route: ActivatedRoute,
		private router: Router,
		private questionsService: QuestionsService
  ) { }

  ngOnInit() {
		this.route.params.subscribe(params => {
			this.questionsService.get(parseInt(params['id'], 10)).subscribe(question => this.question = question);
		});    
  }

	editQuestion(questionId: number) {
		this.router.navigate(["/question", questionId, "edit"]);
	}

	returnToList() {
		this.router.navigate(["/questions/"]);
	}

}
