//Dependencies
var path = require("path");
var models = require("../models");


//Routes
module.exports = function(app) {

  // default to home
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/view.html"));
  });

  app.get("/locations/:state", function(req, res) {
    if (req.params.state) {
      models.Location.findAll({
        where: {
          state: req.params.state
        }
      }).then(function(modelsLocation) {
        // console.log(modelsLocation);
        // res.json(modelsLocation);

        // console.log(modelsLocation);
        //
        res.render("test", {locations: modelsLocation});
      });
    }
  }); //end app.get

};//end module.exports
