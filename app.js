var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Usamalaikum!');
});
app.listen(5000, function () {
  console.log('Ahmeds app listening on port 5000!');
});