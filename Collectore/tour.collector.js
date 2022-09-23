const tourService = require('../Service/tour.service');
const mongoose = require('mongoose');

// Update a tour
// (BONUS) Body should be validated
module.exports.upadteATourCollectore = async (req, res) => {
	try {
		const { id } = req.params;
		if (mongoose.Types.ObjectId.isValid(id)) {
			const result = await tourService.updateATourService(id, req.body);
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

// Get top 3 viewed tour
exports.getTrandingCollectore = async (req, res) => {
	try {
		const result = await tourService.getTrandingService();
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

exports.getcheapestCollectore = async (req, res) => {
	try {
		const result = await tourService.getCheapestService();
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
