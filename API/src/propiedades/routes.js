const router = require('express').Router();
const controller = require('./controllers');

router.get('/rentals', controller.list);

module.exports = router;