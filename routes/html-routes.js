//Dependencies
var path = require("path");
var models = require("../models");
<<<<<<< HEAD

=======
>>>>>>> 87cc65c6bcea5bbb2ea12f4352983a2b2f2c7052

//Routes
module.exports = function(app) {

  // default to home
  app.get("/", function(req, res) {
    console.log('in /');
    
    res.sendFile(path.join(__dirname, "/../public/view.html"));
<<<<<<< HEAD
  }); //end app.get

  //page when state is clicked
  app.get("/locations/:state", function(req, res) {

    if (req.params.state) {
      models.Location.findAll({
        where: {
          state: req.params.state
        }
      }).then(function(modelsLocation) {
        res.render("test", {locations: modelsLocation});
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
        res.render("test", {locations: modelsLocation});
      }) //end then.function
    }
  }); //end app.get
=======
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
    
    //todo: db queries
    res.render("results", {});
  });

  // route to lookup a single location 
  app.get("/location/:id", function(req, res) {
    console.log('in /location/id');
    
    //todo: db queries
    res.render("location", {});
  });
>>>>>>> 87cc65c6bcea5bbb2ea12f4352983a2b2f2c7052

};//end module.exports
