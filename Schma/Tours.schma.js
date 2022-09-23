const mongoose = require('mongoose');

const tour = new mongoose.Schema(
	{
		hotelName: {
			type: String,
			require: [true, 'This field is require.'],
			unique: [true, 'Name shout be unique.'],
			trim: true,
			minLength: [5, 'Name shout be at least 5 letter.'],
			maxLength: [20, 'Name is too large.'],
		},
		placeName: {
			type: String,
			require: true,
			trim: true,
		},
		country: {
			type: String,
			require: true,
		},
		image: {
			type: String,
			require: true,
		},
		viewCount: {
			type: Number,
			default: 0,
		},
		description: {
			type: String,
			require: true,
		},
		price: {
			type: Number,
			require: true,
			min: [0, "Price can't be negative."],
		},
	},
	{
		timestamps: true,
	}
);

module.exports.TourSchma = mongoose.model('Tour', tour);
