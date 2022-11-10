const router = require('express').Router();

const placesRoutes = require('./places/routes');
const publicationsRoutes = require('./publications/routes');
const usersRoutes = require('./users/routes');
const rentalsRoutes = require('../src/rentals/routes');

router.use('/', placesRoutes);
router.use('/', publicationsRoutes);
router.use('/', usersRoutes);
router.use('/', rentalsRoutes);

module.exports = router;

