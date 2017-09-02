const express = require('express')
const app = express()
const necesidades = require('./necesidades')
const path = require('path')
const api = require('./api')

function getFilePath(file) {
  return path.join(__dirname + '/files/' + file)
}

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(getFilePath('index.html'));
});

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.get('/api/necesidades', function (req, res) {
  res.json(necesidades)
})

app.post('/api/necesidades', function (req, res) {
  console.log(req.params);
  res.json(necesidades)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
