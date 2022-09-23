const router = require('express').Router();
const toursCollectore = require('../../Collectore/tours.collectore');

router
	.route('/')
	.get(toursCollectore.getAllTourCollectore)
	.post(toursCollectore.postTourCollectore);

router.route('/:id').get(toursCollectore.getATourByIdCollectore);

module.exports = router;
