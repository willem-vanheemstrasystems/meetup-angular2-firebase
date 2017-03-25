// A simple authorization delegate
F.onAuthorize = function(req, res, flags, next) {
    //console.log("definitions/auth.js - F.onAuthorize called");
	var cookie = req.cookie(CONFIG('cookie'));
	//console.log("definitions/auth.js - F.onAuthorize, cookie = ", cookie);
	if (!cookie)
		return next(false);

	var user = F.decrypt(cookie);
	//console.log("definitions/auth.js - F.onAuthorize, user = ", user);
	if (!user || user.expire < F.datetime.getTime())
		return next(false);

	session = USERS.findItem('id', user.id);
	if (!session || session.blocked || session.resetcounter !== user.resetcounter)
		return next(false);

	session.datelogged = F.datetime;
	session.online = true;
	//console.log("definitions/auth.js - F.onAuthorize, session = ", session);
	next(true, session);
};

// Sets online=false for all users each 5 minute
F.on('service', function(interval) {
	if (interval % 5 !== 0)
		return;
	OPENPLATFORM.users.save();
	for (var i = 0, length = USERS.length; i < length; i++)
		USERS[i].online = false;
});