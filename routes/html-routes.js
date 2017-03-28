//Dependencies
var path = require("path");
var models = require("../models");

//Routes
module.exports = function(app) {

  // default to home
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/view.html"));
  }); //end app.get

  // route for creating a new location
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/addition.html"));
  });

  //page when state is clicked
  app.get("/locations/:state", function(req, res) {

    if (req.params.state) {
      models.Location.findAll({
        where: {
          state: req.params.state
        }
      }).then(function(modelsLocation) {
        res.render("index", {locations: modelsLocation});
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
        res.render("index", {locations: modelsLocation});
      }) //end then.function
    }
  }); //end app.get

    //todo: could res.render() work here?  - insert map contents into main template
  });

  // route for creating a new location
  app.get("/add", function(req, res) {
    //todo: could res.render() work here?  - insert add contents into main template
    console.log('in /add');

    res.sendFile(path.join(__dirname, "/../public/addition.html"));
  });

  // route to lookup locations by state
  app.get("/locations/:state", function(req, res) {
    console.log('in /locations/state');
    
    if (req.params.state) {
      models.Location.findAll({
        where: {
          state: req.params.state
        }
      }).then(function(modelsLocation) {
        console.log(modelsLocation);

        res.render("results", { locations: modelsLocation });
      }); //then function
    }

    //todo: db queries
    // res.render("results", {});
  });

  // route to lookup a single location
  app.get("/location/:id", function(req, res) {
    console.log('in /location/id');

    //todo: db queries
    res.render("location", {});
  });

};//end module.exports
