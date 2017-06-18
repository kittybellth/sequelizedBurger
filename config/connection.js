// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize('burgers_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

// test whether or not it successfully connects
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  // Exports the connection for other files to use
module.exports = sequelize;
