# Globetrotter

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Create the project GlobeTrotter

```javascript
npm install -g angular-cli
ng new globetrotter
```

This will create a new project called globetrotter in your current directory.

##Material 2

Following the Getting Started guide at https://github.com/angular/material2/blob/master/guides/getting-started.md

Install Angular Material components:

```javascript
cd globetrotter
npm install --save @angular/material
```

Material 2 also uses HammerJS for touch gestures, so install it:

```javascript
npm install --save hammerjs
npm install --save-dev @types/hammerjs
```

You need to add hammerjs to the types section of your tsconfig.json file:

```javascript
{
  "compilerOptions": {
    "types": [
      "hammerjs"
    ]
  }
}
```

In src/polyfills.ts add:

```javascript
...
import 'hammerjs/hammer';
...
```

Your ***package.json*** should now look like this:

```javascript
{
  "name": "globetrotter",
  "version": "0.0.0",
  "license": "MIT",
  "angular-cli": {},
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "lint": "tslint \"src/**/*.ts\"",
    "test": "ng test",
    "pree2e": "webdriver-manager update --standalone false --gecko false",
    "e2e": "protractor"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "^2.3.1",
    "@angular/compiler": "^2.3.1",
    "@angular/core": "^2.3.1",
    "@angular/forms": "^2.3.1",
    "@angular/http": "^2.3.1",
    "@angular/material": "^2.0.0-beta.1",
    "@angular/platform-browser": "^2.3.1",
    "@angular/platform-browser-dynamic": "^2.3.1",
    "@angular/router": "^3.3.1",
    "core-js": "^2.4.1",
    "hammerjs": "^2.0.8",
    "rxjs": "^5.0.1",
    "ts-helpers": "^1.1.1",
    "zone.js": "^0.7.2"
  },
  "devDependencies": {
    "@angular/compiler-cli": "^2.3.1",
    "@types/hammerjs": "^2.0.34",
    "@types/jasmine": "2.5.38",
    "@types/node": "^6.0.42",
    "angular-cli": "1.0.0-beta.24",
    "codelyzer": "~2.0.0-beta.1",
    "jasmine-core": "2.5.2",
    "jasmine-spec-reporter": "2.5.0",
    "karma": "1.2.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-cli": "^1.0.1",
    "karma-jasmine": "^1.0.2",
    "karma-remap-istanbul": "^0.2.1",
    "protractor": "~4.0.13",
    "ts-node": "1.2.1",
    "tslint": "^4.0.2",
    "typescript": "~2.0.3"
  }
}
```

Import the Angular Material NgModule in scr/app/app.module.ts:

```javascript
...
import { MaterialModule } from '@angular/material';
...
@NgModule({
  ...
  imports: [
            ...
            MaterialModule.forRoot()
            ],
  ...
})
...
```

Include the core and theme styles:

This is required to apply all of the core and theme styles to your application. You can either use a pre-built theme, or define your own custom theme.

