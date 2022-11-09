const router = require('express').Router();

const placesRoutes = require('../src/places/routes');
const publicationsRoutes = require('../src/publications/routes');
const usersRoutes = require('../src/users/routes');

router.use('/', placesRoutes);
router.use('/', publicationsRoutes);
router.use('/', usersRoutes);

module.exports = router;

