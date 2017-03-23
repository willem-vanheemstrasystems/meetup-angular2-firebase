import { Component, OnInit, Renderer, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionModel } from '../../models/question.model';
import { QuestionAnswerModel } from '../../models/questionAnswer.model';
import { QuestionnaireModel } from '../../models/questionnaire.model';
import { QuestionnairesService } from '../../services/questionnaires.service';
import { QuestionnaireListComponent } from '../shared/questionnaire-list/questionnaire-list.component';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-questionnaire-viewer',
  templateUrl: './questionnaire-viewer.component.html',
  styleUrls: ['./questionnaire-viewer.component.scss'],
  providers: [QuestionnairesService]
})
export class QuestionnaireViewerComponent implements OnInit {

  @ViewChild(QuestionnaireListComponent)
    private questionnaireListComponent: QuestionnaireListComponent;

  questionnaireId: number;
  // Placeholder, necessary!
  questionnaire: QuestionnaireModel = {
    id: 1,
    questionnaire: [
      { 
        question: { id: 1, display: '' }, 
        answers: []
      }    
    ]
  };

  loading: boolean = false;
  failed: boolean = false;

//   public questions: any = [
//     { id: '1', display: 'Gebruik je reeds Speedo, echt?' },
//     { id: '2', display: 'Ben je ondernemer of accountant?' },
//     { id: '3', display: 'Waarvoor ga je Speedo gebruiken?' },
//     { id: '4', display: 'Hoeveel facturen maak je per jaar?' },
//     { id: '5', display: 'Hoeveel administraties voer je?' },
//     { id: '6', display: 'Hoe uitgebreid wens je de functionaliteit voor het boekhouden?' }
//   ];

  constructor(
		private router: Router,
		private route: ActivatedRoute,  
		private questionnairesService: QuestionnairesService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.failed = false;
    this.questionnaireId = parseInt(this.route.params['id'],10);
    this.route.params.subscribe(params => {
      this.questionnaireId = parseInt(params['id'],10)
      this.questionnairesService.get(this.questionnaireId)
      .subscribe(questionnaire => {
        console.log("QuestionnaireViewerComponent - ngOnInit, questionnaire = ", questionnaire);
        this.questionnaire = questionnaire;
        this.loading = false;
      },() => {
        this.loading = false;
        this.failed = true;      
      })
    });
  }

  insertAll(questionsAnswersArray: Array<QuestionAnswerModel>) {
    console.log("QuestionnaireViewerComponent - insertAll, questionsAnswersArray = ", questionsAnswersArray);
    this.questionnairesService.insertAll(questionsAnswersArray).subscribe(result => {
      console.log("QuestionnaireViewerComponent - insertAll - result = ", result);
      if(result['success']) {
        console.log("QuestionnaireViewerComponent - insertAll, SUCCESS = ", result['success']);
        console.log("QuestionnaireViewerComponent - insertAll, result['value'] = ", result['value']);
        //Append the new question and answers to questionnaire
        console.log("QuestionnaireViewerComponent - insertAll, BEFORE push this.questionnaire = ", this.questionnaire);
        this.questionnaire.questionnaire.push(result['value']);
        console.log("QuestionnaireViewerComponent - insertAll, AFTER push this.questionnaire = ", this.questionnaire);
        this.questionnaireListComponent.syncQuestionnaireWithForm();
      }
      else {
        console.log("QuestionnaireViewerComponent - insertAll, ERROR occurred: result = ", result);
      }
    });
  }

  addQuestion(control: FormArray) {
	  console.log("QuestionnaireViewerComponent - addQuestion, control = ", control);
    let questionsAnswersArray: Array<QuestionAnswerModel> = [];
    for(let i=0; i < control.controls.length; i++) {
      // Check here for 'empty question, empty answer' control, and skip those
      console.log("QuestionnaireViewerComponent - addQuestion, control.controls[i].value =", control.controls[i].value);
      if(control.controls[i].value.question !== "") {
        questionsAnswersArray.push(control.controls[i].value);
      }
    }
    console.log("QuestionnaireViewerComponent - addQuestion, questionsAnswersArray = ", questionsAnswersArray);
    // POST the questions to the REST endpoint, then process the returned question
    this.insertAll(questionsAnswersArray);
    console.log("QuestionnaireViewerComponent - this.questionnaire = ", this.questionnaire);
  }

// 	viewQuestion(questionId: number) {
// 		console.log("QuestionnaireViewerComponent - viewQuestion called with questionId = ", questionId);
//     this.router.navigate(['/question', questionId]);
// 	}

// 	editQuestion(questionId: number) {
// 		console.log("QuestionnaireViewerComponent - editQuestion called with questionId = ", questionId);
//     this.router.navigate(['/question', questionId, 'edit']);
// 	}

  // WE WON'T BE USING THIS ANYMORE, REMOVE
  // onPageChange(offset) {
	// 	console.log("QuestionnaireViewerComponent - onPageChange called with offset = ", offset);
  //   this.offset = offset;
  //   this.router.navigate(['/questionnaire/page', (offset / this.limit) + 1]);
  // }
}