##README.md

#Angular 2 - Firebase 007

Based on 'Build an Application with Angular 2' at https://angular-university.io/course/build-an-application-with-angular2

##Installing Node and the Angular 2 and Firebase Demo Application

In this lesson we are going to learn how to install the Angular + Firebase Demo application step by step.

https://angular-university.io/lesson/angular2-firebase-install-node-and-demo-app

The code for the Angular 2 and Firebase - Build a Web App Course

https://github.com/angular-university/angular-firebase-app

See also 'AngularFire2' at https://angularfire2.com

###Repository contents

This repository contains the full application of the course Angular and Firebase - Build a Web Application, so this contains the complete application like it will look like at the end of the course.

###Looking for the course starting repo ?

If you are looking for a clean starting point for coding along as you follow the course, please check this [repository](https://github.com/angular-university/angular-firebase-app-starter) instead.

###Installation pre-requisites

For running this project we need and npm installed on our machine. These are some tutorials to install node in different operating systems:

Its important to install the latest version of Node

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)

- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)

- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)

###Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

```javascript
npm install -g angular-cli
```

###Installing the code

The code can be installed with the following command (needs to be run in the folder where package.json is):

```javascript
npm install 
```

###Running the code

Run ```ng serve``` for a dev server. Navigate to ```http://localhost:4200/```. The app will automatically reload if you change any of the source files.

###Installing the Starter Kit

In this lesson we are going to setup the initial starting point for the course, its a repository that is essentially the output of the CLI but it has a few more things that we will need during the course: some extra dependencies, the data to setup a database and a script to initially populate the database.

See https://angular-university.io/lesson/angular2-firebase-starter-kit

Sign in and create a new project called 'final-project-recording' at https://console.firebase.google.com

Copy the database settings for 'final-project-recording' to be inserted in src/index.html as follows:


```javascript
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>HelloWorld</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

    <link rel="stylesheet" href="assets/app.css">
    <link rel="stylesheet" href="https://angular-academy.s3.amazonaws.com/bundles/bundle.20160714172956.min.css">
    <link rel="stylesheet"
          href="https://angular-academy.s3-us-west-1.amazonaws.com/styles/angular-academy-lessons-theme-v1.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
</head>
<body>
  <app-root>Loading...</app-root>

  <script src="https://www.gstatic.com/firebasejs/3.6.1/firebase.js"></script>
  <script>
    // Initialize Firebase, note: use your own settings!
    var config = {
      apiKey: "AIzaSyBhpTHkZZImK4D_NoAewHY6Tb-7nOqnVp8",
      authDomain: "final-project-recording-6e996.firebaseapp.com",
      databaseURL: "https://final-project-recording-6e996.firebaseio.com",
      storageBucket: "final-project-recording-6e996.appspot.com",
      messagingSenderId: "178361755097"
    };
    firebase.initializeApp(config);
    
    var root = firebase.database().ref('messages/2');
    
    root.on('value', function(snap){
      console.log(snap.key, snap.val());      
    });
  </script>
  
</body>
</html>

```

###Firebase Real-Time Database Hello World - First Query - Debug Websockets !

In this lesson we are going to login to Firebase, create our first real-time database and we are going to do our first query. We are going to see the Real-time Database in action as we are going to modify data in the database and see how the application responds.

See https://angular-university.io/lesson/angular2-firebase-sdk-hello-world

###Firebase Fundamentals - References, Snapshots and Keys

In this lesson we are going to introduce two fundamental concepts of the Firebase SDK: references, snapshots and keys. These 3 notions are essential for using the Firebase SDK correctly.

See https://angular-university.io/lesson/angular2-firebase-references-and-snapshots

###Use Firebase SDK with Typescript - Preparing to Run a Firebase Database Population Script

In this lesson we are going to reinstall the Firebase SDK but this time via npm, and we are going to use the SDK via Typescript instead of plain ES5.

See https://angular-university.io/lesson/angular2-firebase-typescript [REQUIRES SUBSCRIPTION]

```javascript
npm install firebase --save
```

--------
| NOTE: if at any time you get an error about duplicate identifier 'export=' with regards firebase
| which may show when running 'ng serve'
|
| remove the entry for "firebase" from the config file src/tsconfig.json in types, i.e.
|
| ...
| "types": [
|    "node",
|    "firebase"   <-- REMOVE THIS ENTRY
| ]
| ...
|
--------

Change the content to the following in src/app/app.component.ts

