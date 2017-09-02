const express = require('express')
const app = express()
var api = require('./api')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/api', api)

// app.get('/', function(request, response) {
//   response.render('pages/index');
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
