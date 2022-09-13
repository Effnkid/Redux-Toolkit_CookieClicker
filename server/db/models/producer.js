const Sequelize = require('sequelize');
const db = require('../database');

const Producer = db.define('producer', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notNull: true },
	},
	displayName: {
		type: Sequelize.VIRTUAL,
		get() {
			const beforeDisplay = this.getDataValue('name');
			return beforeDisplay
				.split('_')
				.map((string) => string[0].toUpperCase() + string.slice(1))
				.join(' ');
		},
		set(value) {
			throw new Error('DO NOT TRY TO SET THE `displayName` value');
		},
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

module.exports = Producer;
