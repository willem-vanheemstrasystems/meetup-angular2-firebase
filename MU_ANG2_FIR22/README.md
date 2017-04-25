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
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic">
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

#Search List

Based on 'Angular2 and Rxjs : a simple paginated list with search field' at https://blog.bouzekri.net/2016-05-15-angular2-rxjs-simple-paginated-list-with-search-field

See updated version at https://jbouzekri.github.io/angular-search-list/

with the code at https://github.com/jbouzekri/angular-search-list

Lets start by generating a component called search-list in apps/ourwebsite1_com-www/client1:

```javascript
ng generate component search-list
```
Create a new folder 'services' in apps/ourwebsite1_com-www/client1:

```javascript
cd apps/ourwebsite1_com-www/client1/src/app
mkdir services
```

Next generate a service called data in apps/ourwebsite1_com-www/client1:

```javascript
ng generate service services/data
```

Create a new folder 'models' in apps/ourwebsite1_com-www/client1/src/app:

```javascript
cd apps/ourwebsite1_com-www/client1/src/app
mkdir models
```

Inside the folder apps/ourwebsite1_com-www/client1/src/app/models create a new file called ***data.model.ts*** with the following content:

```javascript
export class Data {
  constructor(public id: number, public title: string) {};
}
```

Inside the folder apps/ourwebsite1_com-www/client1/src/app/services create a file called ***data.base.ts***, with the following content:

```javascript
import { DataModel } from "../models/data.model";

// Extract from imdb
export const DataBase: DataModel[] = [
  new DataModel(1, "She Made Them Do It"),
  new DataModel(2, "Poka stanitsa spit"),
  new DataModel(3, "Memory Lane"),
  new DataModel(4, "No Through Road"),
  new DataModel(5, "Malcolm & Eddie"),
  new DataModel(6, "Violet"),
  new DataModel(7, "Last Call with Carson Daly"),
  new DataModel(8, "The Yellow Badge of Courage"),
  new DataModel(9, "Doctor Who: The Companion Chronicles"),
  new DataModel(10, "The Feed"),
  new DataModel(11, "Emmerdale Farm"),
  new DataModel(12, "The Jeselnik Offensive"),
  new DataModel(13, "Zero Minute"),
  new DataModel(14, "Nina and the Neurons Go Inventing"),
  new DataModel(15, "Dynamo"),
  new DataModel(16, "Ammattimies"),
  new DataModel(17, "Happening Now"),
  new DataModel(18, "The O'Reilly Factor"),
  new DataModel(19, "How Do I Look?"),
  new DataModel(20, "Electric Playground"),
  new DataModel(21, "Commissaire Laviolette"),
  new DataModel(22, "The Young Doctors"),
  new DataModel(23, "Married with Children"),
  new DataModel(24, "Le clan Pasquier"),
  new DataModel(25, "The Gale Storm Show: Oh! Susanna"),
  new DataModel(26, "Serangoon Road"),
  new DataModel(27, "The Young Doctors"),
  new DataModel(28, "Family Matters"),
  new DataModel(29, "Motormouth"),
  new DataModel(30, "Antiques Roadshow"),
  new DataModel(31, "Wasak"),
  new DataModel(32, "Prime News"),
  new DataModel(33, "May bukas pa"),
  new DataModel(34, "The Hollywood Squares"),
  new DataModel(35, "Els matins a TV3"),
  new DataModel(36, "Your Favorite Story"),
  new DataModel(37, "Los desayunos de TVE"),
  new DataModel(38, "The Small House at Allington"),
  new DataModel(39, "Minute to Win It"),
  new DataModel(40, "El ministerio del tiempo"),
  new DataModel(41, "The Fabulous Picture Show"),
  new DataModel(42, "Black Jack"),
  new DataModel(43, "Cutting Edge"),
  new DataModel(44, "Judge Joe Brown"),
  new DataModel(45, "All Saints"),
  new DataModel(46, "Quincy M.E."),
  new DataModel(47, "Neighbours"),
  new DataModel(48, "Chistoserdechnoe priznanie"),
  new DataModel(49, "John Halifax, Gentleman"),
  new DataModel(50, "Paul Flynn"),
  new DataModel(51, "Texas Monthly Talks"),
  new DataModel(52, "David Copperfield"),
  new DataModel(53, "Obruchalnoe koltso"),
  new DataModel(54, "Rock Macabre"),
  new DataModel(55, "The Tonight Show Starring Johnny Carson"),
  new DataModel(56, "Daesh molodezh"),
  new DataModel(57, "Wicked Wicked Games"),
  new DataModel(58, "Music Fair"),
  new DataModel(59, "Flip My Food with Chef Jeff"),
  new DataModel(60, "Un hombre solo"),
  new DataModel(61, "My S Rostova"),
  new DataModel(62, "Zwei bei Kallwass"),
  new DataModel(63, "Last Call with Carson Daly"),
  new DataModel(64, "Jimmy Kimmel Live!"),
  new DataModel(65, "Plebs"),
  new DataModel(66, "Lonelygirl15"),
  new DataModel(67, "Plus belle la vie"),
  new DataModel(68, "Watch What Happens: Live"),
  new DataModel(69, "WRAL Murder Trials"),
  new DataModel(70, "Secrets of the Bible"),
  new DataModel(71, "Six O'Clock News"),
  new DataModel(72, "Jackie Gleason: American Scene Magazine"),
];
```

