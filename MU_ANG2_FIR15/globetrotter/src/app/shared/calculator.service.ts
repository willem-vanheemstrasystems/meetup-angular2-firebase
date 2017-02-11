import { Injectable } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';
import { ResultListComponent } from '../result-list/result-list.component';
import { ButtonsComponent } from '../buttons/buttons.component';

interface ResultsList{
	id: number;
	value: number;
	equation: string;
}

@Injectable()
export class CalculatorService {

	// list of ids for result list
	public result_list_ids: number[] = [0];
	public result_list: ResultsList[] = [];

  constructor() { }

}
