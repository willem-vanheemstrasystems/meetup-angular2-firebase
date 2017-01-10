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
