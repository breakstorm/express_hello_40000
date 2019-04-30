var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("Hello world");
});
app.listen(40000, function() {
  console.log('example app listening on port 40000');
})