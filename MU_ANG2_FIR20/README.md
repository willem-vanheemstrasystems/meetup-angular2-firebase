###README.md

Based on 'Creating My First Web App with Angular 2 in Eclipse' at https://www.genuitec.com/first-angular-2-app/

Angular 2 is a framework for building desktop and mobile web applications. After hearing rave reviews about Angular 2, I decided to check it out and take my first steps into modern web development. In this article, I’ll show you how to create a simple master-details application using Angular 2, TypeScript, Angular CLI and Eclipse Java EE.

#Tools and Prerequisites

- Angular IDE—Optionally install this IDE to automate setup of the development environment including Node, NPM, Angular CLI and TypeScript + Angular 2 intelligence.
(https://www.genuitec.com/products/angular-ide/)

- Node.js and NPM—You will need to install this open-source JavaScript runtime environment and its package manager. 
(http://blog.npmjs.org/post/85484771375/how-to-install-npm)

- Angular CLI—Install this handy command line interface for Angular.
(https://cli.angular.io/)

- JDK and Eclipse for Java EE Developers—The Java EE IDE and tools I used in this example.
(https://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/neonr)

- TypeScript plugin for Eclipse—A typed superset of JavaScript that compiles to plain JavaScript.
(https://marketplace.eclipse.org/content/typescript)

- Terminal plugin for Eclipse—A fully working command-line Terminal inside Eclipse.
(https://marketplace.eclipse.org/content/tm-terminal)

- Basic TypeScript, HTML and Eclipse usage knowledge

##The Goal

Let’s create a simple app containing a vehicle list with the ability to edit vehicle properties. I’ve included a sample project that you can refer to. 

###Getting Started in Eclipse 

From the Eclipse menu, choose File>New>Dynamic Web Project; or right click in Project/Package Explorer and choose New>Dynamic Web Project.

Type 'MU_ANG2_FIR20' for the project name and click Finish—that’s all you need here.

###Angular CLI Comes to the Scene

Angular CLI is a command-line tool that allows you to create a working Angular 2 application out-of-the-box without a massive amount of manual work—and also allows you to generate Angular 2 components, services, etc. in the same way. Let’s try it! Right-click the newly created project and select Show in>Terminal.

From the Terminal view, type ```ng init```. After the process finishes, refresh the project in Eclipse—the src folder is updated with an app folder and several files; index.html (well-known to web developers) and main.ts among them. Is this really all that’s required to get an Angular 2 Hello World application? Yes! 

Open the project in Terminal view and type ```npm start```. After a short time, you’ll see output like:

```javascript
Serving on http://localhost:4200/
Build successful - 17270ms.
```

Open your browser (I use Chrome for testing) and type the given URL (http://localhost:4200/). You’ll see a “Loading…” message and then “App works!”. See, it actually works!

###Model

Let’s go ahead and create a model for our app. This model will be pretty simple. Create a package ```app.model``` in your src folder, and in it create file ```vehicle.ts``` with the following contents:

```javascript
export class Vehicle {
    id;
    name;
    type;
    mass;
}
```

The class contains only four fields describing some vehicle.




.. continue reading the reference at the top of this README file, for more instructions.