Create a file in apps/ourwebsite1_com-www/client1/src/app/services called ***list-result.interface.ts*** with the following content:

```javascript
export interface ListResult<T> {
  items: T[]

  total: number
}
```

Now change the content of the file apps/ourwebsite1_com-www/client1/src/app/services/data.service.ts to the following:

```javascript
import { ListResult } from "./list-result.interface";
import { DataBase } from "./data.base";

@Injectable()
export class DataService {
  data: DataModel[] = DataBase;

  constructor() { }

  list(search: string = null, page: number = 1, limit: number = 10): Observable<ListResult<DataModel>> {
    let dataResult = this.data.filter(function(data: DataModel) {
        return (search) ? data.title.toLowerCase().indexOf(search) !== -1 : true;
    });

    let dataResultPage = dataResult.slice((page - 1) * limit, page * limit);
    return Observable.of({total: dataResult.length, items: dataResultPage}).delay(100);
  }

}
```

The content of the file apps/ourwebsite1_com-www/client1/src/app/search-list/search-list.component.ts should be:

```javascript
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Subject, Observable } from "rxjs";

import { DataService } from "../services/data.service";
import { DataModel } from "../models/data.model";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  total$: Observable<number>;
  items$: Observable<DataModel[]>;

  terms: string = "";
  private searchTermStream = new Subject<string>();

  page: number = 1;
  private pageStream = new Subject<number>();

  constructor(protected dataService: DataService) { }

  ngOnInit() {
    const searchSource = this.searchTermStream
      .debounceTime(1000)
      .distinctUntilChanged()
      .map(searchTerm => {
        this.terms = searchTerm;
        return {search: searchTerm, page: 1}
      });

    const pageSource = this.pageStream.map(pageNumber => {
      this.page = pageNumber;
      return {search: this.terms, page: pageNumber}
    });

    const source = pageSource
      .merge(searchSource)
      .startWith({search: this.terms, page: this.page})
      .switchMap((params: {search: string, page: number}) => {
        return this.dataService.list(params.search, params.page)
      })
      .share();

    this.total$ = source.pluck('total');
    this.items$ = source.pluck('items');
  }

  search(terms: string) {
    this.searchTermStream.next(terms)
  }

  goToPage(page: number) {
    this.pageStream.next(page)
  }

}
```

And search-list.component.html should be as follows:

```javascript
<form (submit)="search(term.value)">
  <div class="input-group input-group-sm" style="margin-bottom: 10px;">
    <input #term (keyup)="search(term.value)" [value]="terms" class="form-control" placeholder="Search" autofocus>
    <div class="input-group-btn">
      <button type="submit" class="btn btn btn-default btn-flat"><i class="fa fa-search"></i></button>
    </div>
  </div>
</form>

<p>Results: {{ total$ | async }}</p>

<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th>id</th>
      <th>title</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let item of items$ | async">
      <td>{{ item.id }}</td>
      <td>{{ item.title }}</td>
    </tr>
  </tbody>
</table>

<app-pagination [total]="total$ | async" [page]="page" (goTo)="goToPage($event)"></app-pagination>
```

