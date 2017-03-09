exports.install = function() {
    F.route('/'); // looks for index.html in views directory
	F.route('/client1', view_client1);
	F.route('/client2', view_client2);    
};

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