import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];

  constructor() { }

  ngOnInit() {
  }

}