```javascript
import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor() {
    // Initialize Firebase, note: use your own settings!
    var config = {
      apiKey: "AIzaSyBhpTHkZZImK4D_NoAewHY6Tb-7nOqnVp8",
      authDomain: "final-project-recording-6e996.firebaseapp.com",
      databaseURL: "https://final-project-recording-6e996.firebaseio.com",
      storageBucket: "final-project-recording-6e996.appspot.com",
      messagingSenderId: "178361755097"
    };
    initializeApp(config);
    
    var root = database().ref('messages/2');
    
    root.on('value', function(snap){
      console.log(snap.key, snap.val());      
    });
  }
}

```

Remove the firebase database settings from src/index.html, so it now looks like:

```javascript
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>HelloWorld</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

    <link rel="stylesheet" href="assets/app.css">
    <link rel="stylesheet" href="https://angular-academy.s3.amazonaws.com/bundles/bundle.20160714172956.min.css">
    <link rel="stylesheet"
          href="https://angular-academy.s3-us-west-1.amazonaws.com/styles/angular-academy-lessons-theme-v1.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>
```

###Populate a Firebase Database with a Node Program - Use Typescript with Node using ts-node

In this lesson we are going to populate our real-time database with some data using a small node program that uses the Firebase SDK. The program is written in Typescript, so we are going to use ts-node to run it.

See https://angular-university.io/lesson/angular2-populate-firebase-db-ts-node

The data can be found in db-data.ts.

Run the populate database script from within the project root folder (it uses the 'populate-db' script defined in package.json):

```javascript
npm run populate-db
```

***WARNING VERY IMPORTANT - PLEASE READ THIS*** 

WARNING Please set your own firebase config on src/environments/firebase.config.ts

Otherwise you will get permissions errors, because the populate-db script is trying to write to my database instead of yours.

###Populate a Firebase Database -Initialization Script Explained Step By Step

In this lesson we will go over the script that we used to populate the database and explain it step by step. The script uses the Firebase SDK, and because it is a write-only script, it's actually fully synchronous due to the nature of the way that Firebase push keys work.

See https://angular-university.io/lesson/angular2-firebase-db-script-explained
 
###Firebase Data Modeling 101 - How To Model Data In Firebase ?

In this lesson we are going to learn how to structure our data in Firebase: we are going to learn how to denormalize data, and why that is necessary. We are going to learn how to build a one to many association in Firebase.

See https://angular-university.io/lesson/angular2-firebase-data-modelling

###Firebase Key Generation - How to use the Firebase Push Keys, Should We Use Them and Why ?

In this lesson we are going to talk about Firebase keys, why they are useful, how they are generated and when to use them. We are going to understand why they are ideal for concurrent access situations.

See https://angular-university.io/lesson/angular2-firebase-database-ekeys

###Firebase Arrays - Does Firebase Support Arrays ?

In this lesson we are going to talk about Firebase Array support, we are going to learn why a concurrent database cannot really support arrays in a scalable way, and what are the features that Firebase offers to support them.

See https://angular-university.io/lesson/angular2-firebase-arrays

###AngularFire 2 Hello World - How To Write your First Query using AngularFire 2 List Observables ?

In this lesson we are going to use AngularFire 2 for the first time. We are going to configure the AngularFire 2 module, inject the AngularFire service in our service layer and use it do our first Firebase query: we are going to retrieve a list of objects from the database.

See https://angular-university.io/lesson/angular2-firebase-list-observable

Install the AngularFire 2 library

```javascript
npm install angularfire2 --save
```

Add the AngularFireModule inside imports of the file src/app/app.module.ts:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Notice how it references src/environments/firebase.config.ts, which should contain your specific firebase configs:

```javascript
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyBhpTHkZZImK4D_NoAewHY6Tb-7nOqnVp8",
    authDomain: "final-project-recording-6e996.firebaseapp.com",
    databaseURL: "https://final-project-recording-6e996.firebaseio.com",
    storageBucket: "final-project-recording-6e996.appspot.com",
    messagingSenderId: "178361755097"
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
```

Now our AngularFire2 is installed.

Update the file src/app/app.component.ts:

```javascript
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor(private af: AngularFire) {
    
  }
}
```

To retrieve a List of Observables from firebase we can add code to the constructor in src/app/app.component.ts, as follows:

```javascript
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor(private af: AngularFire) {
    const courses$ : FirebaseListObservable<any> = af.database.list('courses');
    courses$.subscribe(
      val => console.log(val)
    );      
  }
}
```