As you can see from the above HTML, we are in need ofr a pagination component, so let's generate one now.

In apps/ourwebsite1_com-www/client1 generate a component called pagination:

```javascript
cd apps/ourwebsite1_com-www/client1/src/app
mkdir shared
cd ../../
ng generate component shared/pagination
```

Change the content of apps/ourwebsite1_com-www/client1/src/app/pagination/pagination.component.ts to:

```javascript
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input()
  total: number = 0;

  @Input()
  page: number = 1;

  @Output()
  goTo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  totalPages() {
    return Math.ceil(this.total / 10);
  }

  pagesRange() {
    return this.range(1, this.totalPages() + 1);
  }

  prevPage() {
    return Math.max(1, this.page - 1);
  }

  nextPage() {
    return Math.min(this.totalPages(), this.page + 1);
  }

  pageClicked(page: number) {
    this.goTo.next(page);
  }

  range(start, stop, step=1){
    if (!stop) { start=0;stop=start; }
    return Array.from(new Array(Number((stop-start)/step)), (x,i) => start+ i*step)
  }

}
```

And pagination.component.html should be:

```javascript
<ul *ngIf="totalPages() > 1" class="pagination pagination-sm no-margin pull-right">
  <li *ngIf="page != 1"><a (click)="pageClicked(prevPage())">«</a></li>
  <li *ngFor="let p of pagesRange()"><a (click)="pageClicked(p)">{{p}}</a></li>
  <li *ngIf="totalPages() > page"><a (click)="pageClicked(nextPage())">»</a></li>
</ul>
```

Make sure the file apps/ourwebsite1_com-www/client1/src/app/app.module.ts contains this:

```javascript
...
import { SearchListComponent } from './search-list/search-list.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { DataService } from './services/data.service';
...
@NgModule({
  declarations: [
    ...
    SearchListComponent,
    PaginationComponent
  ],
  ...
  providers: [DataService],
  ...
})
...
```

Lastly we'll add a ***store*** page to our web site to show our search list:

Inside apps/ourwebsite1_com-www/client1 run:

```javascript
ng generate component store
```

Add the store page to the file apps/ourwebsite1_com-www/client1/src/app/app-routing.module.ts:

```javascript
...
import { StoreComponent } from './store/store.component';
...
const routes: Routes = [
  ...
  { path: 'store', component: StoreComponent } 
];
...
```

Add the reference to the search-list component in apps/ourwebsite1_com-www/client1/src/app/store/store.comonent.html:

```javascript
<app-search-list></app-search-list>
```

Create a menu item for the store page in apps/ourwebsite1_com-www/client1/app/app.component.html:

```javascript
...
    </md-nav-list> 
       ...
<!--      <ms-sidenav-item class="sidenav-item"> -->
        <a class="sidenav-anchor" md-list-item="" md-ripple="" role="listitem" routerlinkactive="active" href="/store">
          <div class="md-list-item">
            <div class="md-list-text"></div>
            <md-icon role="img" class="material-icons" aria-label="store">store</md-icon>
            <span class="sidenav-item-name fade-in-on-icon-sidenav">Store</span>
            <span fxflex="" style="flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;"></span>
          </div>
          <div class="md-ripple-background"></div>
        </a>
<!--      </ms-sidenav-item>-->
        ...
    </md-nav-list> 
...
```

Now build the application with:

```javascript
ng build
```

Then serve the website:

```javascript
ng serve
```

And navigate to the store page at http://localhost:4200/store

You should be able to search a list of items an page through them.

TO DO: Style the Store page...

#Products Viewer

To allow managing products, we introduce a dedicated component to view products. So let's create it now:

```javascript
cd apps/ourwebsite1_com-www/client1/src/app
mkdir products
cd ../../
ng generate component products/products-viewer
```

Next, we need a service to provide the products, so execute the following command:

```javascript
cd apps/ourwebsite1_com-www/client1
ng generate service services/products
```

Change the content of the file apps/ourwebsite1_com-www/client1/src/app/services/products.service.ts to:

