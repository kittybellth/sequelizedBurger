
// Import the connection to creat the model
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger: {
      type: DataTypes.STRING
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // set default value to false
      defaultValue: false
    }
  },{timestamps: false,});
  return Burger;
};
