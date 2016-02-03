var data = require("../data.json");

exports.addFriend = function(req, res) {   
	var name = req.query.name;
	var desc = req.query.description;
	console.log(name + desc);

	var newFriend = {
		"name": name,
		"description": desc,
		"imageURL": "http://lorempixel.com/400/400/people"
	}

	res.render('add', newFriend);

	data["friends"].push(newFriend);
 }