Now run the following command:

```javascript
ng serve
```

Watch the console of the browser when opening http://localhost:4200. You should see a list (an Array of Objects) being loaded in the console, everytime the records in the firebase database changes.

###AngularFire 2 Object Observables - How to Read Objects from a Firebase Database?

In this lesson we are going to learn how to use AngularFire 2 to query objects, and read them from the Firebase realtime database.

See https://angular-university.io/lesson/angular2-firebase-object-observable

To retrieve an Observable from firebase we can add code to the constructor in src/app/app.component.ts, as follows:

```javascript
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor(private af: AngularFire) {
    const courses$ : FirebaseListObservable<any> = af.database.list('courses');
    courses$.subscribe(
      val => console.log(val)
    );      
    
    // use the key of the particular course you want to retrieve
    const course$ = af.database.object('courses/-KXY0m34lPj5-zlglTnn');
    course$.subscribe(
      val => console.log(val)
    );
    
  }
}
```

Now run the following command:

```javascript
ng serve
```

Watch the console of the browser when opening http://localhost:4200. You should see an Object being loaded in the console, everytime the records in the firebase database changes.

###How to Write Data to the Database using AngularFire 2 ? Adding Elements to a List

In this lesson we are going to learn how to use the AngularFire 2 List Observable push API method to add new entries to a Firebase list.

See https://angular-university.io/lesson/angular2-firebase-list-push

Make sure to import the reference to the rxjs for the operator called 'map', in the file src/app.app.module.ts:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
``

Change src/app/app.component.html to:

```javascript
<h1>
  {{title}}
</h1>

<button (click)="listPush()">List Push</button>

<button (click)="listRemove()">List Remove</button>

<button (click)="listUpdate()">List Update</button>

<button (click)="objUpdate()">Object Update</button>

<button (click)="objSet()">Object Set</button>

<button (click)="objRemove()">Object Remove</button>
``` 

Change src/app/app.component.ts to:

```javascript
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  courses$:FirebaseListObservable<any>;
  lesson$:FirebaseObjectObservable<any>;
  
  constructor(private af: AngularFire) {
    this.courses$ = af.database.list('courses');
    this.courses$.subscribe(
      val => console.log(val)
    );
    
    // use the key of the particular lesson you want to retrieve
    this.lesson$= af.database.object('lessons/-KXY0m3AJC2-SvNIsY8C');
    this.lesson$.subscribe(
      val => console.log(val)
    );
  }
  
  listPush() {
    this.courses$.push({ description: 'TEST NEW COURSE' })
      .then(
        () => console.log('List Push Done.'),
        console.error
      );
  }
  
  listRemove() {
  
  }
  
  listUpdate() {
  
  }
  
  objUpdate() {
  
  }
  
  objSet() {
  
  }

  objRemove() {
  
  }
  
}
```

###How To Remove an Element from a List using AngularFire 2 ?

In this lesson we are going to learn how to remove entries from a Firebase list using an AngularFire 2 List Observable.

See https://angular-university.io/lesson/angular2-firebase-list-remove

Change src/app/app.component.ts to:

```javascript
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  courses$:FirebaseListObservable<any>;
  lesson$:FirebaseObjectObservable<any>;
  firstCourse:any;
  
  constructor(private af: AngularFire) {
    this.courses$ = af.database.list('courses');
    this.courses$.subscribe(
      val => console.log(val)
    );
    
    // use the key of the particular lesson you want to retrieve
    this.lesson$= af.database.object('lessons/-KXY0m3AJC2-SvNIsY8C');
    this.lesson$.subscribe(
      val => console.log(val)
    );
  
    this.courses$.map(courses => courses[0])
      .subscribe(
        course => this.firstCourse = course
      );
  }
  
  listPush() {
    this.courses$.push({ description: 'TEST NEW COURSE' })
      .then(
        () => console.log('List Push Done.'),
        console.error
      );
  }
  
  listRemove() {
    this.courses$.remove(this.firstCourse)
      .then(
        () => console.log('List Remove Done.'),
        console.error
      );  
  }

  listUpdate() {
  
  }
  
  objUpdate() {
  
  }
  
  objSet() {
  
  }

  objRemove() {
  
  }
  
}
```

###How To Update an Element in a Firebase List using AngularFire 2 ?

In this lesson we are going to learn how to update an element in a Firebase list in a non-destructive way, by modifying only certain properties of the updated object and keeping the other properties intact.

