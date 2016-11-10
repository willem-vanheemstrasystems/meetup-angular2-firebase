##README.md

#Meetup - Angular 2 Firebase 06

Based on 'Deploy Angular 2 CLI Apps to Firebase' at https://coryrylan.com/blog/deploy-angular-2-cli-apps-to-firebase

Based on 'Simple app that consumes Angular Material 2 components' at https://github.com/jelbourn/material2-app

See an example at [https://material2-app.firebaseapp.com/](https://material2-app.firebaseapp.com/)

In this post we're going to cover how to get an Angular 2 application up and running and deploy it to Firebase. First lets cover how to use the Angular CLI to help bootstrap our application’s build process.

##Angular 2 CLI

The Angular 2 CLI is an officially supported project by the Angular team. You can find more information at [https://cli.angular.io](https://cli.angular.io/). First we will install the Angular CLI tool. To install we install via NPM running the following command: ```npm install angular-cli -g```. This will install the CLI globally to our machine to help us create new Angular projects.

Note: [Angular CLI Reference](https://cli.angular.io/reference.pdf)

Once installed we can create a new Angular 2 app by running the following command: ```ng new my-material-design-app```. Next open your app in your favorite editor (here: Visual Studio Code).

You should see something similar to this (as of CLI beta 10):

```javascript
my-material-design-app
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
From inside the my-cool-app folder, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You should see in your browser:

***app works!***

Inside my-material-design-app/src/app/app.component.ts change the following line of code from:

```javascript
  title = 'app works!';
```

to:

```javascript
  title = 'my material design app works!';
```

When saving the file, witness in the terminal window that the source code is automatically re-processed and the text in the browser now reads:

***my material design app works!***

### Running unit tests

From inside the my-cool-app folder, run ```ng test``` to execute the unit tests via [Karma](https://karma-runner.github.io). The test should fail if the title on the page is ***not*** 'app works!'

###Build for Production

I won't cover all the CLI commands in this post. I recommend checking out the [CLI Docs](https://cli.angular.io/). We will just start with running ```ng build --prod```. This command runs a build for our project but with additional production optimizations such as bundling and minification. Now your project should have a dist/ directory. This is where all of our compiled ready to deploy code is located every time we run a build.

##Material Design

---


INCLUDE MATERIAL DESIGN 2 INSTRUCTIONS HERE

###Install Angular Material components

```javascript
npm install --save @angular/material
```

###Import the Angular Material NgModule

src/app/app.module.ts

```javascript
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

###Include the core and theme styles:

This is required to apply all of the core and theme styles to your application. You can either use a pre-built theme, or define your own custom theme.

See the [theming guide](https://github.com/angular/material2/blob/master/docs/theming.md) for instructions.

####Using a pre-built theme

Angular Material comes prepackaged with several pre-built theme css files. These theme files also include all of the styles for core (styles common to all components), so you only have to include a single css file for Angular Material in your app.

You can include a theme file directly into your application from @angular/material/core/theming/prebuilt

If you're using Angular CLI, this is as simple as including one line in your src/styles.css file:

```javascript
@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';
```

Alternatively, you can just reference the file directly. This would look something like

```javascript
<link href="node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css" rel="stylesheet">
```

The actual path will depend on your server setup.

You can also concatenate the file with the rest of your application's css.

####Defining a custom theme

When you want more customization than a pre-built theme offers, you can create your own theme file.

A theme file is a simple Sass file that defines your palettes and passes them to mixins that output the corresponding styles. A typical theme file will look something like this (e.g. src/candy-app-theme.scss):

```javascript
@import '~@angular/material/core/theming/all-theme';
// Plus imports for other components in your app.

// Include the base styles for Angular Material core. We include this here so that you only
// have to load a single css file for Angular Material in your app.
@include md-core();

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue.
$candy-app-primary: md-palette($md-indigo);
$candy-app-accent:  md-palette($md-pink, A200, A100, A400);

// The warn palette is optional (defaults to red).
$candy-app-warn:    md-palette($md-red);

// Create the theme object (a Sass map containing all of the palettes).
$candy-app-theme: md-light-theme($candy-app-primary, $candy-app-accent, $candy-app-warn);

// Include theme styles for core and each component used in your app.
// Alternatively, you can import and @include the theme mixins for each component
// that you are using.
@include angular-material-theme($candy-app-theme);
```

You only need this single Sass file; you do not need to use Sass to style the rest of your app.

If you are using the Angular CLI, support for compiling Sass to css is built-in; you only have to add a new entry to the "styles" list in angular-cli.json pointing to the theme file (e.g., candy-app-theme.scss).

```javascript
...
  "styles": [
    "styles.css",
    "candy-app-theme.scss"
  ],
...
```

If you're not using the Angular CLI, you can use any existing Sass tooling to build the file (such as gulp-sass or grunt-sass). The simplest approach is to use the node-sass CLI; you simply run:

```javascript
node-sass src/unicorn-app-theme.scss dist/unicorn-app-theme.css
```

and then include the output file in your application.

The theme file can be concatenated and minified with the rest of the application's css.

####Multiple themes

You can extend the example above to define a second (or third or fourth) theme that is gated by some selector. For example, we could append the following to the example above to define a secondary dark theme:

```javascript
.unicorn-dark-theme {
  $dark-primary: md-palette($md-blue-grey);
  $dark-accent:  md-palette($md-amber, A200, A100, A400);
  $dark-warn:    md-palette($md-deep-orange);

  $dark-theme: md-dark-theme($dark-primary, $dark-accent, $dark-warn);

  @include angular-material-theme($dark-theme);   
}
```

With this, any element inside of a parent with the unicorn-dark-theme class will use this dark theme.
Theming your own components

For more details about theming your own components, see [theming-your-components.md](https://github.com/angular/material2/blob/master/docs/theming-your-components.md)

####Additional setup for md-slide-toggle and md-slider:

The slide-toggle and slider components have a dependency on [HammerJS](http://hammerjs.github.io/).

Add HammerJS to your application via npm, a CDN (such as the Google CDN), or served directly from your app.

####[Optional] Using Material Design icons with md-icon:

If you want to use Material Design icons in addition to Angular Material components, load the Material Design font in your index.html.

md-icon supports any font icons or svg icons, so this is only one option for an icon source.

src/index.html

```javascript
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

more ...




---

##Firebase CLI

So now that we have learned how to use the Angular 2 CLI to package up our app for deployment we will use the Firebase CLI to create a live hosting project to deploy to.

First you will want to log into Firebase and go to [https://console.firebase.google.com/](https://console.firebase.google.com/). Once in the console select “Create New Project”. For our project we will name it “my-material-design-app”.

- screenshot goes here - 

Now that we have a project created lets go back to the command line. Next we install the Firebase CLI via NPM. In your console run the following command: ```npm install -g firebase-tools```. Once installed run ```firebase login --interactive``` to login to your Firebase account.

##Deployment Setup

Now that Firebase CLI is installed, at the root of your Angular CLI project run ```firebase init```. This will walk through the steps of setting up your app to be deployable to Firebase Hosting.

- screenshot goes here - 

Select the Hosting option in the command line. Next select our project ```my-material-design-app``` that we created earlier. Next it will ask what file to use for the Firebase real time database rules. For now you can just use the default.

***The next step is important!*** The cli will ask what folder to use as the public directory. For our project we want to use the ```dist/``` directory instead of Firebase’s default ```public/``` directory. So type in the command line ```dist```.

Next it will ask if this is a single page app and if it should rewrite all urls to ```index.html```. For our app select ***yes***. If it asks to over write the ```index.html``` file select ***no***. Now your app is ready for deployment! In the root of your app you should have a new file ```firebase.json``` file that helps the Firebase CLI know how to deploy our application. Now run ```firebase deploy```. Firebase will provide domain that you can configure to a custom domain in the console. Now if we open our browser we will see something similar to the following:

- screenshot goes here -

Now that we have created an Angular 2 project and deployed it to Firebase I recommend digging into more of the [Angular 2 CLI](https://cli.angular.io/) and the [Firebase Features](https://firebase.google.com/features/). A few things to note, the CLI at the time of this writing is in Beta 10. A large change is in the works for Beta 11 to switch the underlying build system to [Webpack](https://webpack.github.io/). This post will be updated with those changes. Also in future versions of the Angular CLI will possibly have Firebase integration and deployment built in. Also as of Beta 10 of the Angular CLI production build do not have a versioning system to bust browser cache. This should be addressed in upcoming versions.
