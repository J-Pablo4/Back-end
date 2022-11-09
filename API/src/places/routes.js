const router = require('express').Router();
const controller = require('./controllers');

router.get('/places', controller.list);

module.exports = router;