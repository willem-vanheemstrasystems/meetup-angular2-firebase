import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Interviewee } from './interviewee.interface';
import { QuestionsService } from "../../../services/questions.service";
import { QuestionModel } from '../../../models/question.model';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {

  filterQuestions: string = '';

  public myForm: FormGroup;
  public moreQuestions: boolean = true;
  public totalQuestions: number = 6; // Set as is appropriate
  public showRecommendation: boolean = false;

  @Input()
	public questions: QuestionModel[] = [];  //WORKS!

  @Input()
	count: number;

  // Gebruik je reeds Minox?
  public uses = [
    { id: '1', display: 'Nee' },
    { id: '2', display: 'Speedo Online' },
    { id: '3', display: 'Speedo voor Windows' } 
  ];

  // Ben je ondernemer of accountant?
  public professions = [
    { id: '1', display: 'Ondernemer' },
    { id: '2', display: 'Accountant' }   
  ];  

  // Waarvoor ga je Minox gebruiken?
  public usages = [
    { id: '1', display: 'Boekhouden' },
    { id: '2', display: 'Boekhouden + Factureren' },
    { id: '3', display: 'Alleen Factureren' }, 
    { id: '4', display: 'Boekhouden + Factureren + Orders + Logistiek' }      
  ];

  // Hoeveel facturen maak je per jaar?
  public invoices = [
    { id: '1', display: '1-50' },
    { id: '2', display: '>50' }      
  ];

  // Hoeveel administraties voer je?
  public administrations = [
    { id: '1', display: '1-2' },
    { id: '2', display: '3' },
    { id: '3', display: '>3' }  
  ];  

  // Hoe uitgebreid wens je de functionaliteit voor het boekhouden?
  public functionalities = [
    { id: '1', display: 'Zo eenvoudig mogelijk' },
    { id: '2', display: 'Uitgebreid' },
    { id: '3', display: 'Extra uitgebreid' }
  ];

  constructor(
    private _fb: FormBuilder,
		protected questionsService: QuestionsService 
  ) { }

  ngOnInit() {
    console.log("QuestionnaireListComponent - ngOnInit()");
    this.myForm = this._fb.group({
      // name: ['', [Validators.required, Validators.minLength(5)]],
      questions: this._fb.array([
        this.initQuestion(),
      ])
    });
  }

  initQuestion() {
    return this._fb.group({
      question: [''],
      answer: ['', Validators.required]
    });
  }

  addQuestion() {
    const control = <FormArray>this.myForm.controls['questions'];
    control.push(this.initQuestion());
    for(let i=0; i < control.value.length; i++) {
      control.value[i].question = this.questions[i];
    }
    if(control.length >= this.totalQuestions) {
      this.moreQuestions = false;
    } else {
      this.moreQuestions = true;
    }
  }

  showRecommendations() {
    const control = <FormArray>this.myForm.controls['questions'];      
    for(let i=0; i < control.value.length; i++) {
      control.value[i].question = this.questions[i];
    }    
    this.showRecommendation = true;
  }

  removeQuestion(i: number) {
    const control = <FormArray>this.myForm.controls['questions'];
    control.removeAt(i);
    if(control.length >= this.totalQuestions) {
      this.moreQuestions = false;
    } else {
      this.moreQuestions = true;
    }      
  }

  save(model: Interviewee) {
    // call API to save
    // ...
    console.log(model);
  }

}
