// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8000;

// Requiring our models for syncing
var db = require("./models");

// Setting up Handlebars with the server.

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs ({ defaultLayout: "main" })); //app listening to the handlebars engine
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Routes =============================================================

require("./routes/html-routes.js")(app);
require("./routes/location-api-routes.js")(app);
require("./routes/comment-api-routes.js")(app);
require("./routes/difficulty-api-routes.js")(app);
require("./routes/rental-api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync( {force:false} ).then(function() {
// db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
