const router = require('express').Router();

const placesRoutes = require('./places/routes');
const publicationsRoutes = require('./publications/routes');
const usersRoutes = require('./users/routes');
const rentalsRoutes = require('../src/rentals/routes');

router.use('/places', placesRoutes);
router.use('/publications', publicationsRoutes);
router.use('/users', usersRoutes);
router.use('/rentals', rentalsRoutes);

module.exports = router;

