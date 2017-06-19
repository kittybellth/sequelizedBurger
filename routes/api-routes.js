// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // POST route for saving a new burger
  app.post("/", function(req, res) {

    db.Burger.create({
      burger: req.body.burger,
      customer: "Nobody"
    }).then(function(result) {
      console.log(result);
      // Redirect client
      res.redirect("/");
    });
  });

  //DELETE route for deleting a burger. 
  app.delete("/delete/:id", function(req, res) {
    
    // We just have to specify which burger we want to destroy with "where"
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      // Redirect client
      res.redirect("/");
    });
  });

  // PUT route for updating burger.
  app.put("/:id", function(req, res) {

    db.Burger.update({
      devoured: true,
      customer: req.body.customer
    }, {
      where: {
        id: req.params.id
      }
    }).then(function() {
      // Redirect client
      res.redirect("/");
    });
  });

};