```javascript
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";

import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductsService {

  private baseUrl: string = 'http://localhost:8001/api';

	requestOptions: RequestOptions = new RequestOptions({
		headers: new Headers({ 'Content-Type': 'application/json' })
	});  

  constructor(private http: Http) { }

  getAll(offset: number = 0, limit: number = 2): Observable<ProductsService> {
    return this.http
      .get(`${this.baseUrl}/products/?offset=${offset}&limit=${limit}`)
      .map(response => response.json())
      .map(results => this.getList(results));
  }

  get(productId: number): Observable<Product> {
    return this.http.get(`${this.baseUrl}/products/` + encodeURIComponent(productId.toString())).map(this.extractData).catch(this.handleError);
  }

  insert(product: Product): Observable<Product> {
    return this.http.post(`${this.baseUrl}/products/`, JSON.stringify(product), this.requestOptions).map(res => res.json()).catch(this.handleError);
  }

	update(product: Product): Observable<Product> {
		return this.http.put(`${this.baseUrl}/products/` + encodeURIComponent(product.id.toString()),
			JSON.stringify(product), this.requestOptions).map(res => res.json()).catch(this.handleError);	
	}

	delete(productId: number): Observable<Product> {
		return this.http.delete(`${this.baseUrl}/products/` + encodeURIComponent(productId.toString())).map(res => res.json()).catch(this.handleError);
	}

  getList(data): ProductsService {
		// room for additional filtering
		return data;
	}

	/**
	 * Pick the array that belongs to the key 'products'
	 * 
	 * e.g. { products:[our data is in here] }
	 */
	private extractData(res: Response) {
		let body = res.json();
		//console.log(body.products);
		return body.products || {};
	}

	/**
	 * Handle error
	 */
	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
    	// We'd also dig deeper into the error to get a better message
    	let errMsg = (error.message) ? error.message :
      	error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    	console.error(errMsg); // log to console instead
    	return Observable.throw(errMsg);
	}

}
```

As our application needs to know the attributes of a product, create a model of a product as follows:

```javascript
cd apps/ourwebsite1_com-www/client1/src/app/models
touch product.model.ts
type NUL >> product.model.ts
```
NOTE: The 'touch' command creates a file on Mac or Linux, in this case the file that contains a model of a product.
NOTE: The 'type NUL >> ' command creates a file on Windows, in this case the file that contains a model of a product.

The content of the newly created file, apps/ourwebsite1_com-www/client1/src/app/models/product.model.ts, should be:

```javascript
export class ProductModel {
  constructor(
    public id: number,
    public title: string,
    public link: string,
    public status: string
    // more to follow
  ) { }
}
``

Following on, the products viewer requires this component; apps/ourwebsite1_com-www/client1/src/app/products/shared/products-list:

```javascript
cd apps/ourwebsite1_com-www/client1/src/app/products
mkdir shared
cd ../../../
ng generate component products/shared/products-list
```

The content of the just created apps/ourwebsite1_com-www/client1/src/app/products/shared/products-list.ts should be:

```javascript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

	@Input()
	products: ProductModel[];

	@Output()
	viewProduct: EventEmitter<number> = new EventEmitter<number>();

	@Output()
	editProduct: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

	viewProductButton(productId: number) {
		this.viewProduct.emit(productId)
	}

	editProductButton(productId: number) {
		this.editProduct.emit(productId)
	}  

}
```

With the products list component now ready, we can reference it in the apps/ourwebsite1_com-www/client1/src/app/products/products-viewer/products-viewer.component.html as follows:

```javascript
...
<md-icon role="img" class="material-icons" aria-label="store">store</md-icon>
<span class="display-1">Store</span><br/>
 	<app-products-list
		[products]="products"
		(viewProduct)="viewProduct($event)"
		(editProduct)="editProduct($event)">
	</app-products-list>
