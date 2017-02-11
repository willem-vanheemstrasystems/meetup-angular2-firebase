import { Component, OnInit } from '@angular/core';
import { ResultListComponent } from '../result-list/result-list.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { CalculatorService } from '../shared/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(public calculator_service: CalculatorService) { }

  ngOnInit() {
  }

}
