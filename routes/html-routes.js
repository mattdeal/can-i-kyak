//Dependencies
var path = require("path");
var models = require("../models");

//Routes
module.exports = function(app) {

  // default to home
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/view.html"));
    //todo: could res.render() work here?  - insert map contents into main template
  });

  // route for creating a new location
  app.get("/add", function(req, res) {
    //todo: could res.render() work here?  - insert add contents into main template
    res.sendFile(path.join(__dirname, "/../public/addition.html"));
  });
  
  // route to lookup locations by state
  app.get("/locations/:state", function(req, res) {
    //todo: db queries
    res.render("results", {});
  });

  // route to lookup a single location 
  app.get("/location/:id", function(req, res) {
    //todo: db queries
    res.render("location", {});
  });

};//end module.exports
