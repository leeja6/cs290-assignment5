var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', 7371);

app.get('/',function(req,res){
  res.setHeader('Content-type','text/html');
  var response = '<h1>GET Request Received</h1>'
  response += '<table style="border: 1px solid black; border-collapse: collapse"><caption>GET Parameters</caption><tr><th style = "border: 1px solid black">Parameter Name</th><th style = "border: 1px solid black">Value</th></tr>'
  for (var p in req.query) {
      response += '<tr><td style = "border: 1px solid black">' + p + '</td><td style = "border: 1px solid black">' + req.query[p] + '</td></tr>'
  }
  response += '</table>'
  res.send(response);
});

app.post('/',function(req,res){
  res.setHeader('Content-type','text/html');
  var response = '<h1>POST Request Received</h1>'
  response += '<table style="border: 1px solid black; border-collapse: collapse"><caption>POST Parameters</caption><tr><th style = "border: 1px solid black">Parameter Name</th><th style = "border: 1px solid black">Value</th></tr>'
  for (var p in req.query) {
      response += '<tr><td style = "border: 1px solid black">' + p + '</td><td style = "border: 1px solid black">' + req.query[p] + '</td></tr>'
  }
  response += '</table><br>'
  response += '<table style="border: 1px solid black; border-collapse: collapse"><caption>POST Properties</caption><tr><th style = "border: 1px solid black">Property Name</th><th style = "border: 1px solid black">Value</th></tr>'
  for (var p in req.body) {
      response += '<tr><td style = "border: 1px solid black">' + p + '</td><td style = "border: 1px solid black">' + req.body[p] + '</td></tr>'
  }
  response += '</table>'
  res.send(response);
});

app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');s
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
