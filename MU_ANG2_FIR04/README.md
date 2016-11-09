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
import {Component, OnInit} from '@angular/core';
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

  ngOnInit() {
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

In order for the whole project to work you would need to add the following into app.component.ts:

```javascript
...
import { TodoAppComponent } from './todo-app/todo-app.component';

@Component({
  ...
})
...
```

and in app.component.html:

```javascript
...
<app-todo-app></app-todo-app>
```

##Styling

In order for the TodoApp to look stylish, place below code into todo-app.component.css:

```javascript
hr {
	margin: 20px 0;
	border: 0;
	border-top: 1px dashed #c5c5c5;
	border-bottom: 1px dashed #f7f7f7;
}

.learn a {
	font-weight: normal;
	text-decoration: none;
	color: #b83f45;
}

.learn a:hover {
	text-decoration: underline;
	color: #787e7e;
}

.learn h3,
.learn h4,
.learn h5 {
	margin: 10px 0;
	font-weight: 500;
	line-height: 1.2;
	color: #000;
}

.learn h3 {
	font-size: 24px;
}

.learn h4 {
	font-size: 18px;
}

.learn h5 {
	margin-bottom: 0;
	font-size: 14px;
}

.learn ul {
	padding: 0;
	margin: 0 0 30px 25px;
}

.learn li {
	line-height: 20px;
}

.learn p {
	font-size: 15px;
	font-weight: 300;
	line-height: 1.3;
	margin-top: 0;
	margin-bottom: 0;
}

#issue-count {
	display: none;
}

.quote {
	border: none;
	margin: 20px 0 60px 0;
}

.quote p {
	font-style: italic;
}

.quote p:before {
	content: '”';
	font-size: 50px;
	opacity: .15;
	position: absolute;
	top: -20px;
	left: 3px;
}

.quote p:after {
	content: '”';
	font-size: 50px;
	opacity: .15;
	position: absolute;
	bottom: -42px;
	right: 3px;
}

.quote footer {
	position: absolute;
	bottom: -40px;
	right: 0;
}

.quote footer img {
	border-radius: 3px;
}

.quote footer a {
	margin-left: 5px;
	vertical-align: middle;
}

.speech-bubble {
	position: relative;
	padding: 10px;
	background: rgba(0, 0, 0, .04);
	border-radius: 5px;
}

.speech-bubble:after {
	content: '';
	position: absolute;
	top: 100%;
	right: 30px;
	border: 13px solid transparent;
	border-top-color: rgba(0, 0, 0, .04);
}

.learn-bar > .learn {
	position: absolute;
	width: 272px;
	top: 8px;
	left: -300px;
	padding: 10px;
	border-radius: 5px;
	background-color: rgba(255, 255, 255, .6);
	transition-property: left;
	transition-duration: 500ms;
}

@media (min-width: 899px) {
	.learn-bar {
		width: auto;
		padding-left: 300px;
	}

	.learn-bar > .learn {
		left: 8px;
	}
}

html,
body {
	margin: 0;
	padding: 0;
}

button {
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	font-size: 100%;
	vertical-align: baseline;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	-webkit-appearance: none;
	appearance: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

body {
	font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	background: #f5f5f5;
	color: #4d4d4d;
	min-width: 230px;
	max-width: 550px;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 300;
}

:focus {
	outline: 0;
}

.hidden {
	display: none;
}

.todoapp {
	background: #fff;
	margin: 130px 0 40px 0;
	position: relative;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
	            0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp input::-webkit-input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}

.todoapp input::-moz-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}

.todoapp input::input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}

.todoapp h1 {
	position: absolute;
	top: -155px;
	width: 100%;
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color: rgba(175, 47, 47, 0.15);
	-webkit-text-rendering: optimizeLegibility;
	-moz-text-rendering: optimizeLegibility;
	text-rendering: optimizeLegibility;
}

.new-todo,
.edit {
	position: relative;
	margin: 0;
	width: 100%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	border: 0;
	color: inherit;
	padding: 6px;
	border: 1px solid #999;
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.new-todo {
	padding: 16px 16px 16px 60px;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}

.main {
	position: relative;
	z-index: 2;
	border-top: 1px solid #e6e6e6;
}

label[for='toggle-all'] {
	display: none;
}

.toggle-all {
	position: absolute;
	top: -55px;
	left: -12px;
	width: 60px;
	height: 34px;
	text-align: center;
	border: none; /* Mobile Safari */
}

.toggle-all:before {
	content: '>';
	font-size: 22px;
	color: #e6e6e6;
	padding: 10px 27px 10px 27px;
}

.toggle-all:checked:before {
	color: #737373;
}

.todo-list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.todo-list li {
	position: relative;
	font-size: 24px;
	border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
	border-bottom: none;
}

.todo-list li.editing {
	border-bottom: none;
	padding: 0;
}

.todo-list li.editing .edit {
	display: block;
	width: 506px;
	padding: 12px 16px;
	margin: 0 0 0 43px;
}

.todo-list li.editing .view {
	display: none;
}

.todo-list li .toggle {
	text-align: center;
	width: 40px;
	/* auto, since non-WebKit browsers doesn't support input styling */
	height: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	border: none; /* Mobile Safari */
	-webkit-appearance: none;
	appearance: none;
}

.todo-list li .toggle:after {
	content: 'v';
	line-height: 43px;
	font-size: 20px;
	color: #d9d9d9;
	text-shadow: 0 -1px 0 #bfbfbf;	
	/* url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>'); */
}

.todo-list li .toggle:checked:after {
	color: #85ada7;
	text-shadow: 0 1px 0 #669991;
	bottom: 1px;
	position: relative;	
	/* content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>'); */
}

.todo-list li label {
	word-break: break-all;
	padding: 15px 60px 15px 15px;
	margin-left: 45px;
	display: block;
	line-height: 1.2;
	transition: color 0.4s;
}

.todo-list li.completed label {
	color: #d9d9d9;
	text-decoration: line-through;
}

.todo-list li .destroy {
	display: none;
	position: absolute;
	top: 0;
	right: 10px;
	bottom: 0;
	width: 40px;
	height: 40px;
	margin: auto 0;
	font-size: 30px;
	color: #cc9a9a;
	margin-bottom: 11px;
	transition: color 0.2s ease-out;
}

.todo-list li .destroy:hover {
	color: #af5b5e;
}

.todo-list li .destroy:after {
	content: '×';
}

.todo-list li:hover .destroy {
	display: block;
}

.todo-list li .edit {
	display: none;
}

.todo-list li.editing:last-child {
	margin-bottom: -1px;
}

.footer {
	color: #777;
	padding: 10px 15px;
	height: 20px;
	text-align: center;
	border-top: 1px solid #e6e6e6;
}

.footer:before {
	content: '';
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	height: 50px;
	overflow: hidden;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
	            0 8px 0 -3px #f6f6f6,
	            0 9px 1px -3px rgba(0, 0, 0, 0.2),
	            0 16px 0 -6px #f6f6f6,
	            0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
	float: left;
	text-align: left;
}

.todo-count strong {
	font-weight: 300;
}

.filters {
	margin: 0;
	padding: 0;
	list-style: none;
	position: absolute;
	right: 0;
	left: 0;
}

.filters li {
	display: inline;
}

.filters li a {
	color: inherit;
	margin: 3px;
	padding: 3px 7px;
	text-decoration: none;
	border: 1px solid transparent;
	border-radius: 3px;
}

.filters li a:hover {
	border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.selected {
	border-color: rgba(175, 47, 47, 0.2);
}

.clear-completed,
html .clear-completed:active {
	float: right;
	position: relative;
	line-height: 20px;
	text-decoration: none;
	cursor: pointer;
}

.clear-completed:hover {
	text-decoration: underline;
}

.info {
	margin: 65px auto 0;
	color: #bfbfbf;
	font-size: 10px;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
	text-align: center;
}

.info p {
	line-height: 1;
}

.info a {
	color: inherit;
	text-decoration: none;
	font-weight: 400;
}

.info a:hover {
	text-decoration: underline;
}

/*
	Hack to remove background from Mobile Safari.
	Can't use it globally since it destroys checkboxes in Firefox
*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
	.toggle-all,
	.todo-list li .toggle {
		background: none;
	}

	.todo-list li .toggle {
		height: 40px;
	}

	.toggle-all {
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg);
		-webkit-appearance: none;
		appearance: none;
	}
}

@media (max-width: 430px) {
	.footer {
		height: 50px;
	}

	.filters {
		bottom: 10px;
	}
}
```  

Lastly, you can now safely remove the dummy text from app.comnponent.ts:

```javascript
...
export class AppComponent {
  title = 'app works!'; <-- REMOVE THIS TEXT
}
...
```

##Run the Todo App

To run the Todo App, from inside of the angular2-todo-app directory execute the following command and open a browser at localhost:4200

```javascript
ng serve
```

##Summary

Angular 2 is a beast, no doubt. A very powerful beast!

We’ve covered a lot so let’s recap what we have learned in this article:

- We learned how to install Angular CLI and how much time it saves us when creating new applications or adding features to existing applications.

- We learned how to implement business logic in an Angular service and how to test our business logic using unit tests.

- We learned how to use a component to interact with the user and how to delegate logic to a service using dependency injection.

- We learned the basics of Angular template syntax and briefly touched on how Angular dependency injection works.

- Finally, we learned how to quickly deploy our application to GitHub Pages.

There is a lot more to learn about Angular 2 that we hope to cover in future articles, such as how to:

- communicate with a REST API backend using Angular 2’s HTTP service

- filter todo’s using Angular pipes

- implement routing to make it a multi-page application

- and much, much more.

So stay tuned for more about this wonderful world of Angular 2.

##Serve the App

```javascript
ng serve
```
