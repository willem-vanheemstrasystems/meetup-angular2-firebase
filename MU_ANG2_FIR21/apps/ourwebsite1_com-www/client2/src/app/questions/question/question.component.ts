import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'] 
})
export class QuestionComponent {
  @Input('group')
  public questionForm: FormGroup;
}