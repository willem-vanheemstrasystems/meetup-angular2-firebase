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