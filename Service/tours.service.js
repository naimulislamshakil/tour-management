const { TourSchma } = require('../Schma/Tours.schma');

// Post a tour
module.exports.postTourService = async (data) => {
	const result = await TourSchma.create(data);
	return result;
};

// Get all tour collaction
// Filters, sort, paiganation both use.
// User do all activits in 1 route
module.exports.getAllTourService = async (query) => {
	const { field, skip, limit, sorts } = query;
	const result = await TourSchma.find({})
		.select(field)
		.skip(skip)
		.limit(limit)
		.sort(sorts);
	const count = await TourSchma.find({}).count();
	const pageCount = Math.ceil(count / limit);
	return { result, pageCount };
};

// Get a tour details by id.
// Send all the information of the tour.
// incress the view count by id for this
module.exports.getATourByIdService = async (id) => {
	const update = await TourSchma.updateOne(
		{ _id: id },
		{ $inc: { viewCount: 1 } }
	);
	const result = await TourSchma.findById(id);
	// const count = result.viewCount;
	// Object.assign(result, (result.viewCount = result.viewCount + 1));
	// console.log(count);

	return result;
};
