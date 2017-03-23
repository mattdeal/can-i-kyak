

//Requiring models
var models = require("../models");

// Routes
module.exports = function(app) {

  

  //To get all difficulties by googleId
  app.get("/api/difficulty/:googleId", function(req, res) {

    if (req.params.googleId) {
      models.Difficulty.findAll({
        where: {
          googleId: req.params.googleId
        }
      }).then(function(modelsDifficulty) {
        res.json(modelsDifficulty);
      });
    }
  });

  //To get all comments by googleId
  app.get("/api/comment/:googleId", function(req, res) {

    if (req.params.googleId) {
      models.Comment.findAll({
        where: {
          googleId: req.params.googleId
        }
      }).then(function(modelsComment) {
        res.json(modelsComment);
      });
    }
  });

  //To get all rentals by googleId
  app.get("/api/rental/:googleId", function(req, res) {

    if (req.params.googleId) {
      models.Rental.findAll({
        where: {
          googleId: req.params.googleId
        }
      }).then(function(modelsRental) {
        res.json(modelsRental);
      });
    }
  });

  //To create difficulty
  app.post("/api/difficulty", function(req, res) {

    console.log("Models Data");
    console.log(req.body);
    models.Difficulty.create({
      googleId: req.body.googleId,
      difficulty: req.body.difficulty
    })
    .then(function(modelsDifficulty) {
      res.json(modelsDifficulty);
    });

  });

  //To create comment
  app.post("/api/comment", function(req, res) {

    console.log("Models Data");
    console.log(req.body);
    models.Comment.create({
      googleId: req.body.googleId,
      comment: req.body.comment
    })
    .then(function(modelsComment) {
      res.json(modelsComment);
    });
  });

  //To create rental
  app.post("/api/rental", function(req, res) {

    console.log("Models Data");
    console.log(req.body);
    models.Rental.create({
      googleId: req.body.googleId,
      rental: req.body.rental
    })
    .then(function(modelsRental) {
      res.json(modelsRental);
    });
  });

};//end module.exports
