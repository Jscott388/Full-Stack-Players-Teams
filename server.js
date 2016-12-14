var express = require("express");
var app = express();
var PORT = 8000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// Static content
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

// MongoDB
require('./server/config/mongoose.js');

// Routes
require("./server/config/routes.js")(app);

app.listen(PORT, function(){
    console.log(`Running on ${PORT}`);
});


