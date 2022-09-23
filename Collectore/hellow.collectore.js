const hellowCollectore = (req, res) => {
	try {
		res.send('<h1>How are you?</h1>');
	} catch (error) {
		console.log(error);
	}
};

module.exports = hellowCollectore;
