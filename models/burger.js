
// Import the connection to creat the model
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // set default value to false
      defaultValue: false
    },
    customer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{timestamps: false,});
  return Burger;
};
