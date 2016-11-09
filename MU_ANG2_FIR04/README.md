##README.md

#Meetup - Angular 2 Firebase 04

Based on "Angular 2 Tutorial: Create a CRUD App with Angular CLI" at https://www.sitepoint.com/angular-2-tutorial/

##Angular 2 CLI

The Angular 2 CLI is an officially supported project by the Angular team. You can find more information at [https://cli.angular.io](https://cli.angular.io/). First we will install the Angular CLI tool. To install we install via NPM running the following command: ```npm install angular-cli -g```. This will install the CLI globally to our machine to help us create new Angular projects.

Note: [Angular CLI Reference](https://cli.angular.io/reference.pdf)

Once installed we can create a new Angular 2 app by running the following command: ```ng new angular2-todo-app```. Next open your app in your favorite editor (here: Visual Studio Code).

You should see something similar to this (as of CLI beta 10):

```javascript
angular2-todo-app
  > e2e
  > node_modules
  > src
  .editorconfig
  .gitignore
  angular-cli.json
  package.json
  protractor.conf.js
  README.md
  tslint.json
```

### Run the Development server
From inside the angular2-todo-app folder, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You should see in your browser:

***app works!***

Inside angular2-todo-app/src/app/app.component.ts change the following line of code from:

```javascript
  title = 'app works!';
```

to:

```javascript
  title = 'angular 2 todo app works!';
```

When saving the file, witness in the terminal window that the source code is automatically re-processed and the text in the browser now reads:

***angular2 todo app works!***

### Running unit tests

From inside the my-cool-app folder, run ```ng test``` to execute the unit tests via [Karma](https://karma-runner.github.io). The test should fail if the title on the page is ***not*** 'app works!'

###Build for Production

I won't cover all the CLI commands in this post. I recommend checking out the [CLI Docs](https://cli.angular.io/). We will just start with running ```ng build --prod```. This command runs a build for our project but with additional production optimizations such as bundling and minification. Now your project should have a dist/ directory. This is where all of our compiled ready to deploy code is located every time we run a build.

##Firebase CLI

So now that we have learned how to use the Angular 2 CLI to package up our app for deployment we will use the Firebase CLI to create a live hosting project to deploy to.

First you will want to log into Firebase and go to [https://console.firebase.google.com/](https://console.firebase.google.com/). Once in the console select “Create New Project”. For our project we will name it “angular2-todo-app”.

- screenshot goes here - 

Now that we have a project created lets go back to the command line. Next we install the Firebase CLI via NPM. In your console run the following command: ```npm install -g firebase-tools```. Once installed run ```firebase login --interactive``` to login to your Firebase account.

##Deployment Setup

Now that Firebase CLI is installed, at the root of your Angular CLI project run ```firebase init```. This will walk through the steps of setting up your app to be deployable to Firebase Hosting.

- screenshot goes here - 

Select the Hosting option in the command line. Next select our project ```angular2-todo-app``` that we created earlier. Next it will ask what file to use for the Firebase real time database rules. For now you can just use the default.

***The next step is important!*** The cli will ask what folder to use as the public directory. For our project we want to use the ```dist/``` directory instead of Firebase’s default ```public/``` directory. So type in the command line ```dist```.

Next it will ask if this is a single page app and if it should rewrite all urls to ```index.html```. For our app select ***yes***. If it asks to over write the ```index.html``` file select ***no***. Now your app is ready for deployment! In the root of your app you should have a new file ```firebase.json``` file that helps the Firebase CLI know how to deploy our application. Now run ```firebase deploy```. Firebase will provide domain that you can configure to a custom domain in the console. Now if we open our browser we will see something similar to the following:

- screenshot goes here -

Now that we have created an Angular 2 project and deployed it to Firebase I recommend digging into more of the [Angular 2 CLI](https://cli.angular.io/) and the [Firebase Features](https://firebase.google.com/features/). A few things to note, the CLI at the time of this writing is in Beta 10. A large change is in the works for Beta 11 to switch the underlying build system to [Webpack](https://webpack.github.io/). This post will be updated with those changes. Also in future versions of the Angular CLI will possibly have Firebase integration and deployment built in. Also as of Beta 10 of the Angular CLI production build do not have a versioning system to bust browser cache. This should be addressed in upcoming versions.

###Angular Ingredients

To meet the needs of our Todo application, we will need:

- a ***Todo*** class to represent individual todo’s

- a ***TodoService*** to create, update and remove todo’s

- a ***TodoApp*** component to display the user interface

So let’s add these ingredients one by one.

####Creating the Todo Class

Because we use TypeScript, we can use a class to represent Todo items, so let’s use Angular CLI to generate a Todo class for us:

```javascript
$ ng generate class Todo
```

which will create:

- src/app/todo.spec.ts

- src/app/todo.ts

Let’s open up ```src/app/todo.ts``` and replace its contents with:

```javascript
export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
```

Each Todo item has 3 properties:

- id: number, unique ID of the todo item

- title: string, title of the todo item

- complete: boolean, whether or not the todo item is complete

The constructor logic allows us to specify property values during instantiation:

```javascript
let todo = new Todo({
  title: 'Read SitePoint article',
  complete: false
});
```

In case Angular CLI has not generated ***src/app/todo.spec.ts*** for us, let’s create it and add a unit test to make sure the constructor logic works as expected:

```javascript
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Todo } from './todo';

describe('Todo', () => {

  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: 'hello',
      complete: true
    });
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });

});
```

To verify whether our code works as expected, we can now run the unit tests:

```javascript
$ ng test
```

which will execute Karma to run all your unit tests.

Now that we have a Todo class, let’s create a Todo service to manage all todo items for us.

####Creating the TodoService

The TodoService will be responsible for managing our Todo items.

In a future article we will see how we can communicate with a REST API, but for now we will store all data in memory.

Let’s use Angular CLI again to generate the service for us:

```javascript
$ ng generate service Todo
```

which will create:

- src/app/todo.service.spec.ts
- src/app/todo.service.ts

We can now add our todo management logic to our TodoService in src/app/todo.service.ts:

```javascript
import {Injectable} from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  constructor() {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
```

The actual implementation details of the methods are not essential for the purpose of this article. The main takeaway is that we centralize the business logic in a service.

To make sure our logic works as expected, let’s add unit tests to src/app/todo.service.spec.ts which was already generated by Angular CLI.

Because Angular CLI already generates the boilerplate code for us, we only have to worry about implementing the tests:

```javascript
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoService } from './todo.service';

describe('Service: Todo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });
  
  describe('#getAllTodos()', () => {  
  
    it('should return an empty array by default', inject([TodoService], (service: TodoService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));
    
    it('should return all todos', inject([TodoService], (service: TodoService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));      
  
  });
  
  describe('#save(todo)', () => {  
  
    it('should automatically assign an incrementing id', inject([TodoService], (service: TodoService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));
      
  });  
  
  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([TodoService], (service: TodoService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));
      
    it('should not removing anything if todo with corresponding id is not found', inject([TodoService], (service: TodoService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));    
      
  });    
  
  describe('#updateTodoById(id, values)', () => {  
  
    it('should return todo with the corresponding id and updated data', inject([TodoService], (service: TodoService) => {
      let todo = new Todo({title: 'Hello 1', complete: false});
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(1, {
        title: 'new title'
      });
      expect(updatedTodo.title).toEqual('new title');
    }));
    
    it('should return null if todo is not found', inject([TodoService], (service: TodoService) => {
      let todo = new Todo({title: 'Hello 1', complete: false});
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(2, {
        title: 'new title'
      });
      expect(updatedTodo).toEqual(null);
    }));    
      
  });   
  
  describe('#toggleTodoComplete(todo)', () => {

    it('should return the updated todo with inverse complete status', inject([TodoService], (service: TodoService) => {
      let todo = new Todo({title: 'Hello 1', complete: false});
      service.addTodo(todo);
      let updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(false);
    }));

  });

});
```

Karma comes pre-configured with ***Jasmine***. You can read the [Jasmine documentation](http://jasmine.github.io/2.4/introduction.html) to learn more about the Jasmine syntax.

To check whether our business logic is valid, we run our unit tests again:

```javascript
$ ng test
```

Ok, now that we have a working TodoService, it’s time to implement the interface part of the application.

In Angular 2, parts of the interface are represented by ***components***.

####Creating the TodoApp Component

Again, let’s use Angular CLI to generate the component for us:

```javascript
$ ng generate component TodoApp
```

which will create:

- src/app/todo-app/todo-app.component.css

- src/app/todo-app/todo-app.component.html

- src/app/todo-app/todo-app.component.spec.ts

- src/app/todo-app/todo-app.component.ts

Template and styles can also be specified inline inside the script file. Angular CLI creates separate files by default, so we will use separate files in this article.

Let’s start by adding the component’s view to src/app/todo-app/todo-app.component.html:

```javascript
<section class="todoapp">
  <header class="header">
    <h1>Todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus="" [(ngModel)]="newTodo.title" (keyup.enter)="addTodo()">
  </header>
  <section class="main" *ngIf="todos.length > 0">
    <ul class="todo-list">
      <li *ngFor="let todo of todos" [class.completed]="todo.complete">
        <div class="view">
          <input class="toggle" type="checkbox" (click)="toggleTodoComplete(todo)" [checked]="todo.complete">
          <label>{{todo.title}}</label>
          <button class="destroy" (click)="removeTodo(todo)"></button>
        </div>
      </li>
    </ul>
  </section>
  <footer class="footer" *ngIf="todos.length > 0">
    <span class="todo-count"><strong>{{todos.length}}</strong> {{todos.length == 1 ? 'item' : 'items'}} left</span>
  </footer>
</section>
```

Here is a super short primer on Angular’s template syntax in case you have never seen it yet:

- [property]="expression": set property to result of expression

- (event)="statement": execute statement when event occurred

- [(property)]="expression": create two-way binding with expression

- [class.special]="expression": add special CSS class to element when expression is truthy

- [style.color]="expression": set color CSS property to result of expression

If you’re not familiar with Angular’s template syntax, you should definitely read [the official template syntax documentation](https://angular.io/docs/ts/latest/guide/template-syntax.html).

Let’s see what that means for our view. At the top there is an input to create a new todo:

```javascript
<input class="new-todo" placeholder="What needs to be done?" autofocus="" [(ngModel)]="newTodo.title" (keyup.enter)="addTodo()">
```

- [(ngModel)]="newTodo.title": adds a two-way binding between the input value and newTodo.title

- (keyup.enter)="addTodo()": tells Angular to execute addTodo() when the enter key was pressed while typing in the input element

Don’t worry about where newTodo or addTodo() come from yet, we will get there shortly. Just try to understand the semantics of the view for now.

Next there is a section to display the todo’s:

```javascript
<section class="main" *ngIf="todos.length > 0">
```

- *ngIf="todos.length > 0": only show the section element and all its children when there is at least 1 todo

Within that section, we ask Angular to generate an li element for each todo:

```javascript
<li *ngFor="let todo of todos" [class.completed]="todo.complete">
```

- *ngFor="let todo of todos": loop over all todo’s and assign current todo to a variable called todo for each iteration

- [class.completed]="todo.complete": apply CSS class complete to li element when todo.complete is truthy

and finally we display todo details for each todo within the ngFor loop:

```javascript
<div class="view">
  <input class="toggle" type="checkbox" (click)="toggleTodoComplete(todo)" [checked]="todo.complete">
  <label>{{todo.title}}</label>
  <button class="destroy" (click)="removeTodo(todo)"></button>
</div>
```

- (click)="toggleTodoComplete(todo)": execute toggleTodoComplete(todo) when checkbox is clicked

- [checked]="todo.complete": assign the value of todo.complete to the property checked of the element

- (click)="removeTodo(todo)": execute removeTodo(todo) when destroy button is clicked

Ok, let’s breathe. That was quite a bit of syntax we went through

If you want to learn every detail about Angular’s template syntax, make sure to read the [official template documentation](https://angular.io/docs/ts/latest/guide/template-syntax.html).

You may wonder how expressions like addTodo() and newTodo.title can be evaluated. We haven’t defined them yet, so how can Angular know what we mean?

That’s exactly where the ***expression context*** comes in. The expression context of a component is the component instance. And the component instance is an instantiation of the component class.

The component class of our ```TodoAppComponent``` is defined in ```src/app/todo-app/todo-app.component.ts```.

Angular CLI already created the TodoAppComponent class boilerplate for us:

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

so we can immediately start adding our custom logic.

We will be needing the TodoService instance, so let’s start by injecting it in our component.

First we import the TodoService class and specify it in the providers array of the Component decoration:

```javascript
// Import class so we can register it as dependency injection token
import {TodoService} from '../todo.service';

@Component({
  // ...
  providers: [TodoService]
})
export class TodoAppComponent {
  // ...
}
```

The TodoAppComponent‘s dependency injector will now recognize the TodoService class as a dependency injection token and return a single instance of TodoService when we ask for it.

Angular’s dependency injection system accepts a variety of dependency injection recipes. The syntax above is a shorthand notation for the Class provider recipe that provides dependencies using the singleton pattern. Check out Angular’s dependency injection documentation for more details.

Now that the component’s dependency injector knows what it needs to provide, we ask it to inject the TodoService instance in our component by specifying the dependency in the TodoAppComponent constructor:

```javascript
// Import class so we can use it as dependency injection token in the constructor
import {TodoService} from '../todo.service';

@Component({
  // ...
})
export class TodoAppComponent {

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoService`
  // and assign it to a property called `todoService`
  constructor(private todoService: TodoService) {
  }

  // Service is now available as this.todoService
  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }
}
```

We can now implement all logic we need in our view by adding properties and methods to our TodoAppComponent class:

```javascript
import {Component} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  templateUrl: 'todo-app.component.html',
  styleUrls: ['todo-app.component.css'],
  providers: [TodoService]
})
export class TodoAppComponent {

  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) {
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

}
```

We first instantiate a newTodo property and assign a new Todo() when the component class is instantiated. This is the newTodo we added a two-way binding to in our view:

```javascript
<input class="new-todo" placeholder="What needs to be done?" autofocus="" [(ngModel)]="newTodo.title" (keyup.enter)="addTodo()">
```

Whenever the input value changes in the view, the value in the component instance is updated. And whenever the value in the component instance changes, the value in the input element in the view changes.

Next we implement all methods we used in our view.

Their implementation is very short and should be self-explanatory as we delegate all business logic to the todoService.

Delegating business logic to a service is a good programming practice as it allows us to centrally manage and test the business logic.




more...