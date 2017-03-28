//Requiring models
var models = require("../models");

// Routes
module.exports = function(app) {

    app.post("/api/locations", function(req, res) {
        models.Location.create(req.body)
            .then(function(modelsLocation) {
                res.json(modelsLocation);
            });
    }); //end app.get

}; //end module.exports
