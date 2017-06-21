
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      // set default value to false
      defaultValue: false
    },
    customer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    }
  },{timestamps: false,});
  return Burger;
};
