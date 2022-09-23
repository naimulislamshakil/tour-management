const toursService = require('../Service/tours.service');
const mongoose = require('mongoose');

// Post a tour details
module.exports.postTourCollectore = async (req, res) => {
	try {
		const result = await toursService.postTourService(req.body);
		res.status(200).json({
			status: 'success',
			message: 'Data Post Successfully.',
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};

// Get all tour collaction
// Filters, sort, paiganation both use.
// User do all activits in 1 route
module.exports.getAllTourCollectore = async (req, res) => {
	try {
		console.log(req.query);
		const { fields, limet = 5, page = 1, sort } = req.query;

		const query = {};
		if (fields) {
			const field = fields.split(',').join(' ');
			query.field = field;
		}

		if (page) {
			const skip = (page - 1) * +limet;
			query.skip = skip;
			query.limit = +limet;
		}

		if (sort) {
			const sorts = sort.split(',').join(' ');
			query.sorts = sorts;
		}

		const result = await toursService.getAllTourService(query);
		res.status(200).json({
			status: 'Success',
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};

// Get a tour details by id.
// Send all the information of the tour.
// incress the view count by id for this
module.exports.getATourByIdCollectore = async (req, res) => {
	try {
		const { id } = req.params;
		if (mongoose.Types.ObjectId.isValid(id)) {
			const result = await toursService.getATourByIdService(id);

			res.status(200).json({
				status: 'success',
				data: result,
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};
