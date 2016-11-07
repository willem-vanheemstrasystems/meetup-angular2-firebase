##README.md

#Meetup - Angular 2 Firebase 01

Based on 'Deploy Angular 2 CLI Apps to Firebase' at https://coryrylan.com/blog/deploy-angular-2-cli-apps-to-firebase

In this post we're going to cover how to get an Angular 2 application up and running and then deploy it to Firebase. First lets cover how to use the Angular CLI to help bootstrap our application’s build process.

##Angular 2 CLI

The Angular 2 CLI is an officially supported project by the Angular team. You can find more information at [https://cli.angular.io](https://cli.angular.io/). First we will install the Angular CLI tool. To install we install via NPM running the following command: ```npm install angular-cli -g```. This will install the CLI globally to our machine to help us create new Angular projects.

Once installed we can create a new Angular 2 app by running the following command: ```ng new my-cool-app```. Next open your app in your favorite editor (here: Visual Studio Code).

You should see something similar to this (as of CLI beta 10):

```javascript
MY-COOL-APP
  > config
  > e2e
  > node_modules
  > public
  > src
  > typings
  .editorconfig
  .gitignore
  angular-cli.json
  angular-cli-build.js
  package.json
  README.md
  tslint.json
  typings.json
```