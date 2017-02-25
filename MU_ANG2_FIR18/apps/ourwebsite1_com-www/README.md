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
directory-public-virtual: /client1/dist/
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

8. Start the server from the root directory of project

```javascript
cd /apps/ourwebsite1_com-www
node server
```

9. Visit http://localhost:8000

That’s all – Now You can create Amazing and Professional SPA applications!

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