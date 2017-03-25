import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { QuestionModel } from '../../models/question.model';
import { QuestionsService } from '../../services/questions.service';
import { QuestionFormComponent } from '../shared/question-form/question-form.component';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss'],
	providers: [ QuestionsService ]
})
export class QuestionEditorComponent implements OnInit {

  question: QuestionModel = <QuestionModel>{};

  constructor(
    private questionsService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute    
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.questionsService.get(parseInt(params['id'],10)).subscribe(question =>
      this.question = question));    
  }

  saveQuestion(question: QuestionModel) {
    (question.id
      ? this.questionsService.update(question)
      : this.questionsService.insert(question))
        .subscribe(question => {
          this.router.navigate(["/questions/"]);
        });
  }

  deleteQuestion(question: QuestionModel) {
    if (confirm('Are you sure you want to delete this question?')) {
      this.questionsService.delete(question.id).subscribe(question =>
        this.router.navigate(["/questions/"]));
    }
  }

  cancelQuestion(question: QuestionModel) {
    this.router.navigate(["/questions/"]);
  }

}
