exports.install = function() {
  //F.route('/'); // looks for index.html in views directory

	// Common routes
	F.route('/',        view_login, ['unauthorize']);
	F.route('/*',      'index',     ['authorize']);
	F.route('/logoff/', logoff,     ['authorize']);

	F.route('/client1', view_client1);
	F.route('/client2', view_client2);  
	F.route('/client3', view_client3);  	

	// Localization for client-side templates
	F.localize('/templates/*.html', ['compress']);

	// Photo handling
	F.file('/photos/*.jpg', photo);

};

// Returns login form or can perform auto-login according to `token` in query string
function view_login() {
	var self = this;

	if (!self.query.token) {
		self.view('login');
		return;
	}

	GETSCHEMA('Login').workflow2('token', self, function(err, response) {
		console.log("default.js - function view_login GETSCHEMA('Login'), err = ", err, ", response = ", response);
		if (err)
			return self.view('login');
		self.redirect('/account/?password=1');
	});
}

// Performs sign out
function logoff() {
	var self = this;
	self.cookie(CONFIG('cookie'), '', '-1 day');
	self.user.logoff();
	self.redirect('/');
}

function view_client1() {
  console.log("view_client1 called");
  var self = this;
  self.view('client1');
}

function view_client2() {
  console.log("view_client2 called");
  var self = this;
  self.view('client2');
}

function view_client3() {
  console.log("view_client3 called");
  var self = this;
  self.view('client3');
}

// Process user's photos
function photo(req, res) {
	var id = req.split[2];
	var path = F.path.public(req.url.substring(1));

	var index = path.lastIndexOf('?');
	if (index !== -1)
		path = path.substring(0, index);

	F.path.exists(path, function(e) {
		if (e)
			return res.file(path);
		res.file(F.path.public('img/face.jpg'));
	});
}
