
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
//THIS WILL PARSE APPLICATION WWW-FORM-URLENCODED
app.use(bodyParser.urlencoded({ extended: true }));
//THIS WILL PARSE YOUR HTML BODY INTO A STRING 
app.use(bodyParser.text());
//THIS WILL PARSE VARIOUS CUSTOM JSON TYPES AS JSON
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
//EXPRESS TO SERVER STATIC FILES 
app.use('/assets', express.static(__dirname + '/app/public'));
//EXPRESS TO SERVE STATIC FILES
app.use(express.static(path.join(__dirname, '/public')));



// ROUTES =================================================================
// route files needed to map out the site
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);


//RUNS THE SERVER
//==============================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});
