import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { VehicleService } from '../model/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
  providers: [VehicleService]
})

export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) { 
    this.vehicles = this.vehicleService.getVehicles();
  }

  ngOnInit() {
  }

}
