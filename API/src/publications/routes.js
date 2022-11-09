const router = require('express').Router();
const controller = require('./controllers');

router.get('/publications', controller.list);

module.exports = router;