See https://angular-university.io/lesson/angular2-firebase-list-update

Change src/app/app.component.ts to:

```javascript
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  courses$:FirebaseListObservable<any>;
  lesson$:FirebaseObjectObservable<any>;
  firstCourse:any;
  
  constructor(private af: AngularFire) {
    this.courses$ = af.database.list('courses');
    this.courses$.subscribe(
      val => console.log(val)
    );
    
    // use the key of the particular lesson you want to retrieve
    this.lesson$= af.database.object('lessons/-KXY0m3AJC2-SvNIsY8C');
    this.lesson$.subscribe(
      val => console.log(val)
    );
  
    this.courses$.map(courses => courses[0])
      .subscribe(
        course => this.firstCourse = course
      );
  }
  
  listPush() {
    this.courses$.push({ description: 'TEST NEW COURSE' })
      .then(
        () => console.log('List Push Done.'),
        console.error
      );
  }
  
  listRemove() {
    this.courses$.remove(this.firstCourse)
      .then(
        () => console.log('List Remove Done.'),
        console.error
      );  
  }

  listUpdate() {
    this.courses$.update(this.firstCourse, { description: 'Angular 2 HTTP Modified' })
      .then(
        () => console.log('List Update Done.'),
        console.error
      );   
  }

  objUpdate() {
  
  }
  
  objSet() {
  
  }

  objRemove() {
  
  }
  
}
```

###How to Modify an Object in Firebase using AngularFire 2, what is the Difference Between Set and Update?

In this lesson we are going to learn how to modify an object stored in Firebase, and we are going to learn a difference between the set and update API methods.

See https://angular-university.io/lesson/angular2-firebase-object-set-update

NOTE: Update Object will update an existing Object with the newly provided property values leaving all other properties in tact.
 
NOTE: Set Object will set an existing Object, removing all properties accept for the newly provided properties. Hence, it is destructive.

Change src/app/app.component.ts to:

```javascript
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  courses$:FirebaseListObservable<any>;
  lesson$:FirebaseObjectObservable<any>;
  firstCourse:any;
  
  constructor(private af: AngularFire) {
    this.courses$ = af.database.list('courses');
    this.courses$.subscribe(
      val => console.log(val)
    );
    
    // use the key of the particular lesson you want to retrieve
    this.lesson$= af.database.object('lessons/-KXY0m3AJC2-SvNIsY8C');
    this.lesson$.subscribe(
      val => console.log(val)
    );
  
    this.courses$.map(courses => courses[0])
      .subscribe(
        course => this.firstCourse = course
      );
  }
  
  listPush() {
    this.courses$.push({ description: 'TEST NEW COURSE' })
      .then(
        () => console.log('List Push Done.'),
        console.error
      );
  }
  
  listRemove() {
    this.courses$.remove(this.firstCourse)
      .then(
        () => console.log('List Remove Done.'),
        console.error
      );  
  }

  listUpdate() {
    this.courses$.update(this.firstCourse, { description: 'Angular 2 HTTP Modified' })
      .then(
        () => console.log('List Update Done.'),
        console.error
      );   
  }

  objUpdate() {
    this.lesson$.update({ description: 'NEW DESCRIPTION' })
      .then(
        () => console.log('Object Update Done.'),
        console.error
      );    
  }

  objSet() {
    this.lesson$.set({ description: 'NEW DESCRIPTION' })
      .then(
        () => console.log('Object Set Done.'),
        console.error
      );   
  }

  objRemove() {
    this.lesson$.remove()
      .then(
        () => console.log('Object Remove Done.'),
        console.error
      );   
  }
  
}
```

###Starting the Application From the Beginning - Build the Home Screen

In this lesson we are going to use the Angular CLI to setup the home screen of our application.

See https://angular-university.io/lesson/angular2-firebase-home-screen

From within the project directory, execute the following command to generate a Home component:

```javascript
ng generate component home
```

This will return the following on screen:

```javascript
installing component
  create src\app\home\home.component.css
  create src\app\home\home.component.html
  create src\app\home\home.component.spec.ts
  create src\app\home\home.component.ts
```

Verify that the angular CLI has added the newly create home component to the declarations in src/app/app.module.ts:

```javascript
...
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ]
...  
```

Change the content of src/app/app.component.html to:

```javascript
<app-home></app-home>
```

Test the new home component by running:

```javascript
ng serve
```

The browser at ```http://localhost:4200``` should show:

```javascript
home works!
```

Change the content of the src/app/app.component.html to:

