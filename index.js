var express = require('express');
var bodyParser = require("body-parser")

var api_key = 'mailgun key'; // set key 
var domain = 'mailgun register domain'; //set domain
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var app = express();
var from_name="Tristup Ghosh"; //change the name 
var from_email="Mailgun Register Email ID"; // set the email id is already register to mailgun

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/testMail', function (req, res) {


	var data = {
	  from: from_name+' <'+from_email+'>',
	  to: req.body.mail,
	  subject: req.body.subject,
	  text: req.body.msg
	};
	mailgun.messages().send(data, function (error, body) {
	  console.log(body);
	});

});
app.listen(8888, function () {
  console.log('Example app listening on port 8888!');
});

