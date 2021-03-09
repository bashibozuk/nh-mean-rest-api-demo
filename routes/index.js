const express = require('express');
const router = express.Router();
const articeleRouteConfigurator = require('./articles')

articeleRouteConfigurator(router);

const authorRoutes = require('./authors');
authorRoutes(router);

const categoryRoutes = require('./categories');
categoryRoutes(router);

module.exports = router;