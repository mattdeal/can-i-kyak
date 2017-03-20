//todo: api routes

//Requiring models
var models = require("../models");

module.exports = function(app) {

  // for testing purposes
  app.post("/info", function(req,res) {
    var test = "daniel";
    res.json(test);
  });//end app.post

  //todo: fill in these functions

  //todo: get all difficulties by googleId
  app.get("/difficulty/:googleId", function(req, res) {

  });

  //todo: get all comments by googleId
  app.get("/comment/:googleId", function(req, res) {

  });

  //todo: get all rentals by googleId
  app.get("/rental/:googleId", function(req, res) {

  });

  //todo: create difficulty
  app.post("/difficulty", function(req, res) {

  });

  //todo: create comment
  app.post("/comment", function(req, res) {

  });

  //todo: create rental
  app.post("/rental", function(req, res) {

  });

};//end module.exports
