const { db } = require('./server/db');
const { Producer, Upgrade } = require('./server/db');

const producers = [
	{
		name: 'chemex',
		price: 10,
		cps: 1,
	},
	{
		name: 'french_press',
		price: 50,
		cps: 2,
	},
	{
		name: 'mr._coffee',
		price: 100,
		cps: 5,
	},
	{
		name: 'ten_cup_urn',
		price: 500,
		cps: 10,
	},
	{
		name: 'espresso_machine',
		price: 1000,
		cps: 20,
	},
	{
		name: 'ten_gallon_urn',
		price: 5000,
		cps: 50,
	},
	{
		name: 'coffeeshop',
		price: 10000,
		cps: 75,
	},
	{
		name: 'coffee_factory',
		price: 50000,
		cps: 100,
	},
	{
		name: 'coffee_fountain',
		price: 100000,
		cps: 200,
	},
	{
		name: 'coffee_river',
		price: 500000,
		cps: 500,
	},
	{
		name: 'coffee_ocean',
		price: 1000000,
		cps: 1000,
	},
	{
		name: 'coffee_planet',
		price: 5000000,
		cps: 2000,
	},
];
const upgrades = [
	{
		name: 'double_current_CPS',
		price: 5000,
		cps: 2,
	},
	{
		name: 'triple_current_CPS',
		price: 15000,
		cps: 3,
	},
	{
		name: 'quad_current_CPS',
		price: 150000,
		cps: 4,
	},
];

const seed = async () => {
	try {
		await db.sync({ force: true });

		await Promise.all(
			producers.map((producer) => {
				return Producer.create(producer);
			})
		);
		await Promise.all(
			upgrades.map((upgrade) => {
				return Upgrade.create(upgrade);
			})
		);

		console.log('Seeding success!');
		db.close();
	} catch (err) {
		console.error('Oh noes! Something went wrong!');
		console.error(err);
		db.close();
	}
};

seed();
