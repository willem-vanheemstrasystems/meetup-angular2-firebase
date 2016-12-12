###README.md

Based on 'Creating My First Web App with Angular 2 in Eclipse' at https://www.genuitec.com/first-angular-2-app/

See also 'Angular 2 in Eclipse' at https://jaxenter.com/angular-2-intellij-netbeans-eclipse-128461.html

Angular 2 is a framework for building desktop and mobile web applications. After hearing rave reviews about Angular 2, I decided to check it out and take my first steps into modern web development. In this article, I’ll show you how to create a simple master-details application using Angular 2, TypeScript, Angular CLI and Eclipse Java EE.

#Tools and Prerequisites

- Angular IDE—Optionally install this IDE to automate setup of the development environment including Node, NPM, Angular CLI and TypeScript + Angular 2 intelligence.
(https://www.genuitec.com/products/angular-ide/)

- Node.js and NPM—You will need to install this open-source JavaScript runtime environment and its package manager. 
(http://blog.npmjs.org/post/85484771375/how-to-install-npm)

- Angular CLI—Install this handy command line interface for Angular.
(https://cli.angular.io/)

- JDK and Eclipse for Java EE Developers—The Java EE IDE and tools I used in this example.
(https://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/neonr)

- TypeScript plugin for Eclipse—A typed superset of JavaScript that compiles to plain JavaScript.
(https://marketplace.eclipse.org/content/typescript)

- Terminal plugin for Eclipse—A fully working command-line Terminal inside Eclipse.
(https://marketplace.eclipse.org/content/tm-terminal)

- Basic TypeScript, HTML and Eclipse usage knowledge

NOTE: Try this TypeScript IDE for Eclipse instead: http://typecsdev.com/

##The Goal

Let’s create a simple app containing a vehicle list with the ability to edit vehicle properties. I’ve included a sample project that you can refer to. 

###Getting Started in Eclipse 

From the Eclipse menu, choose File>New>Dynamic Web Project; or right click in Project/Package Explorer and choose New>Dynamic Web Project.

Type 'MU_ANG2_FIR20' for the project name and click Finish—that’s all you need here.

###Angular CLI Comes to the Scene

Angular CLI is a command-line tool that allows you to create a working Angular 2 application out-of-the-box without a massive amount of manual work—and also allows you to generate Angular 2 components, services, etc. in the same way. Let’s try it! Right-click the newly created project and select Show in>Terminal.

From the Terminal view, type ```ng init```. After the process finishes, refresh the project in Eclipse—the src folder is updated with an app folder and several files; index.html (well-known to web developers) and main.ts among them. Is this really all that’s required to get an Angular 2 Hello World application? Yes! 

Open the project in Terminal view and type ```npm start```. After a short time, you’ll see output like:

```javascript
Serving on http://localhost:4200/
Build successful - 17270ms.
```

Open your browser (I use Chrome for testing) and type the given URL (http://localhost:4200/). You’ll see a “Loading…” message and then “App works!”. See, it actually works!

###Model

Let’s go ahead and create a model for our app. This model will be pretty simple. Create a package ```app.model``` in your src folder, and in it create file ```vehicle.ts``` with the following contents:

```javascript
export class Vehicle {
    id;
    name;
    type;
    mass;
}
```

The class contains only four fields describing some vehicle.

###Components

It’s time to make some UI bricks for our application, called components. Open the Terminal view for folder (Your Project)>Java Resources>src>app and type ng g component vehicle-list. The CLI command ng with the key g (or generate) is responsible for generating Angular 2 application entities and, particularly, components.

As you can conclude from its name, vehicle-list is responsible for displaying a list with vehicle details. Let’s expand vehicle-list folder and open vehicles-list.component.ts:

```javascript
import { Component, OnInit } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'app-vehicles-list',
  templateUrl: 'vehicles-list.component.html',
  styleUrls: ['vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit() {
  }
 
}
```

All the basic component infrastructure is present here.

- The first line is importing the ***Component*** decorator function. This function is describing metadata for any Angular 2 reusable UI component.

- ***Selector*** specifies the tag name that would trigger this component’s insertion.

- ***TemplateUrl*** and ***styleUrls*** specify file names that contain an html-based template for the component UI and css styling for it.

- ***Class VehiclesListComponent*** should contain almost all inner component logic written in TypeScript. For now it contains only an empty ***constructor*** and empty ***ngOnInit*** lifecycle hook. This hook can be useful for some “heavy” initialization like network or database calls, constructor should be used only for basic initialization, without any heavy IO.

OK, we’ll definitely need to store a list of our vehicles somewhere. Let’s add field vehicles: Vehicle[]; to the VehiclesListComponent class. Of course, Vehicle will be highlighted in red—currently, the TS compiler knows nothing about it. To fix this, add import { Vehicle } from '../model/vehicle'; to the imports section and save the file. The red highlighting should disappear. If not, make a small edit (like adding space) and save again—unfortunately, the current version of the TypeScript plugin has poor validation.

```javascript
...
import { Vehicle } from '../model/vehicle';
...
export class VehiclesListComponent implements OnInit {
 
  vehicles: Vehicle[];
  
  constructor() { }
 
  ngOnInit() {
  }
 
}
...
```

Well, now we have a vehicle list, but how can we interact with it? Passing it to the constructor would make our code less flexible by requiring a concrete list to be specified when creating a vehicle list component. There’s a better solution—Angular 2 supports ***Dependency Injection*** out-of-the-box, and it can be accomplished using Angular 2 Services.

Go to app.model in the terminal and type ```ng g service vehicle```. After the command executes, refresh app.model. Two files will be created, vehicle.service.spec.ts and vehicle.service.ts. The last one is interesting to us. For now we won’t implement any complex logic to obtain the list and will just hard code our vehicles list. In the following code we import the Injectable decorator, set up our list, assign given list to class field and return it by demand:

```javascript
import { Injectable } from '@angular/core';
 
var vehicles = [
	{
    	id:1,
    	name:"Trailer - 1",
    	type:"Truck",
    	mass:40
	},
	{
    	id:2,
    	name:"An-2",
    	type:"Plane",
    	mass:5
	},
	{
    	id:3,
    	name:"LandCruiser 80",
    	type:"Jeep",
    	mass:2
	},
];
 
@Injectable()
export class VehicleService {
 
	private vehicles;   
    
	constructor() {
    	this.vehicles = vehicles;
	}
 
	getVehicles() {
    	return this.vehicles;
	}    
 
}
```

Now go back to vehicles-list.component.ts, import VehicleService in the same way as Vehicle is imported, and make 2 more edits: add providers: [VehicleService] to @Component and change constructor to:

```javascript
...
@Component({
  ...
  providers: [VehicleService]
})

export class VehiclesListComponent implements OnInit {
...
  vehicles: Vehicles[];
  ...
  constructor(private vehicleService: VehicleService) {
	this.vehicles = this.vehicleService.getVehicles();
  }
...
}
```

To avoid compilation errors, you’ll need to keep consistent not only component ts script, but also spec.ts script generated for unit tests. Since we changed the constructor a bit, open it, import VehiclesService as it’s done above and change component creation to the following:

```javascript
...
import { VehicleService } from '../model/vehicle.service';
...
let component = new VehiclesListComponent(this._injector.get(VehicleService));
...
```

Here is the new vehicle-list.component.spec.ts, including the above:

```javascript
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehicleListComponent } from './vehicle-list.component';
import { VehicleService } from '../model/vehicle.service';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let component = new VehiclesListComponent(this._injector.get(VehicleService));  
    expect(component).toBeTruthy();
  });
});
```

Replace the content of app.component.html with the following:

```javascript
<h1>{{title}}</h1>
<app-vehicle-list></app-vehicle-list>
```

Change the title in app.component.ts as follows:

```javascript
...
export class AppComponent {
  title = 'Vehicle Registry';
}
...
```

Replace the content of vehicle.component.css with:

```javascript
table.tftable {color:#333333;border-width: 1px;border-color: #a9a9a9;border-collapse: collapse;}
table.tftable th {background-color:#b8b8b8;border-width: 1px;padding: 8px;border-style: solid;border-color: #a9a9a9;text-align:left;}
table.tftable tr {background-color:#ffffff;}
table.tftable td {border-width: 1px;padding: 8px;border-style: solid;border-color: #a9a9a9;}
table.tftable tr:hover {background-color: #DDD; left: .1em;}
.selected { background-color: #CFD8DC !important;}
```

We’re basically done with the component, let’s switch to UI. Open vehicle-list.component.html and replace its mock contents with our table.

```javascript
<table class="tftable">
  <tr><th>ID</th><th>Name</th><th>Type</th><th>Mass</th>
  <tr *ngFor="let vehicle of vehicles">
	<td>{{vehicle.id}}</td> <td>{{vehicle.name}}</td> <td>{{vehicle.type}}</td> <td>{{vehicle.mass}}</td>
  </tr>
</table>
```

We do a conceptually simple thing here—create a table with a constant header and then iterate over vehicles list, creating a table row for each vehicle. A row is composed of cells with corresponding properties.

- *ngFor is a built-in directive iterating over a list (vehicles in our case).

- {{ }} tells Angular to read a given property from the TypeScript model and render it.

Also, we specify table class here because we want to have some styling for it—corresponding styles are put into vehicles-list.component.css.

With ng serve still active (or if not, run ```ng serve```), the browser should show a table with vehicles at http://localhost:4200

###Plugging In

Ok, we’re done with our initial UI. 

###Master-Details

Our table is pretty, but not very interactive, huh? OK, let’s make it a bit more “dynamic” by adding a Details view that displays a clicked table row and allows the fields to be edited. Let’s create VehicleDetailsComponent under the same parent with VehiclesListComponent using command:

```javascript
ng g component vehicle-details.
```

Like it was for Vehicles List, a folder with ts and html/css files will be created. We’ll need to modify 2 of them. VehicleDetailsComponent in vehicle-details.component.ts needs to have a field for current vehicle—vehicle:Vehicle, with @Input directive above. This decorator declares the vehicle field as an input, which makes passing an actual value to it much easier.

```javascript
import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'vehicle-details',
  templateUrl: 'vehicle-details.component.html',
  styleUrls: ['vehicle-details.component.css']
})

export class VehicleDetailsComponent implements OnInit {

  @Input()
  vehicle:Vehicle;
    
  constructor() { }

  ngOnInit() {
  }

}
```

Now let’s update the template file for it, vehicle-details.component.html, to:

```javascript
<div *ngIf="vehicle">
    <h2>{{vehicle.name}} properties</h2>
    <table>
   	 <tr>
   		 <td><label>ID: </label></td>
   		 <td>{{vehicle.id}}</td>
   	 </tr>
   	 <tr>
   		 <td><label>Name: </label></td>
   		 <td><input [(ngModel)]="vehicle.name" placeholder="name" /></td>
   	 </tr>
   	 <tr>
   		 <td><label>Type: </label></td>
   		 <td><input [(ngModel)]="vehicle.type" placeholder="type" /></td>
   	 </tr>
   	 <tr>
   		 <td><label>Mass: </label></td>
   		 <td><input [(ngModel)]="vehicle.mass" placeholder="mass" /></td>
   	 </tr>
    </table>
</div>
```

- *ngIf=”vehicle”—Designates to only proceed with the content when vehicle field has value, which is needed to avoid errors when selection is empty.

- [(ngModel)]=”vehicle.name” (same for type and mass)—Implements bi-directional data binding between input field and corresponding property.

Now, we need to change our VehiclesListComponent to handle selection. Let’s add a selectedVehicle field and a method onSelect to handle selection.

Also, in the html template we’ll need to add a tag for the details component. To make it work, we need to import VehicleDetailsComponent. After given changes, vehicles-list.component.ts will look like the following:

```javascript
import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { VehicleService } from '../model/vehicle.service';
import { VehicleDetailsComponent } from '../vehicle-details/vehicle-details.component';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
  providers: [VehicleService]
})

export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];
  selectedVehicle:Vehicle;

  constructor(private vehicleService: VehicleService) { 
    this.vehicles = this.vehicleService.getVehicles();
  }

  ngOnInit() {
  }

  onSelect(vehicle: Vehicle) { this.selectedVehicle 

}
```

Next, let’s change the vehicles list template, ```vehicles-list.component.html```. We need to add the click handler to each table row to call the corresponding selection method—(click)="onSelect(vehicle)". Also, let’s add a tag for the vehicle details component below our table:

```javascript
<table class="tftable">
  <tr><th>ID</th><th>Name</th><th>Type</th><th>Mass</th>
  <tr *ngFor="let vehicle of vehicles"
      (click)="onSelect(vehicle)">
	<td>{{vehicle.id}}</td> <td>{{vehicle.name}}</td> <td>{{vehicle.type}}</td> <td>{{vehicle.mass}}</td>
  </tr>
</table>
<app-vehicle-details [vehicle]="selectedVehicle"></app-vehicle-details>
```

You can try editing any value under the “properties” and the change will be immediately reflected in the table, nothing extra needed for it! Perfect.

###A Little Bit of Styling

It looks pretty good now, but it’s a bit difficult to determine which row is selected. Let’s fix this. Add an attribute [class.selected]="vehicle === selectedVehicle" to the <tr> tag in vehicles-list.component.html. Its meaning is pretty obvious—add a CSS class for the case when the current row’s vehicle equals the selected one. Of course, to make this work, we need to add corresponding style to vehicles-list.component.css:

.selected { background-color: #CFD8DC !important;}

Let’s add hovering style too! It’s as easy as adding one line to the css file:

table.tftable tr:hover {background-color: #DDD; left: .1em;}

###Resources

[vehicles.zip](https://resources.cloud.genuitec.com/wp-content/uploads/2016/09/vehicles.zip) — Sample project for this blog

https://angular.io/docs/ts/latest/tutorial/—Tour of Heroes tutorial for Angular 2

https://cli.angular.io/—Angular CLI with commands description