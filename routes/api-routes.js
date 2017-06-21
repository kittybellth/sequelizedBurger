// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // POST route for saving a new burger
  app.post("/", function(req, res) {
    console.log(req.body.burger);
    db.Burger.create({
      burger: req.body.burger,
      customer: "Nobody"
    }).then((result) => {  
      console.log("Works Fine");
      return res.json(true);
    }).catch(error => {
      console.log("Aw.... Err");
      return res.json(false);
    })
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
    console.log(req.body.customer);
    db.Burger.update({
      devoured: true,
      customer: req.body.customer
    }, {
      where: {
        id: req.params.id
      }
    }).then((result) => {  
      console.log("Works fine");
      return res.json(true);
    }).catch(error => {
      console.log("Aw.... Err");
      return res.json(false);
    })
  });

};