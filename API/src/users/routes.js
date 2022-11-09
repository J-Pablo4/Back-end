const router = require('express').Router();
const controller = require('./controllers');

router.get('/users', controller.list);

module.exports = router;