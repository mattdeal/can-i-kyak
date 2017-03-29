//Dependencies
var path = require("path");
var models = require("../models");

//Routes
module.exports = function(app) {

  // default to home
  app.get("/", function(req, res) {
    res.render("map", {});
  }); //end app.get

  // route for creating a new location
  app.get("/add", function(req, res) {
    res.render("addition", {});
    // res.sendFile(path.join(__dirname, "/../public/addition.html"));
  });

  //page when state is clicked
  app.get("/locations/:state", function(req, res) {

    if (req.params.state) {
      models.Location.findAll({
        where: {
          state: req.params.state
        }
      }).then(function(modelsLocation) {
        res.render("results", {locations: modelsLocation});
      }); //then function
    }
  }); //end app.get

  //page when specific location is clicked
  app.get("/location/:id", function(req, res) {
    if (req.params.id) {
      models.Location.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(modelsLocation) {
        res.render("location", {modelsLocation});
      }) //end then.function
    }
  }); //end app.get
};//end module.exports
