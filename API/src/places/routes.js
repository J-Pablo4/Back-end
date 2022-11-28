const router = require('express').Router();
const controller = require('./controllers');
const adminMiddleware = require('../middlewares/admin');
const upload = require('../middlewares/images');

router.get('', controller.list);
router.get('/weather/:weather',controller.list_by_weather);
router.get('/continent/:continent',controller.list_by_continent);

module.exports = router;