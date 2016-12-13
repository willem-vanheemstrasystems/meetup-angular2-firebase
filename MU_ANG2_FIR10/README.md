###README.md

#Meetup Angular 2 Firebase 010

Based on 'Editing TypeScript' at https://code.visualstudio.com/Docs/languages/typescript

##Installation

Install Visual Studio Code from https://code.visualstudio.com/

##Editing TypeScript

TypeScript is ***a typed superset of JavaScript*** that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components. A language specification can be found [here](https://github.com/Microsoft/TypeScript/tree/master/doc).

If you are looking for more introductory material, you might want to take a look at the [TypeScript Handbook](https://github.com/Microsoft/TypeScript-Handbook).

Enter one of the projects created during Meetup, via the Terminal (e.g. C:> cd Users/user/meetup/final-project) as an Administrator.

NOTE: Visual Studio Code's TypeScript support can operate in two different modes:

1) FileScope: Does not associate different files with one another (unless explicitely referenced).

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

