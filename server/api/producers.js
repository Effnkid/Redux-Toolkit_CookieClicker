const router = require('express').Router();
const { Producer } = require('../db');

// GET /api/producers

router.get('/', async (req, res, next) => {
	try {
		const producers = await Producer.findAll();
		res.send(producers);
	} catch (e) {
		next(e);
	}
});

module.exports = router;
