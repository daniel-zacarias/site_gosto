const Sequelize = require('sequelize');
const sequelize = new Sequelize('h-lol', 'Admin', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });