const hellowCollectore = require('../../Collectore/hellow.collectore');

const route = require('express').Router();

route.get('/', hellowCollectore);

module.exports = route;