...    
```

And the following to its corresponding apps/ourwebsite1_com-www/client1/src/app/products/products-viewer/products-viewer.component.scss file:

```javascript
...
.display-4 {
  font-size: 112px;
  font-size: 11.2rem;
  line-height: 128px;
  line-height: 12.8rem;
  letter-spacing: -0.1px;
  letter-spacing: -0.01rem;
  font-weight: 100;
  color: #757575;
  text-transform: inherit;
}
.display-3 {
  font-size: 56px;
  font-size: 5.6rem;
  line-height: 84px;
  line-height: 8.4rem;
  letter-spacing: -0.05px;
  letter-spacing: -0.005rem;
  font-weight: 300;
  color: #757575;
  text-transform: inherit;
}
.display-2 {
  font-size: 45px;
  font-size: 4.5rem;
  line-height: 48px;
  line-height: 4.8rem;
  letter-spacing: 0px;
  letter-spacing: 0rem;
  font-weight: 300;
  color: #757575;
  text-transform: inherit;
}
.display-1 {
  font-size: 34px;
  font-size: 3.4rem;
  line-height: 40px;
  line-height: 4rem;
  letter-spacing: 0px;
  letter-spacing: 0rem;
  font-weight: 300;
  color: #757575;
  text-transform: inherit;
}
.headline {
  font-size: 24px;
  font-size: 2.4rem;
  line-height: 32px;
  line-height: 3.2rem;
  letter-spacing: 0px;
  letter-spacing: 0rem;
  font-weight: 300;
  color: #212121;
  text-transform: inherit;
}
.title {
  font-size: 20px;
  font-size: 2rem;
  line-height: 28px;
  line-height: 2.8rem;
  letter-spacing: 0.05px;
  letter-spacing: 0.005rem;
  font-weight: 400;
  color: #212121;
  text-transform: inherit;
}
.subhead-2 {
  font-size: 15px;
  font-size: 1.5rem;
  line-height: 28px;
  line-height: 2.8rem;
  letter-spacing: 0.1px;
  letter-spacing: 0.01rem;
  font-weight: 400;
  color: #212121;
  text-transform: inherit;
}
.subhead-1 {
  font-size: 15px;
  font-size: 1.5rem;
  line-height: 24px;
  line-height: 2.4rem;
  letter-spacing: 0.1px;
  letter-spacing: 0.01rem;
  font-weight: 300;
  color: #212121;
  text-transform: inherit;
}
.body-2 {
  font-size: 13px;
  font-size: 1.3rem;
  line-height: 24px;
  line-height: 2.4rem;
  letter-spacing: 0.1px;
  letter-spacing: 0.01rem;
  font-weight: 400;
  color: #212121;
  text-transform: inherit;
}
.body-1 {
  font-size: 13px;
  font-size: 1.3rem;
  line-height: 20px;
  line-height: 2rem;
  letter-spacing: 0.1px;
  letter-spacing: 0.01rem;
  font-weight: 300;
  color: #212121;
  text-transform: inherit;
}
.caption {
  font-size: 12px;
  font-size: 1.2rem;
  line-height: 20px;
  line-height: 2rem;
  letter-spacing: 0.2px;
  letter-spacing: 0.02rem;
  font-weight: 300;
  color: #757575;
  text-transform: inherit;
}
.label {
  font-size: 12px;
  font-size: 1.2rem;
  line-height: 20px;
  line-height: 2rem;
  letter-spacing: 0.1px;
  letter-spacing: 0.01rem;
  font-weight: 300;
  color: #212121;
  text-transform: inherit;
}
.menu {
  font-size: 13px;
  font-size: 1.3rem;
  line-height: 20px;
  line-height: 2rem;
  letter-spacing: 0.1px;
  letter-spacing: 0.01rem;
  font-weight: 400;
  color: #212121;
  text-transform: inherit;
}
.button {
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 20px;
  line-height: 2rem;
  letter-spacing: 0.1px;
  letter-spacing: 0.01rem;
  font-weight: 400;
  color: #212121;
  text-transform: uppercase;
}
@media only screen and (max-width: 960px) {
  .subhead-2 {
    font-size: 16px;
    font-size: 1.6rem;
  }
  .subhead-1 {
    font-size: 16px;
    font-size: 1.6rem;
  }
  .body-2 {
    font-size: 14px;
    font-size: 1.4rem;
  }
  .body-1 {
    font-size: 14px;
    font-size: 1.4rem;
  }
  .menu {
    font-size: 14px;
    font-size: 1.4rem;
  }
}
.display-4,
.display-3,
.display-2,
.display-1 {
  margin: 0 0 14px 0;
  margin-bottom: 1.4rem;
}
.headline,
.title,
.subhead-2,
.subhead-1,
.body-2,
.body-1,
.caption,
.label,
.menu,
.button {
  margin: 0 0 10px 0;
  margin-bottom: 1rem;
}
...
```

And add the code below to apps/ourwebsite1_com-www/client1/src/app/products/products-viewer/products-viewer.component.ts:

```javascript
...
import { Component, OnInit, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ProductsListComponent } from '../shared/products-list/products-list.component';

