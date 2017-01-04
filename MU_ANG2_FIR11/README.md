###README.md

#Meetup Angular 2 Firebase 011

Based on 'Editing TypeScript' at https://code.visualstudio.com/Docs/languages/typescript

##Installation

Install Visual Studio Code from https://code.visualstudio.com/

##Editing TypeScript

TypeScript is ***a typed superset of JavaScript*** that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components. A language specification can be found [here](https://github.com/Microsoft/TypeScript/tree/master/doc).

If you are looking for more introductory material, you might want to take a look at the [TypeScript Handbook](https://github.com/Microsoft/TypeScript-Handbook).

Enter one of the projects created during Meetup, via the Terminal (e.g. C:> cd Users/user/meetup/final-project) as an Administrator.

NOTE: Visual Studio Code's TypeScript support can operate in two different modes:

1) FileScope: Does not associate different files with one another (unless explicitly referenced).

2) Explicit Project: Uses ```tsconfig.json``` to associate the files with one another as one project. RECOMMENDED

##Explicit Project

If not present in the root of the project, from Visual Studio Code create a file 'tsconfig.json'.

Inside the file ```tsconfig.json``` make sure it looks similar to:

```javascript
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true
    }    
}
```

The tsconfig.json file lets you control how Visual Studio Code compiles your TypeScript code. 

Due to a current limitation, you must restart VS Code after adding the tsconfig.json file.

Notice how Visual Studio Code auto-completes your text when you type.

Now when you create a .ts file as part of the project, Visual Studio Code will offer up rich editing experiences and syntax validation.

##My Database Data

The current project already has a file ```db-data.ts``` listing 'courses' and associated 'lessons'. In order for us to practise, create a new file 'my-db-data.ts'

Inside of ```my-db-data.ts``` list two entities of your own choosing, e.g. ***team*** and ***player***.

A team has none, one, or more players.

Now re-create the content of db-data.ts (where we used 'courses' and 'lessons'), but in ```my-db-data.ts``` using teams and players:

```javascript
export const dbData = {
  "teams": [
    {
      "name": "Red Socks" 
      ...
      "players": [
        {
          "first_name": "Jim"
           ...
        },
        {
          "first_name": "Jill"
           ...
        }        
      ]
    },
    {
      "name": "Blue Socks",
      ...
      "players": [
       {
         "first_name": "Tom",
         ... 
       },
       {
         "first_name": "Tina",
         ...
       } 
      ]
    }
  ]
};
```

You are invited to add properties to either teams or players that you deem relevant (e.g. ranking, age, gender, position) to the above.

To populate the Firebase database with our newly created data, make a copy of the file 'populate-db.ts' and name it 'populate-my-db.ts' instead.

Inside ```populate-my-db.ts``` make changes to the code so that you will be populating the teams and players data instead of the courses and lessons.

For example, ```populate-my-db.ts```:

```javascript
...
import {dbData} from "./my-db-data";
...

// more changes here

...
``` 

Inside package.json, add the following line inside the scripts section:

```
    "populate-my-db": "./node_modules/.bin/ts-node ./populate-my-db.ts",
```

So, package.json now reads:

```javascript
{
  ...
  "scripts": {
     ...
    "populate-my-db": "./node_modules/.bin/ts-node ./populate-my-db.ts",
    ...
  },
  ...
}
```

Finally, to populate the data of the teams and the players into the firebase database, run the following command:

```javascript
npm run populate-my-db 
```

***WARNING VERY IMPORTANT - PLEASE READ THIS*** 

WARNING Please set your own firebase config on src/environments/firebase.config.ts

Otherwise you will get permissions errors, because the populate-db script is trying to write to my database instead of yours.

Check on Firebase for the project 'final-project-recording' if the data of the teams and players has been successfully populated.

In a next lesson we can try and show the list of teams and players on a web page, similar to the list we created for courses and lessons.

##Material 2

Following the Getting Started guide at https://github.com/angular/material2/blob/master/GETTING_STARTED.mdhttps://github.com/angular/material2/blob/master/guides/getting-started.md

Install Angular Material components:

```javascript
npm install --save @angular/material
```

The problem was Angular Cli installing angular2.0.0 but Angular material looking for angular2.0.2, I've changed that in the package.json and run npm install again and solved the problem.

```javascript
...
  "dependencies": {
    "@angular/common": "2.0.2",
    "@angular/compiler": "2.0.2",
    "@angular/core": "2.0.2",
    "@angular/forms": "2.0.2",
    "@angular/http": "2.0.2",
    "@angular/material": "^2.0.0-alpha.9-3",
    "@angular/platform-browser": "2.0.2",
    "@angular/platform-browser-dynamic": "2.0.2",
    "@angular/router": "~3.1.0",
    "core-js": "^2.4.1",
    "hammerjs": "^2.0.8",
    "rxjs": "5.0.0-beta.12",
    "ts-helpers": "^1.1.1",
    "zone.js": "^0.6.23"
  }
...
```

NOTE: UNMET PEER DEPENDENCY means npm no longer installs peer dependencies, so you have to install them manually, e.g.:

UNMET PEER DEPENDENCY @angular/common@2.1.2
UNMET PEER DEPENDENCY @angular/compiler@2.1.2
UNMET PEER DEPENDENCY @angular/core@2.1.2
UNMET PEER DEPENDENCY @angular/http@2.1.2

Do the following:

```javascript
npm install --save @angular/common@2.1.2 @angular/compiler@2.1.2 @angular/core@2.1.2 @angular/http@2.1.2 @angular/material
```

Import the Angular Material NgModule in scr/app/app.module.ts:

```javascript
...
import { MaterialModule } from '@angular/material';
...
@NgModule({
  ...
  imports: [MaterialModule.forRoot()],
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

If it does not already exist, create a file 'src/themes/unicorn-app-theme.scss':

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
@import 'themes/unicorn-app-theme' and set the body margin;
body {
  margin: 0;
}
...
```

In src/styles.scss you can start to define DOM elements with their styling, e.g.:

```javascript

```

###Routing

If the file does not yet exist, create src/app/app-routing.module.ts:

See also 'Refactor Routes to a Routing Module' at https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

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

For example HTML elements of Material 2, copy the HTML from https://github.com/jelbourn/material2-app/blob/master/src/app/app.component.html into the src/home/home.component.html

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

Paste the css from into src/home/home.component.css:

```javascript
md-sidenav-layout.m2app-dark {
  background: black;
}
... continued
.app-progress {
  margin: 20px;
}
```

Also, copy the following parts of the content of https://github.com/jelbourn/material2-app/blob/master/src/app/app.component.ts to src/home.component.ts

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

###Additional setup for gestures

Some components ()md-slide-toggle, md-slider, mdTooltip) rely on HammerJS for gestures. In order to get the full feature-set of these components, HammerJS must be loaded into the application.

You can add HammerJS to your application via npm, a CDN (such as the Google CDN), or served directly from your app.

If you want to include HammerJS from npm, you can install it:

```javascript
npm install --save hammerjs 
```

After installing, import HammerJS on your app's module. src/app/app.module.ts

```javascript
import 'hammerjs';
```

###[Optional] Using Material Design icons with md-icon:

If you want to use Material Design icons in addition to Angular Material components, load the Material Design font in your index.html.

md-icon supports any font icons or svg icons, so this is only one option for an icon source.

Add to src/index.html:

```javascript
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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