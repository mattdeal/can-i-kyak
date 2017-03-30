

// Requiring models
var models = require("../models");

// Routes
module.exports = function(app) {

  // Get all comments by locationId
  app.get("/api/comment/:locationId", function(req, res) {

    if (req.params.locationId) {
      models.Comment.findAll({
        where: {
          locationId: req.params.locationId
        }
      }).then(function(modelsComment) {
        res.json(modelsComment);
      });
    }
  });

  // Create  new comment in the database
  app.post("/api/comment", function(req, res) {

    console.log("Models Data");
    console.log(req.body);

    models.Comment.create({
      locationId: req.body.locationId,
      comment: req.body.comment
    })
    .then(function(modelsComment) {
      res.json(modelsComment);
    });
  });


  //console.log(modelsComment);
  //
  res.render("results", {comment: modelsComment});

};//end module.exports






