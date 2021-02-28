var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', 3000);

app.get('/',function(req,res){
  res.setHeader('Content-type','text/html');
  var response = '<h1>GET Request Received</h1>'
  response += '<table><caption>GET Parameters</caption><tr><th>Parameter Name</th><th>Value</th></tr>'
  for (var p in req.query) {
      response += '<tr><td>' + p + '</td><td>' + req.query[p] + '</td></tr>'
  }
  response += '</table>'
  res.send(response);
});

app.post('/',function(req,res){
  res.setHeader('Content-type','text/html');
  var response = '<h1>POST Request Received</h1>'
  response += '<table><caption>POST Parameters</caption><tr><th>Parameter Name</th><th>Value</th></tr>'
  for (var p in req.query) {
      response += '<tr><td>' + p + '</td><td>' + req.query[p] + '</td></tr>'
  }
  response += '</table><br>'
  response += '<table><caption>POST Properties</caption><tr><th>Property Name</th><th>Value</th></tr>'
  for (var p in req.body) {
      response += '<tr><td>' + p + '</td><td>' + req.body[p] + '</td></tr>'
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
