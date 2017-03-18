import { Component, OnInit, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionModel } from '../../models/question.model';
import { QuestionsService } from '../../services/questions.service';
import { QuestionsListComponent } from '../shared/questions-list/questions-list.component';

@Component({
  selector: 'app-questions-viewer',
  templateUrl: './questions-viewer.component.html',
  styleUrls: ['./questions-viewer.component.scss'],
	providers: [ QuestionsService ]  
})
export class QuestionsViewerComponent implements OnInit {

  count: number = 0;
  offset: number = 0;
  limit: number = 10; // choose an appropriate number
  range: number = 0; // not enough space for more
  questions: QuestionModel[];
  loading: boolean = false;
  failed: boolean = false;

  constructor(
		private router: Router,
		private route: ActivatedRoute,    
		private questionsService: QuestionsService
  ) { }

  ngOnInit() {
		let observable = this.route.params
		  .map(params => params['nr'])
			.map(pageNr => (pageNr - 1) * this.limit);
		observable.subscribe(offset => this.offset = offset);
		observable.share().subscribe(offset => this.getAll(offset, this.limit));
  }

	getAll(offset: number, limit: number) {
		this.questions = [];
		this.loading = true;
		this.failed = false;
		this.questionsService.getAll(offset, limit).subscribe(result => {
	    this.questions = result['questions'];
	    this.count = result['count'];	
			this.loading = false;
		}, () => {
			this.loading = false;
			this.failed = true;
		});
	}

	viewQuestion(questionId: number) {
		console.log("QuestionsViewerComponent - viewQuestion called with questionId = ", questionId);
    this.router.navigate(['/question', questionId]);
	}

	editQuestion(questionId: number) {
		console.log("QuestionsViewerComponent - editQuestion called with questionId = ", questionId);
    this.router.navigate(['/question', questionId, 'edit']);
	}

  onPageChange(offset) {
		console.log("QuestionsViewerComponent - onPageChange called with offset = ", offset);
    this.offset = offset;
    this.router.navigate(['/questions/page', (offset / this.limit) + 1]);
  }

}