@Component({
  selector: 'app-products-viewer',
  templateUrl: './products-viewer.component.html',
  styleUrls: ['./products-viewer.component.scss'],
	providers: [ ProductsService ]  
})
export class ProductsViewerComponent implements OnInit {

  count: number = 0;
  offset: number = 0;
  limit: number = 2; // choose an appropriate number
	products: Product[];
  loading: boolean = false;
  failed: boolean = false;

  constructor(
		private router: Router,
		private route: ActivatedRoute,    
		private productsService: ProductsService
  ) { }

  ngOnInit() {
		let observable = this.route.params
		  .map(params => params['nr'])
			.map(pageNr => (pageNr - 1) * this.limit);
		observable.subscribe(offset => this.offset = offset);
		observable.share().subscribe(offset => this.getAll(offset, this.limit));
  }

	getAll(offset: number, limit: number) {
	  console.log("getAll - offset = ", offset, " limit = ", limit);
		this.products = [];
		this.loading = true;
		this.failed = false;
		this.productsService.getAll(offset, limit).subscribe(result => {
			//this.products = result.products;
			//this.count = result.count;
	    console.log("getAll - result = ", result);
	    this.products = result['products'];
	    this.count = result['count'];
	    console.log("getAll - this.products = ", result['products']);
			this.loading = false;
		}, () => {
			this.loading = false;
			this.failed = true;
		});
	}

	viewProduct(productId: number) {
		this.router.navigate(['product', productId]);
	}

	editProduct(productId: number) {
		this.router.navigate(['product', productId, 'edit']);
	}

  onPageChange(offset) {
    this.offset = offset;
    this.router.navigate(['/page', (offset / this.limit) + 1]);
  }

}
```

Add the products viewer to the routing, by putting the following code in apps/ourwebsite1_com-www/client1/src/app/app-routing.module.ts:

```javascript
...
import { ProductsViewerComponent } from './products/products-viewer/products-viewer.component';
...
const routes: Routes = [
  ...
  { path: 'products', component: ProductsViewerComponent } 
  ...
];
...
```

Moreover, to be able to navigate to the products (viewer) page, add a menu option in apps/ourwebsite1_com-www/client1/src/app/app.component.html:

```javascript
...
    <md-nav-list>  
        ...
        <a class="sidenav-anchor" md-list-item="" md-ripple="" role="listitem" routerlinkactive="active" href="/products">
          <div class="md-list-item">
            <div class="md-list-text"></div>
            <md-icon role="img" class="material-icons" aria-label="apps">apps</md-icon>
            <span class="sidenav-item-name fade-in-on-icon-sidenav">Products</span>
            <span fxflex="" style="flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;"></span>
          </div>
          <div class="md-ripple-background"></div>
        </a>
        ...
    </md-nav-list>  
...
```

Finally, when running below command and navigating in the web browser to http://localhost:4200 and opening the sidebar menu for 'products', you should be welcomed on the products page by: "products-list works!"

```javascript
ng serve
```

#Products List

// to be continued...


//***************************************** NOTE ***********************************
//
//  THERE IS A NEW VERSION OF ANGULAR-CLI
//
//  INSTALL AS FOLLOWS:

```javascript
npm uninstall -g angular-cli @angular/cli
npm cache clean
npm install -g @angular/cli@latest
```
//  NEXT TIME YOU RUN: ng serve YOU WILL BE PROMPTED WITH:

You are running version 6.2.1 of Node, which will not be supported in future
versions of the CLI. The official Node version that will be supported is 6.9 and greater.

To disable this warning use "ng set --global warnings.nodeDeprecation=false".The package "angular-cli" has been renamed to "@angular/
cli". The old package will be deprecated soon.

Please take the following steps to avoid issues:

```javascript
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
```

Update to the latest Node.js version, using the helper 'n' on Linux or Mac:

[For windows, just download the installer from nodejs.org]

```javascript
node -v
npm cache clean -f
npm install -g n
n stable
node -v
```

// FOLLOW ABOVE INSTRUCTIONS
//
//**********************************************************************************

#TotalJS

To start the TotalJS server first navigate to the website folder (e.g. ourwebsite1_com-www), then run the following command (you can use the default port 8000, or append a port of your choice as demonstrated here):

```javascript
node server.js 8001

