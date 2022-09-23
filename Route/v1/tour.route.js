const router = require('express').Router();
const tourCollectore = require('../../Collectore/tour.collector');

router.route('/trending').get(tourCollectore.getTrandingCollectore);
router.route('/cheapest').get(tourCollectore.getcheapestCollectore);
router.route('/:id').patch(tourCollectore.upadteATourCollectore);
module.exports = router;
