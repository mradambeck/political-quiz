// SERVER-SIDE JAVASCRIPT
console.log('Sanity check: server.js reporting in.');

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads
app.use(bodyParser.json());

// serve jQuery and bootstrap from a local bower cache avoiding CDNs
app.use('/vendor', express.static(__dirname + '/bower_components'));

// set 'html' as the engine, using ejs's renderFile function
var ejs = require('ejs');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

var controllers = require('./controllers');

////////////
// ROUTES //
////////////

// JSON API Endpoints
app.get('/api/questions', controllers.questions.index);
app.get('/api/questions/:questionId', controllers.questions.show);


// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


////////////
// SERVER //
////////////

// listen on port 3000 - ARE YOU LISTENING TO ME???
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