====================================================
PID         : 7288
Node.js     : v6.2.1
Total.js    : v2.4.0
OS          : win32 10.0.14393
====================================================
Name        : Total.js
Version     : 1.0.0
Author      : Your company name
Date        : 2017-03-03 19:36:42
Mode        : debug
====================================================

http://127.0.0.1:8001/
```

Now you can connect to the REST API with:

```javascript
http://localhost:8001/api/
```

NOTE: Do not forget to run ```ng build``` inside the /client1 directory to have the latest version of the Angular app.

//***************************************** NOTE ***********************************
//
//  THERE IS A NEW VERSION OF ANGULAR: version 4.0.0
//
//  See also http://angularjs.blogspot.nl/2017/03/angular-400-now-available.html
//
//  UNTIL angular/material AND angular-google-maps ARE COMPATIBLE WITH ANGULAR 4
//  THESE APP'S (client1 and client2) ARE NOT UPDATED
//
//  UPDATE: @angular/material@2.0.0-alpha.9-3 WORKS WITH ANGULAR 4.0.0
//
//  For comparison:
//
//  A build for production of client2 with Angular 2 has the following sizes:
//
```javascript
Hash: 9c6acf39a2f36122ac00
Time: 114562ms
chunk    {0} main.3fd43b40699bcf6f75fb.bundle.js (main) 2.43 MB {3} [initial] [rendered]
chunk    {1} scripts.8913257eeea96dbd8c80.bundle.js (scripts) 946 bytes {4} [initial] [rendered]
chunk    {2} styles.723e921d743c2a11e2bd.bundle.css (styles) 69 bytes {4} [initial] [rendered]
chunk    {3} vendor.36b1466bd789b10e59f7.bundle.js (vendor) 3.19 MB [initial] [rendered]
chunk    {4} inline.cc96ae7c6eed3bc11fc0.bundle.js (inline) 0 bytes [entry] [rendered]
```
//
// A build for production of client2 with Angular 4.0.0 has the following sizes:
//
```javascript

```
//
//  That is a reduction in size of: on average
//
//  INSTALL AS FOLLOWS:
//
#Updating to 4.0.0

Updating to 4 is as easy as updating your Angular dependencies to the latest version, and double checking if you want animations. This will work for most use cases.

##On Linux/Mac: 

```javascript
npm install @angular/{common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router,animations}@latest typescript@latest --save 
```

##On Windows:

```javascript
npm install @angular/common@latest @angular/compiler@latest @angular/compiler-cli@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest @angular/animations@latest typescript@latest --save
```

Then run whatever ```ng serve``` or ```npm start``` command you normally use, and everything should work.

If you rely on Animations, import the new BrowserAnimationsModule from @angular/platform-browser/animations in your root NgModule. Without this, your code will compile and run, but animations will trigger an error. 

Imports from @angular/core were deprecated, use imports from the new package import { trigger, state, style, transition, animate } from '@angular/animations';.

We are beginning work on an interactive [Angular Update Guide](https://angular-update-guide.firebaseapp.com/) if you would like to see more information about making any needed changes to your application.
//
// FOLLOW ABOVE INSTRUCTIONS
//
//**********************************************************************************

# Keeping a fork up to date

See also [https://gist.github.com/CristinaSolana/1885435](https://gist.github.com/CristinaSolana/1885435)

## 1. Clone your fork:

```javascript
    git clone git@github.com:YOUR-USERNAME/YOUR-FORKED-REPO.git
```

## 2. Add remote from original repository in your forked repository: 

```javascript
    cd into/cloned/fork-repo
    git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git
    git fetch upstream
```

where ORIGINAL-DEV-USERNAME = willem-vanheemstrasystems and REPO-YOU-FORKED-FROM.git = meetup-angular2-firebase.git

## 3. Updating your fork from original repo to keep up with their changes:

```javascript
    git pull upstream master
```
