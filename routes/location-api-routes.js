//Requiring models
var models = require("../models");

// Routes
module.exports = function(app) {

  app.get("/api/locations/:state", function(req, res) {
    if (req.params.state) {
      models.Location.findAll({
        where: {
          state: req.params.state
        }
      }).then(function(modelsLocation) {
        // console.log(modelsLocation);
        // res.json(modelsLocation);

        // console.log(modelsLocation);
        res.render("location", modelsLocation);
      });
    }
  }); //end app.get

  //creates new place in database

  app.post("/api/location", function(req, res)  {

    models.Location.create({
      name: req.body.name,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      googleId: req.body.googleId,
      imageUrl:req.body.imageurl
    })
    .then(function(newPlace)  {
      res.json(newPlace)

    });

  });


  app.get("/api/location/:id", function(req, res)  {
    
    if (req.params.id) {
      models.Location.findOne ({
        where: {
          id: req.params.id
        }
      })
      .then(function(modelLocation)  {
      res.render("location", modelsLocation);

      });
    }

    
  });

}; //end module.exports