```javascript
<main class="l-main l-sample-app">
  <div>
    <div class="main-container">
      <div class="list">
        <app-home></app-home>  
      </div>
    </div>
  </div>
</main>
```

The text in the browser should now be centralized.

Next, change the content of src/app/home/home.component.html to:

```javascript
<h2>All Lessons</h2>

<h4>Total Lessons: TODO</h4>

<input class="search-bar" placeholder="Search">

<div class="lessons-list-container v-h-center-block-parent">

  <table class="table lessons-list card card-strong">
    <tbody>
    <tr>
      <td class="lesson-title"> TODO </td>
      <td class="duration">
        <i class="md-icon duration-icon">access_time</i>
        <span>TODO</span>
      </td>
    </tr>
    </tbody>  
  </table>

</div>
```

The text in the browser should now show titles, a search field and one entry called TODO with a duration of TODO.

###Building our First Firebase Service - The Lessons Service

In this lesson we are going to set up using the Angular CLI our first service that is going to query the database to retrieve all lessons and display them on a data table.

See https://angular-university.io/lesson/angular2-firebase-service-layer-example

Let's create a service for the Lessons as follows, placing it in the 'shared' directory for other components to use. MAKE SURE THAT THE FOLDER model ALREADY EXISTS INSIDE shared.

```javascript
ng generate service shared/model/lessons
```

The result will be:

```javascript
installing service
  create src\app\shared\model\lessons.service.spec.ts
  create src\app\shared\model\lessons.service.ts
  WARNING Service is generated but not provided, it must be provided to be used
```

As the above warning indicates, we have to add the LessonsService to the providers inside src/app/app.module.ts:

```javascript
...
import {LessonsService} from "./shared/model/lessons.service";
...
@NgModule({
  ...
  providers: [LessonsService]
  ...
})
...
```

Add a lesson model, by creating src/shared/model/lesson.ts as:

```javascript
export class Lesson {

  constructor(
    public $key:string,
    public description:string,
    public duration:string,
    public url:string,
    public tags:string,
    public pro:boolean,
    public longDescription:string,
    public courseId:string) {

  }
}
```

Define a method to find all lessons in the Lessons service, so src/shared/model/lessons.service.ts becomes:

```javascript
import {Injectable, Inject} from '@angular/core';
import {Observable, Subject} from "rxjs/Rx";
import {Lesson} from "./lesson";
import {AngularFire} from "angularfire2";

@Injectable()
export class LessonsService {

  constructor(private af: AngularFire) { }

  findAllLessons():Observable<Lesson[]> {
    return this.af.database.list('lessons');
  }

}
``` 

Add the 'do' operator to src/app/app.module.ts:

```javascript
...
import 'rxjs/add/operator/do';
...
```

Change the content of src/app/home/home.component.ts to:

```javascript
import { Component, OnInit } from '@angular/core';
import {LessonsService} from "../shared/model/lessons.service";
import {Lesson} from "../shared/model/lesson";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lessons: Lesson[];

  constructor(private lessonsService: LessonsService) {


  }

  ngOnInit() {
      this.lessonsService.findAllLessons()
          .do(console.log)
          .subscribe(
              lessons => this.lessons = lessons
          );

  }

}
```

When we reload the page in the browser at http://localhost:4200, notice the list of lessons being logged in the console of the browser.

Great!

Now update the file src/app/home/home.component.html as follows:

```javascript
<h2>All Lessons</h2>

<h4>Total Lessons: {{lessons?.length}}</h4>

<input class="search-bar" placeholder="Search">

<div class="lessons-list-container v-h-center-block-parent">

  <table class="table lessons-list card card-strong">
    <tbody>
    <tr *ngFor="let lesson of lessons">
      <td class="lesson-title"> {{lesson.description}} </td>
      <td class="duration">
        <i class="md-icon duration-icon">access_time</i>
        <span>{{lesson.duration}}</span>
      </td>
    </tr>
    </tbody>  
  </table>

</div>
```

When the page reloads in the browser at http://localhost:4200 we will see a list of lessons with description and duration of each lesson, retrieved from the firebase database! 

###Angular 2 Smart Components vs Presentation Components: What's the Difference and When to Use Each ?

In this lesson we are going to learn that Angular 2 Components usually fall into two categories: Smart Components and Presentation Components. We are going to learn the differences between the two, and also we will learn when to use each and why.

See https://angular-university.io/lesson/angular2-firebase-smart-vs-presentation-components

