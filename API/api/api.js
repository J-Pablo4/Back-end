const router = require('express').Router();

const placesRoutes = require('../src/places/routes');
const publicationsRoutes = require('../src/publications/routes');
const usersRoutes = require('../src/users/routes');
const rentalsRoutes = require('../src/rentals/routes');

router.use('/', placesRoutes);
router.use('/', publicationsRoutes);
router.use('/', usersRoutes);
router.use('/', rentalsRoutes);

module.exports = router;

