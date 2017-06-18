var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

var db = require("./models")

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + "/public"));

// app.use(bodyParser.urlencoded({ extended: false }));

// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.

// app.use("/", routes);


db.sequelize.sync({ force: true, match:/burgers_db$/ }).then(() => {
  console.log("Successfully strutured model");
  app.listen(PORT);
}).catch(error => {
console.log(error);
  console.log("fails to struture model");
})

