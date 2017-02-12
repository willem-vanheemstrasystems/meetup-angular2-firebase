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
	 * adds an operator to equation string
	 * @param operator - operator to be added
	*/
	addOperator(operator: string): void {
		// if characters can't be added, returns and does nothing
		if(this.calculator_service.getEquationLength() >= this.calculator_service.digit_limit){
			return;
		}
		// if the last pushed button was the equal button, resets the calculator
		if(this.reset_on_click){
			this.reset_on_click = false;
		}
		if(this.calculator_service.equation == "0" && operator == "-"){
			this.calculator_service.equation = operator;
			this.calculator_service.can_add_operator = false;
			this.wrote_memory = false;
			this.calculator_service.is_reseted = false;
		}
		if(this.calculator_service.can_add_operator){
			this.calculator_service.equation += operator;
			this.calculator_service.can_add_operator = false;
			this.wrote_memory = false;
		}
	}

	/*
	 * solves a given string
	 * @param eq - string to solve
	 * @returns {number} solved value; or {null} if can't be solved
	*/
	solve(eq: string): number {
		try{
			return eval(eq);
		}catch(Exception){
			return null;
		}
	}

	/*
	 * updates the result variable and equation string
	 * adds the result to the result list
	*/
	equal(): void {
		let eq:string = this.calculator_service.equation;
		// replaces the M characters by memory value
		if(eq.indexOf('M') != -1 && this.calculator_service.memory != null){
			eq = this.calculator_service.equation.split('M').join(this.calculator_service.memory.toString());
		}
		// saves result
		this.calculator_service.result = this.solve(eq);
		// if result is valid, saves result to result-list
		if(this.calculator_service.result != null && eq != '0'){
			this.calculator_service.equation = this.calculator_service.result.toString();
			this.calculator_service.addToResultList(this.calculator_service.result, eq);
			this.wrote_memory = false;
			this.reset_on_click = true;
		}
	}

	/*
	 * deletes the last character of equation string if it isn't resetted
	*/
	deleteLastChar(): void {
		// if the last pushed button was equal, resets calculator instead
		if(this.reset_on_click){
			this.reset();
			return;
		}
		if(this.calculator_service.getEquationLength() != 1){
			this.calculator_service.equation = this.calculator_service.equation.slice(0,-1);
			this.calculator_service.can_add_operator = true;
		// if the character to be resetted is the only one in equation, resets calculator
		}else{
			this.reset();
			this.calculator_service.can_add_operator = false;
		}
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
