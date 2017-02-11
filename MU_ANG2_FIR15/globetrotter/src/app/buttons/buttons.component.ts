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

  constructor(public calc_service: CalculatorService) { }

  // list of buttons
  public buttons = new ButtonsList(this).buttons;

  ngOnInit() {
  }

}
