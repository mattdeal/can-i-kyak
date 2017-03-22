//Dependencies
var path = require("path");

//Routes
module.exports = function(app) {

  // default to home
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/view.html"));
  });

};//end module.exports
