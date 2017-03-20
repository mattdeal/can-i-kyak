//todo: api routes

//Requiring models
var models = require("../models");

module.exports = function(app) {

  app.post("/info", function(req,res) {
    var test = "daniel";
    res.json(test);
  });//end app.post



};//end module.exports
