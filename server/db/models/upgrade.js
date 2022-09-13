const Sequelize = require('sequelize');
const db = require('../database');

const Upgrade = db.define('upgrade', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notNull: true },
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notNull: true,
		},
	},
	cps: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notNull: true,
		},
	},
	unlucked: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
	},
	qty: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
	},
});

module.exports = Upgrade;
