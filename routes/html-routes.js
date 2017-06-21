// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    
    app.get("/", function(req, res) {
        db.Burger.findAll({
            raw: true,
            order: ['burger']
        }).then(function(dbBurger) {
            var hbsObject = {
                burgers: dbBurger
            }
            console.log(hbsObject);
            res.render('index', hbsObject)
        });
    });
};