See the [theming guide](https://github.com/angular/material2/blob/master/guides/theming.md) for instructions.

###Using a pre-built theme

Angular Material comes prepackaged with several pre-built theme css files. These theme files also include all of the styles for core (styles common to all components), so you only have to include a single css file for Angular Material in your app.

You can include a theme file directly into your application from @angular/material/core/theming/prebuilt

NOTE: rename src/styles.css to src/styles.scss

If you're using Angular CLI, this is as simple as including one line in your src/styles.scss file and set the body margin:

```javascript
@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';
body {
  margin: 0;
}
```

###Defining a custom theme

When you want more customization than a pre-built theme offers, you can create your own theme file.

A theme file is a simple Sass file that defines your palettes and passes them to mixins that output the corresponding styles. 

SEE ALSO: 'Angular-Material 2 Theme Tutorial' at https://medium.com/covalent-ui/angular-material-2-theme-tutorial-2f7e6c344006#.p1ub34gjj

If you are using the Angular CLI, support for compiling Sass to css is built-in; you only have to change the entry to the "styles" list in angular-cli.json pointing to the style file (e.g., style.scss). NOTE the file should end with .scss, not .css

```javascript
...
  "styles": [
    "styles.scss"
  ],  
...
```

If it does not already exist, create a file 'src/themes/unicorn-app-theme.scss' with the following content:

```javascript
@import '~@angular/material/core/theming/all-theme';
/* Plus imports for other components in your app. */

/* Include the base styles for Angular Material core. We include this here so that you only */
/* have to load a single css file for Angular Material in your app.*/
@include md-core();

/* Define the palettes for your theme using the Material Design palettes available in palette.scss */
/* (imported above). For each palette, you can optionally specify a default, lighter, and darker */
/* hue. */
$unicorn-app-primary: md-palette($md-blue-grey);
$unicorn-app-accent:  md-palette($md-amber, A200, A100, A400);

/* The warn palette is optional (defaults to red).*/
$unicorn-app-warn:    md-palette($md-deep-orange);

/* Create the theme object (a Sass map containing all of the palettes).*/
$unicorn-app-theme: md-light-theme($unicorn-app-primary, $unicorn-app-accent, $unicorn-app-warn);

/* Include theme styles for core and each component used in your app.*/
/* Alternatively, you can import and @include the theme mixins for each component */
/* that you are using. */
@include angular-material-theme($unicorn-app-theme);

.m2app-dark {
  $dark-primary: md-palette($md-pink, 700, 500, 900);
  $dark-accent:  md-palette($md-blue-grey, A200, A100, A400);
  $dark-warn:    md-palette($md-deep-orange);

  $dark-theme: md-dark-theme($dark-primary, $dark-accent, $dark-warn);

  @include angular-material-theme($dark-theme);
}
```

Now import unicorn-app-theme in src/styles.scss and set the body margin:

```javascript
@import 'themes/unicorn-app-theme';
body {
  margin: 0;
}
...
```

In src/styles.scss you can start to define DOM elements with their styling, e.g.:

```javascript
@import 'themes/unicorn-app-theme';
body {
  margin: 0;
}
/* more */
```

###Routing

See also 'Refactor Routes to a Routing Module' at https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

If the file does not yet exist, create src/app/app-routing.module.ts with the following content:

```javascript
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule {}
```

Import the AppRoutingModule in src/app/app.module.ts:

```javascript
...
import { AppRoutingModule } from './app-routing.module';
...
@NgModule({
  ...
  imports: [
           ...
           AppRoutingModule
         ]
  ...
})
...
```

Serving the application will fail, as we have not defined a default route.

Let's generate a Home component as our default route, from within the project directory.

```javascript
ng generate component home
```

Replace the default HTML in src/app/app.component.html to now the router outlet:

```javascript
<router-outlet></router-outlet>
```

Now in src/app/app-routing.module.ts define one route:

```javascript
...
import { HomeComponent } from './home/home.component';
...
const routes: Routes = [
  { path: '', component: HomeComponent }
];
...
```

Now you should be able to serve the application.

For example HTML elements of Material 2, copy the HTML from https://github.com/jelbourn/material2-app/blob/master/src/app/app.component.html into the src/app/home/home.component.html

```javascript
<md-sidenav-layout [class.m2app-dark]="isDarkTheme">

  <md-sidenav #sidenav mode="side" class="app-sidenav">
    Sidenav
  </md-sidenav>

... continued
<span class="app-action" [class.m2app-dark]="isDarkTheme">
  <button md-fab><md-icon>check circle</md-icon></button>
</span>
```

Paste the css from https://raw.githubusercontent.com/jelbourn/material2-app/master/src/app/app.component.css into src/app/home/home.component.css:

```javascript
md-sidenav-layout.m2app-dark {
  background: black;
}
... continued
.app-progress {
  margin: 20px;
}
```

Also, copy the following parts of the content of https://github.com/jelbourn/material2-app/blob/master/src/app/app.component.ts to src/app/home/home.component.ts

```javascript
import { Component, OnInit, Optional } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
...
export class HomeComponent implements OnInit {
  isDarkTheme: boolean = false;
  lastDialogResult: string;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  openDialog() {
    let dialogRef = this._dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }

  ngOnInit() {
  }

}

@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
})

export class DialogContent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}
```

Finally, update src/app/app.module.ts as follows:

```javascript
...
import { HomeComponent, DialogContent } from './home/home.component';
...
@NgModule({
  ...
  declarations: [
    AppComponent,
    HomeComponent, 
    DialogContent
  ],
  entryComponents: [DialogContent],
  ...
})
...
```

NOTE: Placing components into the entryComponents portion of the NgModule declaration will allow Angular to compile those components into component factories and therefore allow the component resolver to add them to the internal map used for component resolution.

SEE ALSO: https://github.com/angular/material2 FOR MORE MATERIAL 2 ANGULAR COMPONENTS

###[Optional] Using Material Design icons with md-icon:

If you want to use Material Design icons in addition to Angular Material components, load the Material Design font in your index.html.

md-icon supports any font icons or svg icons, so this is only one option for an icon source.

Add to src/index.html:

```javascript
<head>
   ...
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   ...
</head>   
```

Try to see if material design is used successfully by serving the application:

```javascript
ng serve
```

##Refactor HTML

Instead of having both headings & navigation and content all in the home component html, it is preferred to move the headings & navigation to the app component html, as follows:

app.component.html:

```javascript
<md-sidenav-layout [class.m2app-dark]="isDarkTheme">

  <md-sidenav #sidenav mode="side" class="app-sidenav">
    Sidenav
  </md-sidenav>

  <md-toolbar color="primary">
    <button class="app-icon-button" (click)="sidenav.toggle()">
      <i class="material-icons app-toolbar-menu">menu</i>
    </button>

    Angular Material2 Example App

    <span class="app-toolbar-filler"></span>
    <button md-button (click)="isDarkTheme = !isDarkTheme">TOGGLE DARK THEME</button>
  </md-toolbar>

  <div class="app-content">
    <router-outlet></router-outlet>
  </div>
  
</md-sidenav-layout>

<span class="app-action" [class.m2app-dark]="isDarkTheme">
  <button md-fab><md-icon>check circle</md-icon></button>
</span>
```

Leave the following part of html in home.component.html:

```javascript
<md-card>
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
</md-card>

<md-card>
<button md-button>FLAT</button>
<button md-raised-button md-tooltip="This is a tooltip!">RAISED</button>
<button md-raised-button color="primary">PRIMARY RAISED</button>
<button md-raised-button color="accent">ACCENT RAISED</button>
</md-card>

<md-card> <md-checkbox>Unchecked</md-checkbox> <md-checkbox
	[checked]="true">Checked</md-checkbox> <md-checkbox
	[indeterminate]="true">Indeterminate</md-checkbox> <md-checkbox
	[disabled]="true">Disabled</md-checkbox> </md-card>

<md-card> <md-radio-button name="symbol">Alpha</md-radio-button>
<md-radio-button name="symbol">Beta</md-radio-button> <md-radio-button
	name="symbol" disabled>Gamma</md-radio-button> </md-card>

<md-card class="app-input-section"> <md-input
	placeholder="First name"></md-input> <md-input #nickname
	placeholder="Nickname" maxlength="50"> <md-hint align="end">
{{nickname.characterCount}} / 50 </md-hint> </md-input> <md-input> <md-placeholder>
<i class="material-icons app-input-icon">android</i> Favorite phone </md-placeholder> </md-input> <md-input
	placeholder="Motorcycle model"> <span md-prefix> <i
	class="material-icons app-input-icon">motorcycle</i> &nbsp;
</span> </md-input> </md-card>

<md-card> <md-list class="app-list"> <md-list-item
	*ngFor="let food of foods">
<h3 md-line>{{food.name}}</h3>
<p md-line class="demo-secondary-text">{{food.rating}}</p>
</md-list-item> </md-list> </md-card>

<md-card> <md-spinner class="app-spinner"></md-spinner> <md-spinner
	color="accent" class="app-spinner"></md-spinner> </md-card>

<md-card> <label> Indeterminate progress-bar <md-progress-bar
		class="app-progress" mode="indeterminate"
		aria-label="Indeterminate progress-bar example"></md-progress-bar>
</label> <label> Determinate progress bar - {{progress}}% <md-progress-bar
		class="app-progress" color="accent" mode="determinate"
		[value]="progress" aria-label="Determinate progress-bar example"></md-progress-bar>
</label> </md-card>

<md-card> <md-tab-group> <md-tab label="Earth">
<p>EARTH</p>
</md-tab> <md-tab label="Fire">
<p>FIRE</p>
</md-tab> </md-tab-group> </md-card>

<md-card> <md-icon>build</md-icon> </md-card>

<md-card>
<button md-button [md-menu-trigger-for]="menu">MENU</button>
</md-card>

<md-menu #menu="mdMenu">
<button md-menu-item>Lemon</button>
<button md-menu-item>Lime</button>
<button md-menu-item>Banana</button>
</md-menu>

<md-card>
<p>Last dialog result: {{lastDialogResult}}</p>
<button md-raised-button (click)="openDialog()">DIALOG</button>
<button md-raised-button (click)="showSnackbar()">SNACKBAR</button>
</md-card>
```

The styling will have changed badly, as there is no css in app.component.css. So, copy the following css from home.component.css to app.component.css.

```javascript
md-sidenav-layout.m2app-dark {
  background: black;
}

.app-content {
  padding: 20px;
}

.app-sidenav {
  padding: 10px;
  min-width: 100px;
}

.app-toolbar-filler {
  flex: 1 1 auto;
}

.app-toolbar-menu {
  padding: 0 14px 0 14px;
  color: white;
}

.app-icon-button {
  box-shadow: none;
  user-select: none;
  background: none;
  border: none;
  cursor: pointer;
  filter: none;
  font-weight: normal;
  height: auto;
  line-height: inherit;
  margin: 0;
  min-width: 0;
  padding: 0;
  text-align: left;
  text-decoration: none;
}

.app-action {
  display: inline-block;
  position: fixed;
  bottom: 20px;
  right: 20px;
}
```

That leaves home.component.css with the following:

```javascript
md-card {
  margin: 20px;
}

md-checkbox {
  margin: 10px;
}

.app-action {
  display: inline-block;
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.app-spinner {
  height: 30px;
  width: 30px;
  display: inline-block;
}

.app-input-icon {
  font-size: 16px;
}

.app-list {
  border: 1px solid rgba(0,0,0,0.12);
  width: 350px;
  margin: 20px;
}

.app-progress {
  margin: 20px;
}
```

By moving some of the HTML and css to the app component, the top menu bar will now stick to the application. Whereas the content of the page will be part of the home component. As such, if we create more components (e.g. About component), we will be able to re-use the top menu and fill the rest of the page with page specific content (e.g. information About our company coming from the About component).

#About page

To do: generate a new component called 'about' using ng command:

```javascript
ng generate component about
```

Add 'about' to the routing and make it use Material 2 HTML elements and css styling to form a true 'About' page. 

Inside src/app/app-routing.module.ts add the following:

```javascript
...
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent }   
];
...
```

Add both Home and About as sidenav menu items to route to their respective pages.

In src/app/app.component.html add:

```javascript
...
  <md-sidenav #sidenav mode="side" class="app-sidenav">
    Sidenav
    <a href="home">Home</a>
    <a href="about">About</a>
  </md-sidenav>
...
```

# angular2-google-maps-001
Angular2 Google Maps 001

Based on 'Getting Started: angular2-google-maps' at https://angular-maps.com/docs/getting-started.html

See also https://www.udemy.com/learn-to-build-a-google-map-app-using-angular-2/

And 'Learn to Build a Google Map Using Angular 2' at https://www.youtube.com/watch?v=dQFLwEJgMEI

#Getting Started

Let's start from zero and build an Angular 2 app with angular2-google-maps

##Playing with angular2-google-maps

If you just want to play with angular2-google-maps and don't want to set up a full project with NPM, you can use the following Plunker. It has all the dependencies to play with Angular2, Typescript and of course angular2-google-maps:

(Play with angular2-google-maps on Plunker)[http://plnkr.co/edit/YX7W20?p=preview]

##Setting up a basic project structure

###Installing TypeScript

angular2-google-maps works best with TypeScript version 1.8+. If you have an older version of TypeScript or haven't installed TypeScript yet, please run the following command:

```javascript
tsc -version
```

Only if your typescript version is below 1.8, install the newer version.

```javascript
npm install -g typescript@2.1.4
```

###Create an Angular CLI project

We start by creating a project with (Angular CLI)[https://cli.angular.io/]. Angular CLI makes it easy to create an application that already works and allows you to follow the best practices. 

Check if you have Angular-Cli (ng) installed

```javascript
ng version
```

If you haven't installed Angular CLI yet, please run the following command first:

```javascript
npm install -g angular-cli@webpack
```

Run the following commands to create a new Angular 2 project with Angular CLI:

```javascript
cd ../ // Come out of the reports_maps directory!
ng new my-maps-project
```

Same named files and directories (between cakephp and angular2):

- You can safely move the directory 'e2e' & 'node_modules' into 'reports_maps' directory.

- You can safely move the files 'angular-cli.json', 'karma.conf.js', 'package.json' (rename inside to 'reports_maps'), 'protractor.conf.js', 'tslint.json' into the 'reports_maps' directory.

- Try to combine the content of the following files if possible, so all is in the 'reports_maps' directory:

  .editorconfig
  .gitignore
  README.md

- The 'src' directory needs special attention as cakephp AND angular2 have a 'scr' folder:

  As the 'src' folders have no same-name files or directories, you can safely copy all from 'my-maps-project/src' to 'reports_maps/src'.

Now ***remove*** the 'my-maps-project' folder. It is no longer needed. 

Try to see if the new app works by running:

```javascript
cd reports_maps
ng serve
```

When you open your web browser to localhost:4200 a page should show and state:

```javascript
App works!
```

Close the server, before continuing, by using the following key strokes in the terminal where you typed the ng serve command:

```javascript
CTRL+C
```

Reload the browser page, to make sure the server is no longer running.

#Install angular2-google-maps

angular2-google-maps gets shipped via the Node Package Manager (NPM). Run the following command to add it to your new project:

```javascript
npm install angular2-google-maps --save
```

##Setup @NgModule

Open src/app/app.module.ts and import the AgmCoreModule.

NOTE: You need to provide a ***Google Maps API key*** to be able to see a Map. Get an API key (here)[https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key].

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, DialogContent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogContent,
    AboutComponent
  ],
  entryComponents: [DialogContent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'Your API Key'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

##Extending the app component

Angular CLI already created an app component that we'll now use to create our first google map.

Open the file src/app/about/about.component.ts and modify it like below:

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title: string = 'My Google Map';
  lat: number = 52.258107; // center of Holland
  lng: number = 5.600592;  // center of Holland

  constructor() { }

  ngOnInit() {
  }

}
```

##Setup the template

Open the file src/app/about/about.component.html and paste the following content:

```javascript
<h1>{{ title }}</h1>

<!-- this creates a google map on the page with the given lat/lng from -->
<!-- the component as the initial center of the map: -->

<sebm-google-map [latitude]="lat" [longitude]="lng">
  <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>
</sebm-google-map>
```

##Setup the CSS file

Open the file src/app/about/about.component.css and paste the following content:

```javascript
.sebm-google-map-container {
  height: 500px;
}
```

***CSS styling is required!***

It is really important that you define a height for the css class .sebm-google-map-container. Otherwise, you won't see a map on the page!

#Build and run your application

Great! So we have created all the needed source files, so everything should be ready to build an run the application.

Run the following command in the project root folder:

```javascript
ng serve
```

Then, open the following URL in your browser: http://localhost:4200/

The command starts the following things:

Starts the TypeScript compiler and compiles all sources files (watches also for file changes in the source files and recompiles all files if something has changed)
Starts a local web server to serve the Angular 2 application. It refreshes the page when served files change.

When everything works as expected, you should see your first Google Map created with angular2-google-maps!

#Adding 'Tools' section

In order to add a page for tools in our app 'globetrotter' start by generating a tools component.

```javascript
cd globetrotter
ng generate component tools
```

Add the tools component to the routing file at src/app/app-routing.component.ts;

```javascript
...
import { ToolsComponent } from './tools/tools.component';
...
const routes: Routes = [
    ...
    { path: 'tools', component: ToolsComponent }   
];
...
```

Add the 'tools' option to the sidebar menu in src/app/app.component.html:

```javascript
...
  <md-sidenav #sidenav mode="side" class="app-sidenav">
    Sidenav
    ...
    <a href="tools">Tools</a>
  </md-sidenav>
...  
```

Check if the link in the sidebar works by starting the app with

```javascript
cd globetrotter
ng serve
```

After cicking on the 'tools' link, or by following the URL 'http://localhost:4200/tools, you should see on the tools page :

```javascript
tools works!
```

#Adding a Calculator to the Tools section

For a calculator we need to generate the following components:

- buttons

```javascript
ng generate component buttons
```

- calculator

```javascript
ng generate component calculator
```

- result-list

```javascript
ng generate component result-list
```

and a Calculator service, for which we need to create a folder 'shared' first:

```javascript
cd globetrotter
cd src/app
mkdir shared
```

NOTE: Above is the ***mkdir*** command, used by Windows to create a new directory. On Mac OS and Unix the command would be the same.

Now generate a new service called 'calculator' inside the 'shared' folder as follows:

```javascript
ng generate service shared/calculator
```

Lastly, without using the ng command, create a file called '***buttons-list.ts***' inside src/app/buttons with the following content:

```javascript
interface Button{
	class: string;
	value: string;
	action?: ()=> void;
}

export class ButtonsList {

	constructor(private cl) {};

	public buttons: Button[] = [
		{class:'button-memory',value:'MC',action:()=>this.cl.deleteMemory()},
		{class:'button-memory',value:'MR',action:()=>this.cl.writeMemory()},
		{class:'button-memory',value:'M+',action:()=>this.cl.memoryPlus()},
		{class:'button-memory',value:'M-',action:()=>this.cl.memoryMinus()},
		{class:'button-memory',value:'MS',action:()=>this.cl.saveMemory()},

		{class:'button-number',value:'7',action:()=>this.cl.addNumber(7)},
		{class:'button-number',value:'8',action:()=>this.cl.addNumber(8)},
		{class:'button-number',value:'9',action:()=>this.cl.addNumber(9)},
		{class:'button-operator',value:'/',action:()=>this.cl.addOperator('/')},
		{class:'button-operator',value:'DEL',action:()=>this.cl.deleteLastChar()},

		{class:'button-number',value:'4',action:()=>this.cl.addNumber(4)},
		{class:'button-number',value:'5',action:()=>this.cl.addNumber(5)},
		{class:'button-number',value:'6',action:()=>this.cl.addNumber(6)},
		{class:'button-operator',value:'*',action:()=>this.cl.addOperator('*')},
		{class:'button-operator',value:'C',action:()=>this.cl.reset()},

		{class:'button-number',value:'1',action:()=>this.cl.addNumber(1)},
		{class:'button-number',value:'2',action:()=>this.cl.addNumber(2)},
		{class:'button-number',value:'3',action:()=>this.cl.addNumber(3)},
		{class:'button-operator',value:'-',action:()=>this.cl.addOperator('-')},
		{class:'button-operator',value:''},
		
		{class:'button-number',value:'.',action:()=>this.cl.addOperator('.')},
		{class:'button-number',value:'0',action:()=>this.cl.addNumber(0)},
		{class:'button-number',value:''},
		{class:'button-operator',value:'+',action:()=>this.cl.addOperator('+')},
		{class:'button-operator',value:'=',action:()=>this.cl.equal()},
	];
}
```

##Adding to the calculator service

Import the following into src/app/shared/calculator.service.ts, create an interface, and add a public reference to the result list:

```javascript
...
import { CalculatorComponent } from '../calculator/calculator.component';
import { ResultListComponent } from '../result-list/result-list.component';
import { ButtonsComponent } from '../buttons/buttons.component';
...
interface ResultsList{
	id: number;
	value: number;
	equation: string;
}
...
@Injectable()
export class CalculatorService {
  ...
	// list of ids for result list
	public result_list_ids: number[] = [0];
	public result_list: ResultsList[] = [];  
  ...
}
...
```

##Adding to the buttons component

Adjust the HTML inside src/app/buttons/buttons.component.html to the following:

```javascript
<button *ngFor="let button of buttons"  (click)="(button.action != undefined)? button.action(): null" class="{{button.class}}">{{button.value}}</button>
```

Adjust the css inside src/app/buttons/buttons.component.css to the following:

```javascript
:host{
	display: block;
	height: 60%;
}

:host button, :host button:focus {
	width: 20%;
	height: 20%;
	vertical-align: top;
	margin:0;
	border:0;
	padding:0;
	display:inline-block;
	vertical-align:middle;
	white-space:normal;
	line-height:1;
	color: white;
	font-size: 19px;
	cursor: pointer;
	font-weight: 100;
	outline: 0;
	font-family: Roboto;
}

:host .button-number{
	background-color: #212121;
}

:host .button-operator{
	background-color: #424242;
}

:host .button-memory{
	background-color: #00C853;
	color: #212121!important;
}
```

Import the following into src/app/buttons/buttons.component.ts:

```javascript
...
import { CalculatorComponent } from '../calculator/calculator.component';
import { CalculatorService } from '../shared/calculator.service';
import { ResultListComponent } from '../result-list/result-list.component';
import { ButtonsList } from './buttons-list';
...
```

Then in the same file as above inject the calculator service in the buttons constructor and make a public reference to the buttons list:

```javascript
...
export class ButtonsComponent implements OnInit {

	constructor(public calculator_service: CalculatorService) { }
  ...
  // list of buttons
  public buttons = new ButtonsList(this).buttons;
  ...
}  
```

##Adding to the calculator component

Adjust the HTML inside src/app/calculator/calculator.component.html to the following:

```javascript
...
<app-result-list></app-result-list>
<app-display>{{calculator_service.equation}}</app-display>
<app-buttons></app-buttons>
...
```

***IMPORTANT!***

Because ***app-display*** is NOT a selector of a component we created, we have to tell Angular 2 about the existence of this custom element, by addiung the following to src/app/app.module.ts:

```javascript
...
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
...

@NgModule({
  ...
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
...
```

Adjust the css inside src/app/calculator/calculator.component.css to the following:

```javascript
:host{
	display: block;
	width: 100%;
	height: 100%;
	font-family: Roboto;
}

:host app-display{
	display: block;
	height: 10%;
	text-align: right;
	font-size: 10vh;
	line-height: 100%;
	overflow: hidden;
	overflow-x: auto;
}
```

Import the following into src/app/calculator/calculator.component.ts, and add the calculator service as a provider:

```javascript
...
import { ResultListComponent } from '../result-list/result-list.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { CalculatorService } from '../shared/calculator.service';
...
@Component({
  ...
  providers: [CalculatorService]
})
```

Then in the same file as above inject the calculator service in the calculator constructor:

```javascript
...
export class CalculatorComponent implements OnInit {

	constructor(public calculator_service: CalculatorService) { }
  ...
}  
```

##Adding to the result-list component

Adjust the HTML inside src/app/result-list/result-list.component.html to the following:

```javascript
<ul class='saved-results-list'>
	<li class='saved-results-item' *ngFor="let item of result_list">
		<div class='saved-results-item-wrapper'>
			<div class='saved-results-item-text'>
				<div class='saved-results-item-value'>{{item.value}}</div>
				<div class='saved-results-item-equation'>{{item.equation}} = </div>
			</div>
			<div class='saved-results-item-delete' (click)="calculator_service.removeFromResultList(item.id)"></div>
		</div>
		<div class='saved-results-item-divider'></div>
	</li>
</ul>
```

Adjust the css inside src/app/result-list/result-list.component.css to the following:

```javascript
:host{
	display: block;
	width: 100%;
	height: 30%;
	background-color: #FAFAFA;
	overflow: hidden;
	overflow-y: scroll;
}

:host ul{
	padding: 0;
	padding-top: 4px;
	margin: 0;
}

:host li{
	width: 100%;
	list-style: none;
}

:host .saved-results-item-text{
	display:inline-block;
}

:host .saved-results-list{
	width: 100%;
	padding: 0px;
	margin: 0px;
	overflow: hidden;
}

:host .saved-results-item{
	width: 100%;
	padding: 2px;
}

:host .saved-results-item-wrapper{
	padding: 5px 16px 8px 16px;
}

:host .saved-results-item-divider{
	width: 100%;
	height: 1px;
	background-color: #E0E0E0;
	display: block;
}

:host .saved-results-item-value{
	font-size: 28px;
	color: #212121;
}

:host .saved-results-item-equation{
	font-size: 12px;
	color: #757575;
}

:host .saved-results-item-delete{
	float: right;
	width: 49px;
	height: 49px;
	background-image: url('cancel.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: 32px 32px;
	display:inline-block;
	cursor: pointer;
}
```

Import the following into src/app/result-list/result-list.component.ts:

```javascript
...
import { CalculatorService } from '../shared/calculator.service';
...
```

Then in the same file as above inject the calculator service in the result list constructor and make a reference to the result list of the calculator service:

```javascript
...
export class ResultListComponent implements OnInit {

	constructor(private calculator_service: CalculatorService) { }
  ...
  // result-list component items
	result_list = this.calculator_service.result_list;
  ...
}  
```

##Adding the Calculator element

In src/app/tools/tools.component.html add the following:

```javascript
<app-calculator></app-calculator>
```

##Adding the Calculator component to the Tools component

In src/app/tools/tools.component.ts add the following:

```javascript
...
import {CalculatorComponent} from '../calculator/calculator.component';
...
```

When browsing to localhost:4200/tools you should see the beginnings of a calculator.

Let's add some functionality to the calculator!

Do so by adding the following properties to src/app/shared/calculator.service.ts:

```javascript
...
export class CalculatorService {

	/*
	 * calculator equation to be solved
	 * value of display section
	*/
	public equation: string = "0";
	// last solved result
	public result: number = null;
	// limit of characters that can be displayed
	public digit_limit: number = 12;
	public is_reseted: boolean = true;
	public can_add_operator: boolean = false;

	// list of ids for result list
	public result_list_ids: number[] = [0];
	public result_list: ResultsList[] = [];

	public memory: number = null;
  ...
}  
```

You should now see a '0' in the display field of the calculator, as we set equation: string = "0";

Moving on by adding the following functions to src/app/shared/calculator.service.ts:

```javascript
...
export class CalculatorService {
   ...
	 /*
	  * @returns {number} the length of equation string
	 */
	 public getEquationLength(): number{
		 return this.equation.length;
	 }
   ...
}  
```

```javascript
...
export class CalculatorService {
   ...
	 /*
	  * adds record to the result-list component
	  * @param value - numeric value to be added
	  * @param equation - the equation string from which the result was calculated
	 */
	 public addToResultList(value: number, equation: string): void{
	 	 let id = this.result_list_ids[this.result_list_ids.length - 1]+1;
	 	 this.result_list_ids.push(id);
	 	 this.result_list.unshift({
	 		 id: id,
	 		 value: value,
	 		 equation: equation
	 	 });
	 }
   ...
}  
```

```javascript
...
export class CalculatorService {
   ...
	 /*
	  * removes record from the result-list component
	  * @param id - the id of result item to be deleted
	 */
	 public removeFromResultList(id: number): void{
		 // iterates over result-list items until id matches; then deletes
		 for(var i = 0; i < this.result_list.length; i++) {
		    if(this.result_list[i].id == id) {
		        this.result_list.splice(i, 1);
		        break;
		    }
		 }
	 }
   ...
}  
```

Before we start pushing the buttons, lets first create the functions that underlay these buttons!

Start with the ***reset()*** function and two more private properties in src/app/buttons/buttons.component.ts:

```javascript
...
export class ButtonsComponent implements OnInit {
  ...
	// defines if the last pressed button was MemoryRecall
	private wrote_memory: boolean = false;
	// defines if the calculator will be resetted on the next button press 
	private reset_on_click: boolean = false;
  ...
  /*
	 * resets calculator
	 * sets equation string to "0"
	*/
	reset(): void {
		this.calculator_service.equation = "0";
		this.calculator_service.can_add_operator = false;
		this.calculator_service.is_reseted = true;
	}
  ...
}
```

Next, we create the ***addNumber()*** function in src/app/buttons/buttons.component.ts as follows:

```javascript
...
export class ButtonsComponent implements OnInit {
  ...
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
  ...
}  
```

We will now see numbers show up in the display of our calculator app when we click on the numeric buttons (e.g. 1).

To remove an entered number, we now add the ***deleteLastChar()*** function to src/app/buttons/buttons.component.ts:

```javascript
...
export class ButtonsComponent implements OnInit {
  ...
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
  ...
}  
```

Hooray, after entering some numbers on the calculator you can now remove them by pushing the DEL button.

So now we'll add the ***addOperator()*** function to src/app/buttons/buttons.component.ts:

```javascript
...
export class ButtonsComponent implements OnInit {
  ...
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
  ...
}  
```

All is well, you can now enter long calculations such as 1+2-6/9*5 on the calculator app. But without it doing the calculation of the outcome (e.g. =), it is not good enough.

Hence, we add the ***solve()*** and ***equal()*** function to src/app/buttons/buttons.component.ts:

```javascript
...
export class ButtonsComponent implements OnInit {
  ...
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
  ...
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
  ...
} 
```

Before we do some real calculation, place a file with the svg image of a cancel button, called '***cancel.svg***', in src/ directory with the follwoing content:

```javascript
<svg fill="#9E9E9E" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
```

So try typing  1+2-6/9*5 on the calculator app again followed by =. Does it give you an outcome? It should (i.e. -0.33333333333333304).

Also, you will see that the resultb has been added to the result list!

By clicking the cancel icon (circle with a cross), you should be able to remove results off the result list.

So let's add that now to src/shared/calculator.service.ts:

```javascript
...
export class CalculatorService {
  ...
	/*
	 * adds record to the result-list component
	 * @param value - numeric value to be added
	 * @param equation - the equation string from which the result was calculated
	*/
	public addToResultList(value: number, equation: string): void{
		let id = this.result_list_ids[this.result_list_ids.length - 1]+1;
		this.result_list_ids.push(id);
		this.result_list.unshift({
			id: id,
			value: value,
			equation: equation
		});
	}

	/*
	 * removes record from the result-list component
	 * @param id - the id of result item to be deleted
	*/
	public removeFromResultList(id: number): void{
		// iterates over result-list items until id matches; then deletes
		for(var i = 0; i < this.result_list.length; i++) {
		    if(this.result_list[i].id == id) {
		        this.result_list.splice(i, 1);
		        break;
		    }
		}
	}
  ...
}
```

Now, by clicking the cancel icon (i.e. circle with cross), you can remove results from the results list in the caculator app.



// more ..

