###README.md

# angular2-totaljs-headstart
Angular2 with TotalJS - Headstart

Based on 'Total.js + Angular2 + TypeScript = Amazing Performance' at http://maxprog.net.pl/node-js/total-js-angular2-typescript/

Excerpt:

Angular2  in comparison to Angular (AngularJS) is primarily performance improvements thanks to the redesign of the architecture. UI rendering and application Api are separated into two levels. Thanks to this architecture,  layers can be allocated to different CPU and executed parallely (http://mng.bz/K403)

Angular2 make it easy to define and add features without a lot of manually written boilerplate. Fully integrated TypeScript language gives you the benefits of a statically typed language within JavaScript ecosystem.

##Assumptions and Benefits our project:

- High performance thanks to the redesign architecture Angular2 (UI rendering and application Api separated into two levels)

- Design and build modular applications based on components

- Compatibility for all browsers thanks to SystemJs and compilation process on fly

- Transpile Typescript into latest Javascript (ES7, ES6, ES5 or lower version)

- Use modern JavaScript tools like npm, Babel, Webpack and another not mentioned in this article

How consolidate Angular2 with Total.js and preserve their directory structures and minimizing integration work to a minimum. 

Below we present a simple skeleton on the basis of which you can create powerful applications.

Below presented skeleton/project 

You can find on my GitHub repository: https://github.com/maxprog/totaljs-angular2

The most important:

In case of directory structure:

1. /client1 – Angular2, TypeScript directory (This allows for having more than one 'client', i.e. Angular2 application, choose between them in 'apps/ourwebsite1_com-www/config/')

2. Remaining directories – Total.js

[NOTE: Combined with the 'safe configuration' described at https://docs.totaljs.com/latest/en.html#pages~Getting%20started and default directory structure of angular-cli when creating a new project]

```javascript
/root/
  apps/  <!-- directory will contain your Total.js apps, e.g: -->
    ourwebsite1_com-www/
      client1/ <!-- create it with Angular-CLI ('ng new client1') and this directory will contain your Angular2 app -->
        bower_components <!-- will be created by bower when issueing 'bower install' -->
        dist <!-- will be created by Angular2 CLI when issueing 'ng build' -->
        e2e
        node_modules <!-- will be created by npm when issueing 'npm install' -->
        src/
          app/
          assets/
          bower.json          
          environments/
          favicon.ico
          index.html
          main.ts
          package.json
          polyfills.ts
          styles.css
          test.ts
          tsconfig.json
          typings/
          typings.json
        .editorconfig
        .gitignore
        angular-cli.json
        bower.json
        karma.conf.js
        package.json
        protractor.conf.js
        README.md
        tslint.json
      controllers/
        default.js  
      configs/
      databases/
      definitions/
      isomorphic/
      logs/
      models/
      modules/
      node_modules/
      packages/
      private/
      public/
      resources/
      source/
      startup/
      tests/
      tmp/
      views/
        index.html
      workers/        
      config <!-- IMPORTANT: TotalJS configuration file -->
      package.json
      README.md
      server.js
    componentator_com-www/
      node_modules/ <!-- create it manually and this directory will contain all Node.js modules for this app -->
    totaljs_com-www/
      node_modules/ <!-- create it manually and this directory will contain all Node.js modules for this app --> 
```

Where to install Total.js?

```javascript
cd /root/apps/totaljs_com-www
npm install total.js
```

In case of configuration Total.js:

1. You have to define Angular2 directory in config file, root/apps/ourwebsite1_com-www/config:

```javascript
...
directory-public-virtual: /client1/dist/
...
```

2. You have to block total.js process of compiling script – for this process will be responsible Angular2 and Webpack, in file root/apps/ourwebsite1_com-www/config:

```javascript
...
allow-compile-script: false
...
```

3. If you want to use /public to store css, img or another files then you have to change 'directory-public' to the correct directory e.g. /public/ in file root/apps/ourwebsite1_com-www/config:

```javascript
...
directory-public: /client1/dist/
...
```

4. Please remember to place @{layout''} in index.html:

```javascript
  @{layout('')}
  <meta charset="utf-8">
  <title>Client1</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<link href="styles.bundle.css" rel="stylesheet"></head>
<body>
  <app-root>Loading...</app-root>
<script type="text/javascript" src="inline.bundle.js"></script><script type="text/javascript" src="vendor.bundle.js"></script><script type="text/javascript" src="main.bundle.js"></script></body>
</html>
```

The last operation is the installation process of all necessary modules:

1. Create a file apps/ourwebsite1_com-www/server.js with the following content:

```javascript
require('total.js').http('debug');
```

2. Create a package.json file in the web site directory, agree to the defaults when prompted.

```javascript
cd apps/ourwebsite1_com-www
npm init
```

3. Install the total.js, bower, and typescript node_modules in the web site directory (or globally with option -g), and save them to package.json.

```javascript
cd apps/ourwebsite1_com-www
npm install total.js bower typescript --save
```

2. Create a new Angular2 application in the web site directory

```javascript
cd apps/ourwebsite1_com-www
ng new client1
``` 

3. Install the dependencies in /client1

```javascript
cd apps/ourwebsite1_com-www/client1/
npm install
```

4. Create a bower.json file in apps/ourwebsite1_com-www/client1:

```javascript
{
  "name": "client1",
  "description": "",
  "main": "",
  "license": "ISC",
  "homepage": "",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "jquery": "^3.1.1",
    "bootstrap": "^3.3.7"
  }
}
```

5. Install bower dependencies in /client1 (bootstrap and jquery lib)

```javascript
cd apps/ourwebsite1_com-www/client1/
bower install
```

6. Compile .ts files in Angular to .js files the 'dist' folder by opening another command line terminal, go to the /client1 folder, and run:

```javascript
cd apps/ourwebsite1_com-www/client1/
ng build
```

7. Create a file apps/ourwebsite1_com-www/controllers/default.js with the following content:

```javascript
exports.install = function() {
    F.route('/');
};
```

8. Create a file apps/ourwebsite1_com-www/views/index.html, please remember the @{layout''}, with the following content:

```javascript
 @{layout('')}
  <meta charset="utf-8">
  <title>Client1</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<link href="styles.bundle.css" rel="stylesheet"></head>
<body>
  <app-root>Loading...</app-root>
<script type="text/javascript" src="inline.bundle.js"></script><script type="text/javascript" src="vendor.bundle.js"></script><script type="text/javascript" src="main.bundle.js"></script></body>
</html>
```

9. Start the server from the root directory of project

```javascript
cd /apps/ourwebsite1_com-www
node server
```

10. Visit http://localhost:8000

That’s all – Now you can create Amazing and Professional SPA applications!

#Create a REST API

For our 'ourwebsite1_com-www' we add a directory, apps/ourwebsite1_com-www/***databases***, in to which we create a file called '***users.nosql***':

```javascript
{"id":"16061820050001wet1","firstname":"Peter","lastname":"Sirka","email":"petersirka@gmail.com","phone":"+421903163302","datecreated":"2016-06-18T18:05:43.482Z"}

```

Next, we create a directory, apps/ourwebsite1_com-www/***models***, in to which we create a file called '***user.js***':

```javascript
NEWSCHEMA('User').make(function(schema) {

	schema.define('id', 'UID');
	schema.define('firstname', 'Capitalize(30)', true);
	schema.define('lastname', 'Capitalize(30)', true);
	schema.define('email', 'Email', true);
	schema.define('phone', 'Phone');

	schema.setSave(function(error, model, options, callback) {

		var users = NOSQL('users');

		// Removes hidden properties of the SchemaBuilder
		var data = model.$clean();

		// Checks if the user exists
		if (!model.id) {
			data.id = UID();
			data.datecreated = F.datetime;
			users.insert(data).callback(SUCCESS(callback));
			return;
		}

		data.dateupdated = F.datetime;

		// We don't need to modify id
		delete data.id;

		users.modify(data).make(function(builder) {
			builder.where('id', model.id);
			builder.callback(SUCCESS(callback));
		});
	});

	schema.setGet(function(error, model, options, callback) {

		var users = NOSQL('users');

		// Reads the user
		users.one().make(function(builder) {
			builder.where('id', options.id);
			builder.callback(callback, 'error-user-404');
		});
	});

	schema.setQuery(function(error, options, callback) {

		var users = NOSQL('users');

		// Reads the user
		users.find().make(function(builder) {

			if (options.search) {
				builder.or();
				builder.search('firstname', search);
				builder.search('lastname', search);
				builder.end();
			}

			builder.fields('id', 'firstname', 'lastname', 'datecreated');
			builder.callback(callback);
		});
	});

	schema.setRemove(function(error, options, callback) {

		var users = NOSQL('users');

		// Removes the user
		users.remove().make(function(builder) {
			builder.where('id', options.id);
			builder.callback(SUCCESS(callback));
		});
	});
});
```

In addition, we create a directory, apps/ourwebsite1_com-www/***resources***, in to which we create a file called '***default.resource***':

```javascript
error-user-404      : User doesn't exist.
```

Next, we create a file, apps/ourwebsite1_com-www/***api.js***, with the following content:

```javascript
exports.install = function() {

	// Sets cors for this API
	F.cors('/api/*', ['get', 'post', 'put', 'delete'], true);

	// Creates routes
	F.restful('/api/users/', ['*User'], json_query, json_read, json_save, json_delete);

	// Is same as:
	// F.route('/api/users/',      json_query,   ['*User']);
	// F.route('/api/users/{id}/', json_read,    ['*User']);
	// F.route('/api/users/',      json_save,    ['post', '*User']);
	// F.route('/api/users/{id}/', json_save,    ['put', '*User']);
	// F.route('/api/users/{id}/', json_delete,  ['delete', '*User']);
};

function json_query() {
	var self = this;
	var options = {};

	options.search = self.query.search;

	self.$query(options, self.callback());
}

function json_read(id) {
	var self = this;
	var options = {};

	options.id = id;

	self.$get(options, self.callback());
}

function json_create() {
	var self = this;
	self.$save(self.callback());
}

function json_save(id) {
	var self = this;

	if (id)
		self.body.id = id;

	self.$save(self.callback());
}

function json_delete(id) {
	var self = this;
	var options = {};

	options.id = id;

	self.$remove(options, self.callback());
}
```

##Test the new REST API service

Open Google Chrome's application, called Postman (https://www.getpostman.com), and request data with the following command:

GET http://localhost:8000/api/users

You should see a result set of 'users' being returned.

#How to create REST API with security token?

Based on 'How to create REST API with security token?' at https://blog.totaljs.com/blogs/tutorials/20170208-how-to-create-rest-api-with-security-token/

Sometimes we need a simple security mechanism for our REST API and oftentimes we look for complicated solutions, but why? The implementation of security token is so easy.

##Definition files

###Create a definition file ```tokens.js```:

- this definition file will handle creating default tokens

- database checks whether the token exists (Total.js +v2.4)

The content of apps/ourwebsite1_com-www/definitions/tokens.js should be:

```javascript
function create(token, name) {
    NOSQL('tokens').insert({ token: token, name: name, created: F.datetime }, true).where('token', token);
}

create('d88ad6cd-1112-4fc9-a20a-6ff75ed4d2da', 'Android');
create('5df4b659-bc1d-4e4d-9e37-0fa2ad70f8d1', 'iOS');
```

###Create a definition file ```auth.js```:

The content of apps/ourwebsite1_com-www/definitions/auth.js should be:

```javascript
const SESSION = {};

F.onAuthorize = function(req, res, flags, callback) {

    // We read the X-Token header from the current request
    var token = req.headers['x-token'];
    if (!token)
        return callback(false);

    // We check whether the token exists in the current session
    if (SESSION[token]) {
        // Extends expiration time
        SESSION[token].ticks = F.datetime;
        return callback(true, SESSION[token]);
    }

    // Try to find the token in NoSQL database
    NOSQL('tokens').find().make(function(builder) {
        builder.where('token', token);
        builder.first();
        builder.callback(function(err, response) {
            if (response) {
                response.ticks = F.datetime;
                SESSION[token] = response; // We create a session
                callback(true, response);
            } else
                callback(false);
        });
    });
};

// Removes older sessions
F.on('service', function(counter) {
    if (counter % 5 !== 0)
        return;
    var ticks = F.datetime.add('-10 minutes');
    Object.keys(SESSION).forEach(function(token) {
        if (SESSION[token].ticks < ticks)
            delete SESSION[token];
    });
});
```

##Usage

Now we can use our ***token mechanism*** in a controller, for example:

```javascript
exports.install = function() {
    // `F.onAuthorize` will be called for each of the following routes
    F.route('/api/users/',    json_query, ['*User', 'authorize']);
    F.route('/api/products/', json_query, ['*Products', 'authorize']);    
    F.route('/api/orders/',   json_query, ['*Orders', 'authorize']);    
};

function json_query() {
    this.$query(this.query, this.callback());
}
```

Let's try it with the file apps/ourwebsite1_com-www/controllers/api.js, by adding 'authorize' as follows:

```javascript
...
exports.install = function() {
  ...
	// Creates routes
	F.restful('/api/users/', ['*User', 'authorize'], json_query, json_read, json_save, json_delete);
  ...
}
...
```

When using Postman, ```GET localhost:8000/api/users``` , you will get returned "401: Unauthorized".

To become authorized, make the following changes to Postman:

For Postman, Authorization, choose Type 'Basic Auth'.

From the file apps/ourwebsite1_com-www/definitions/token.js copy for example the token 'd88ad6cd-1112-4fc9-a20a-6ff75ed4d2da'.

For Postman, open Headers and enter the following:

Authorization        Bearer d88ad6cd-1112-4fc9-a20a-6ff75ed4d2da

Now, click Send again.

You should be returned the user data. [THIS IS CURRENTLY NOT WORKING, PERHAPS WE NEED TO LOGIN WITH username AND password FIRST TO RECEIVE THE TOKEN]

#Building more of the Angular2 app

So far our Angular2 app ('client1') does not have much to show, other than 'App works!'. We will now expand on it.

##Including Google's User Interface design library called 'Material (Design) 2'

Based on 'Working with Angular 2 Material' at https://coursetro.com/posts/code/29/Working-with-Angular-2-Material

Install Angular Material from inside the apps/ourwebsite1_com-www/client1 directory, as follows:

```javascript
cd apps/ourwebsite1_com-www/client1
npm install --save @angular/material
```

This will install Angular Material and save it to our package.json as a dependency.

Next, add the reference to angular material in the file client1/src/app/app.module.ts:

```javascript
...
import { MaterialModule } from '@angular/material';
...
@NgModule({
  ...
  imports: [
    ...
    MaterialModule,
    ...
  ],
  ...
})
...
```

#Include HammerJS

Certain components in Angular Material (slide-toggle and slider) require HammerJS in order to work correctly.

Hence, we need to install HammerJS as follows, again from inside the apps/ourwebsite1_com-www/client1 directory:

```javascript
npm install --save hammerjs
```

```javascript
npm install --save-dev @types/hammerjs
```

And HammerJS needs also to be imported in client1/src/app/app.module.ts:

```javascript
...
import 'hammerjs';
...
```

...and add HammerJS to the types section of the client1/src/tsconfig.json file:

```javascript
...
{
  "compilerOptions": {
    ...
    "types": [
      "hammerjs"
    ]
  }
}
...
```



##Including Material Design Icons & Roboto Font

Add the following links inside apps/ourwebsite1_com-www/views/index.html AND apps/ourwebsite1_com-www/client1/src/index.html:

```javascript
...
<head>
  ...
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
  ...
</head>
...
```

***WARNING***: There have been some breaking changes made by the Material 2 team, see https://github.com/angular/material2/blob/master/CHANGELOG.md

- Styling is no longer prefixed by 'md-'. All styling is now prefixed by 'mat-' so that apps can upgrade from AngularJS Material to Angular Material without styling conflicts between the two library components.

As a temporary test to see what the Angular 2 app ('client1') now looks like, from the directory apps/ourwebsite1_com-www/client1/ run:

```javascript
ng build
```

This will create a compiled version of our client1 inside the 'dist' folder.

Now change directory to apps/ourwebsite1_com-www/ and run the following command:

```javascript
node server
```

Voila! ... app works!

No noticable changes in styling other than that the font used is now Roboto. We will have to introduce more elements to show the impact of the styling.

##Creating a custom Material Design Theme

Angular Material offers several pre-built themes from which you can declare in the styles.css via the import tag.

The available themes are:

- indigo-pink

- deeppurple-amber

- purple-green

- pink-bluegrey

Instead we will create a custom material design theme.

A theme file is a simple Sass file that defines your palettes and passes them to mixins that output the corresponding styles. 

SEE ALSO: 'Angular-Material 2 Theme Tutorial' at https://medium.com/covalent-ui/angular-material-2-theme-tutorial-2f7e6c344006#.p1ub34gjj

If you are using the Angular CLI, support for compiling Sass to css is built-in; you only have to change the entry to the "styles" list in ***apps/ourwebsite1_com-www/client1/angular-cli.json*** pointing to the style file (e.g., style.scss). NOTE the file should end with .scss, not .css

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
@include mat-core();

/* Define the palettes for your theme using the Material Design palettes available in palette.scss */
/* (imported above). For each palette, you can optionally specify a default, lighter, and darker */
/* hue. */
$unicorn-app-primary: mat-palette($mat-blue-grey);
$unicorn-app-accent:  mat-palette($mat-amber, A200, A100, A400);

/* The warn palette is optional (defaults to red).*/
$unicorn-app-warn: mat-palette($mat-deep-orange);

/* Create the theme object (a Sass map containing all of the palettes).*/
$unicorn-app-theme: mat-light-theme($unicorn-app-primary, $unicorn-app-accent, $unicorn-app-warn);

/* Include theme styles for core and each component used in your app.*/
/* Alternatively, you can import and @include the theme mixins for each component */
/* that you are using. */
@include angular-material-theme($unicorn-app-theme);

.m2app-dark {
  $dark-primary: mat-palette($mat-pink, 700, 500, 900);
  $dark-accent:  mat-palette($mat-blue-grey, A200, A100, A400);
  $dark-warn:    mat-palette($mat-deep-orange);

  $dark-theme: mat-dark-theme($dark-primary, $dark-accent, $dark-warn);

  @include angular-material-theme($dark-theme);
}
```

Now import the Material fonts and icons as well as the unicorn-app-theme in apps/ourwebsite1_com-www/client1/src/styles.scss and set the body margin and font family:

```javascript
@import 'themes/unicorn-app-theme';
//@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css'; // Alternatively, used a prebuilt theme
body {
  margin: 0;
  font-family: Roboto, sans-serif;
}
...
```

###Routing

See also 'Refactor Routes to a Routing Module' at https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

If the file does not yet exist, create apps/ourwebsite1_com-www/client1/src/app/app-routing.module.ts with the following content:

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

Import the AppRoutingModule in apps/ourwebsite1_com-www/client1/src/app/app.module.ts:

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

***NOTE:***
First we set the default extension of our stylesheets from css to scss, by running the following command from apps/ourwebsite1_com-www/client1:

```javascript
ng set defaults.styleExt scss
```

Let's generate a Home component as our default route, from within the project directory apps/ourwebsite1_com-www/client1.

```javascript
ng generate component home
```

Change the content of apps/ourwebsite1_com-www/client1/home/home.component.html to:

```javascript
<md-sidenav-container [class.m2app-dark]="isDarkTheme">

  <md-sidenav #sidenav mode="side" class="app-sidenav">
    Sidenav
  </md-sidenav>

  <md-toolbar color="primary">
    <button class="app-icon-button" (click)="sidenav.toggle()">
      <i class="material-icons app-toolbar-menu">menu</i>
    </button>

    {{title}}

    <span class="app-toolbar-filler"></span>
    <button md-button (click)="isDarkTheme = !isDarkTheme">TOGGLE DARK THEME</button>
  </md-toolbar>

  <div class="app-content">

    <md-card>
      <button md-button>FLAT</button>
      <button md-raised-button md-tooltip="This is a tooltip!">RAISED</button>
      <button md-raised-button color="primary">PRIMARY RAISED</button>
      <button md-raised-button color="accent">ACCENT RAISED</button>
    </md-card>

    <md-card>
      <md-checkbox>Unchecked</md-checkbox>
      <md-checkbox [checked]="true">Checked</md-checkbox>
      <md-checkbox [indeterminate]="true">Indeterminate</md-checkbox>
      <md-checkbox [disabled]="true">Disabled</md-checkbox>
    </md-card>

    <md-card>
      <md-radio-button name="symbol">Alpha</md-radio-button>
      <md-radio-button name="symbol">Beta</md-radio-button>
      <md-radio-button name="symbol" disabled>Gamma</md-radio-button>
    </md-card>

    <md-card class="app-input-section">
      <input mdInput placeholder="First name" />

      <input mdInput #nickname placeholder="Nickname" maxlength="50" />
        <md-hint align="end">
          {{nickname.characterCount}} / 50
        </md-hint>

      <input mdInput />
        <md-placeholder>
          <i class="material-icons app-input-icon">android</i> Favorite phone
        </md-placeholder>

      <input mdInput placeholder="Motorcycle model" />
        <span md-prefix>
          <i class="material-icons app-input-icon">motorcycle</i>
          &nbsp;
        </span>

    </md-card>

    <md-card>
      <md-list class="app-list">
        <md-list-item *ngFor="let food of foods">
          <h3 md-line>{{food.name}}</h3>
          <p md-line class="demo-secondary-text">{{food.rating}}</p>
        </md-list-item>
      </md-list>
    </md-card>

    <md-card>
      <md-spinner class="app-spinner"></md-spinner>
      <md-spinner color="accent" class="app-spinner"></md-spinner>
    </md-card>

    <md-card>
      <label>
        Indeterminate progress-bar
        <md-progress-bar
            class="app-progress"
            mode="indeterminate"
            aria-label="Indeterminate progress-bar example"></md-progress-bar>
      </label>

      <label>
        Determinate progress bar - {{progress}}%
        <md-progress-bar
            class="app-progress"
            color="accent"
            mode="determinate"
            [value]="progress"
            aria-label="Determinate progress-bar example"></md-progress-bar>
      </label>
    </md-card>

    <md-card>
      <md-tab-group>
        <md-tab label="Earth">
          <p>EARTH</p>
        </md-tab>
        <md-tab label="Fire">
          <p>FIRE</p>
        </md-tab>
      </md-tab-group>
    </md-card>

    <md-card>
      <md-icon>build</md-icon>
    </md-card>

    <md-card>
      <button md-button [md-menu-trigger-for]="menu">
        MENU
      </button>
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

  </div>

</md-sidenav-container>

<span class="app-action" [class.m2app-dark]="isDarkTheme">
  <button md-fab><md-icon>check circle</md-icon></button>
</span>
```

And also change the content of apps/ourwebsite1_com-www/client1/home/home.component.scss to:

```javascript
md-sidenav-layout.m2app-dark {
  background: black;
}

.app-content {
  padding: 20px;
}

.app-content md-card {
  margin: 20px;
}

.app-sidenav {
  padding: 0px;
  min-width: 100px;
}

.app-content md-checkbox {
  margin: 10px;
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

Type the following parts into apps/ourwebsite1_com-www/client1/src/app/home/home.component.ts

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

  ngOnInit() {
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

Finally, update apps/ourwebsite1_com-www/client1/src/app/app.module.ts as follows:

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

Replace the default HTML in apps/ourwebsite1_com-www/client1/src/app/app.component.html to now the router outlet:

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

Build the application, from apps/ourwebsite1_com-www/client1/ run:

```javascript
ng build
```

Now you should be able to serve the website, go to apps/ourwebsite1_com-www/ and run:

```javascript
node server
```

The website will automatically open the Home page, as the route of http://localhost:8000 is ''.

You should see a page full of Material 2 Design elements (i.e. buttons and form elements such as input fields and checkboxes), in our custom themed colors.

##Refactor HTML

Instead of having both headings & navigation and content all in the home component html, it is preferred to move the headings & navigation to the app component html, as follows:

app.component.html:

```javascript
<md-sidenav-container [class.m2app-dark]="isDarkTheme">

  <md-sidenav #sidenav mode="side" class="app-sidenav">
    Sidenav
  </md-sidenav>

  <md-toolbar color="primary">
    <button class="app-icon-button" (click)="sidenav.toggle()">
      <i class="material-icons app-toolbar-menu">menu</i>
    </button>

    {{title}}

    <span class="app-toolbar-filler"></span>
    <button md-button (click)="isDarkTheme = !isDarkTheme">TOGGLE DARK THEME</button>
  </md-toolbar>
  
</md-sidenav-container>

<span class="app-action" [class.m2app-dark]="isDarkTheme">
  <button md-fab><md-icon>check circle</md-icon></button>
</span>
```

Leave the following part of html in home.component.html:

```javascript
<div class="app-content">

  <md-card>
    <button md-button>FLAT</button>
    <button md-raised-button md-tooltip="This is a tooltip!">RAISED</button>
    <button md-raised-button color="primary">PRIMARY RAISED</button>
    <button md-raised-button color="accent">ACCENT RAISED</button>
  </md-card>

  <md-card>
    <md-checkbox>Unchecked</md-checkbox>
    <md-checkbox [checked]="true">Checked</md-checkbox>
    <md-checkbox [indeterminate]="true">Indeterminate</md-checkbox>
    <md-checkbox [disabled]="true">Disabled</md-checkbox>
  </md-card>

  <md-card>
    <md-radio-button name="symbol">Alpha</md-radio-button>
    <md-radio-button name="symbol">Beta</md-radio-button>
    <md-radio-button name="symbol" disabled>Gamma</md-radio-button>
  </md-card>

  <md-card class="app-input-section">
    <input mdInput placeholder="First name" />

    <input mdInput #nickname placeholder="Nickname" maxlength="50" />
      <md-hint align="end">
        {{nickname.characterCount}} / 50
      </md-hint>

    <input mdInput />
      <md-placeholder>
        <i class="material-icons app-input-icon">android</i> Favorite phone
      </md-placeholder>

    <input mdInput placeholder="Motorcycle model" />
      <span md-prefix>
        <i class="material-icons app-input-icon">motorcycle</i>
        &nbsp;
      </span>

  </md-card>

  <md-card>
    <md-list class="app-list">
      <md-list-item *ngFor="let food of foods">
        <h3 md-line>{{food.name}}</h3>
        <p md-line class="demo-secondary-text">{{food.rating}}</p>
      </md-list-item>
    </md-list>
  </md-card>

  <md-card>
    <md-spinner class="app-spinner"></md-spinner>
    <md-spinner color="accent" class="app-spinner"></md-spinner>
  </md-card>

  <md-card>
    <label>
      Indeterminate progress-bar
      <md-progress-bar
          class="app-progress"
          mode="indeterminate"
          aria-label="Indeterminate progress-bar example"></md-progress-bar>
    </label>

    <label>
      Determinate progress bar - {{progress}}%
      <md-progress-bar
          class="app-progress"
          color="accent"
          mode="determinate"
          [value]="progress"
          aria-label="Determinate progress-bar example"></md-progress-bar>
    </label>
  </md-card>

  <md-card>
    <md-tab-group>
      <md-tab label="Earth">
        <p>EARTH</p>
      </md-tab>
      <md-tab label="Fire">
        <p>FIRE</p>
      </md-tab>
    </md-tab-group>
  </md-card>

  <md-card>
    <md-icon>build</md-icon>
  </md-card>

  <md-card>
    <button md-button [md-menu-trigger-for]="menu">
      MENU
    </button>
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

</div>
```

The styling will have changed badly, as there is no css in app.component.scss. So, move the following css from home.component.scss to app.component.scss.

```javascript
md-sidenav-container.m2app-dark {
  background: black;
}

.app-content {
  padding: 20px;
}

.app-sidenav {
  padding: 0px;
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

That leaves home.component.scss with the following:

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

Lastly, change the value of the variable 'title' inside the apps/ourwebsite1_com-www/client1/src/app/app.component.ts:

```javascript
...
export class AppComponent {
  title = 'Our Website';
}
...
```

By moving some of the HTML and css to the app component, the top menu bar will now stick to the application. Whereas the content of the page will be part of the home component. As such, if we create more components (e.g. About component), we will be able to re-use the top menu and fill the rest of the page with page specific content (e.g. information About our company coming from the About component).

When you build the application again and browse to the web site, you should see not changes. However, the header is now nicely separated from the home page, and will re-occur on every following page.

#About page

To do: generate a new component called 'about' using ng command, inside directory apps/ourwebsite1_com-www/client1:

```javascript
ng generate component about
```

Add 'about' to the routing. 

Inside apps/ourwebsite1_com-www/client1/src/app/app-routing.module.ts add the following:

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

***NOTE***: Look at https://material.angular.io/components for details of Material 2 components for Angular2

In apps/ourwebsite1_com-www/client1/src/app/app.component.html add:

```javascript
...
<md-sidenav-container [class.m2app-dark]="isDarkTheme">

  <md-sidenav #sidenav mode="side" class="app-sidenav">

    <md-toolbar class="sidenav-toolbar md-elevation-z2 md-accent" color="accent">
      <div class="md-toolbar-layout">
        <md-toolbar-row>
          Menu
        </md-toolbar-row>
      </div>
    </md-toolbar>

    <md-nav-list class="sidenav-list sidenav-toplevel" fxlayout="column" role="list" style="display: flex; box-sizing: border-box; flex-direction: column; -webkit-box-orient: vertical; -webkit-box-direction: normal;">
<!--      <ms-sidenav-item class="sidenav-item"> -->
        <a class="sidenav-anchor" md-list-item="" md-ripple="" role="listitem" routerlinkactive="active" href="/">
          <div class="md-list-item">
            <div class="md-list-text"></div>
            <md-icon role="img" class="material-icons" aria-label="home">home</md-icon>
            <span class="sidenav-item-name fade-in-on-icon-sidenav">Home</span>
            <span fxflex="" style="flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;"></span>
          </div>
          <div class="md-ripple-background"></div>
        </a>
<!--      </ms-sidenav-item>-->
<!--      <ms-sidenav-item class="sidenav-item"> -->
        <a class="sidenav-anchor" md-list-item="" md-ripple="" role="listitem" routerlinkactive="active" href="/about">
          <div class="md-list-item">
            <div class="md-list-text"></div>
            <md-icon role="img" class="material-icons" aria-label="map">map</md-icon>
            <span class="sidenav-item-name fade-in-on-icon-sidenav">About</span>
            <span fxflex="" style="flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;"></span>
          </div>
          <div class="md-ripple-background"></div>
        </a>
<!--      </ms-sidenav-item>-->
    </md-nav-list>  

  </md-sidenav>
  ...
</md-sidenav-container>
...
```

Update the styles in apps/ourwebsite1_com-www/client1/app/app.component.scss:

```javascript
...
/*
 * The /deep/ selector is simply to overcome view encapsulation
 * and be able to select the div.md-sidenav-content generated at runtime
*/
md-sidenav-container /deep/ .md-sidenav-content {
  overflow: hidden;
}

.app-content {
  padding: 20px;
  height: calc(100% - 64px);
  overflow: auto;  
}

.mat-nav-list {
  padding-top: 0px;
  display: block;
}
...
```

Check it out! Build the application from apps/ourwebsite1_com-www/client as follows:

```javascript
ng build
```

Then browse to the web site at http://localhost:8000, or start the server first from apps/ourwebsite1_com-www with:

```javascript
node server
```

#Angular2 Google Map

We will create a Google Map on the About page.

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

  title: string = 'About: My Google Map';
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
<md-card class="_md">
  <md-card-header>
    <span class="md-title">{{ title }}</span>
  </md-card-header>
  <!-- this creates a google map on the page with the given lat/lng from -->
  <!-- the component as the initial center of the map: -->
  <sebm-google-map [latitude]="lat" [longitude]="lng">
    <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>
  </sebm-google-map>
</md-card>
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

#REST

Based on 'Angular2 and Rxjs : a simple paginated list with search field' at https://blog.bouzekri.net/2016-05-15-angular2-rxjs-simple-paginated-list-with-search-field

See updated version at https://jbouzekri.github.io/angular-search-list/

with the code at https://github.com/jbouzekri/angular-search-list

