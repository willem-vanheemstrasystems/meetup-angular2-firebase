import { Component, OnInit } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';
import { CalculatorService } from '../shared/calculator.service';
import { ResultListComponent } from '../result-list/result-list.component';
import { ButtonsList } from './buttons-list';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(public calculator_service: CalculatorService) { }

  // list of buttons
  public buttons = new ButtonsList(this).buttons;

	// defines if the last pressed button was MemoryRecall
	private wrote_memory: boolean = false;
	// defines if the calculator will be resetted on the next button press 
	private reset_on_click: boolean = false;  

  ngOnInit() {
  }

	/*
	 * adds a number to equation.
	 * @param num - number to be added
	*/
	addNumber(num: number): void{
		// if characters can't be added, returns false and does nothing
		if(this.calculator_service.getEquationLength() >= this.calculator_service.digit_limit){
			return;
		}
		// if the last pushed button was the equal button, resets the calculator
		if(this.reset_on_click){
			this.reset();
		}
		if(!this.calculator_service.is_reseted && num != 0){
			this.calculator_service.equation += num;
		}else{
			this.calculator_service.equation = num.toString();
			this.calculator_service.is_reseted = false;
			this.wrote_memory = false;
		}
		this.calculator_service.can_add_operator = true;
		this.reset_on_click = false;
	} 

  /*
	 * resets calculator
	 * sets equation string to "0"
	*/
	reset(): void {
		this.calculator_service.equation = "0";
		this.calculator_service.can_add_operator = false;
		this.calculator_service.is_reseted = true;
	}


}
