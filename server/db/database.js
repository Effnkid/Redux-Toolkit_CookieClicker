const Sequelize = require('sequelize');
const name_of_database = 'coffee-clicker';
const db = new Sequelize(`postgres://localhost:5432/${name_of_database}`, {
	logging: false,
});

module.exports = db;
