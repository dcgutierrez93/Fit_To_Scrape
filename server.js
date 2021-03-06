// =============================================================================

// Dependencies

// =============================================================================
var express           = require('express');
var mongoose          = require('mongoose');
var expressHandlebars = require('express-handlebars');
var bodyParser        = require('body-parser');

// Set up Port
var PORT = process.env.PORT || 3000;

var app = express();

// Set up Express Router
var router = express.Router();

// Require routes file
require('./config/routes')(router);

// Designate our public folder as a static directory
app.use(express.static(__dirname + "/public"));

// Connect Handlebars to our Express app
app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Use bodyParser in our app
app.use(bodyParser.urlencoded({
  extended: false
}));

// Have every request go through our router middleware
app.use(router);

// Use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://heroku_s7t6qg0m:vd3gd3qui9t17u3ucj2bbock1k@ds249605.mlab.com:49605/heroku_s7t6qg0m";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});
