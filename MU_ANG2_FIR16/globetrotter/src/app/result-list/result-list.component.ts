import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../shared/calculator.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  constructor(private calculator_service: CalculatorService) { }

	// result-list component items
	result_list = this.calculator_service.result_list;

  ngOnInit() {
  }

}
