const { TourSchma } = require('../Schma/Tours.schma');

// Update a tour
// (BONUS) Body should be validated
module.exports.updateATourService = async (id, data) => {
	const result = await TourSchma.updateOne(
		{ _id: id },
		{ $set: data },
		{
			runValidators: true,
		}
	);

	return result;
};

exports.getTrandingService = async () => {
	const result = await TourSchma.find({}).sort('-viewCount').limit(3);
	return result;
};

exports.getCheapestService = async () => {
	const result = await TourSchma.find({}).sort('viewCount').limit(3);
	return result;
};
