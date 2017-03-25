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
        res.json(modelsLocation);
      });
    }
  }); //end app.get

}; //end module.exports