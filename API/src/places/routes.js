const router = require('express').Router();
const controller = require('./controllers');
const adminMiddleware = require('../middlewares/admin');

router.get('', controller.list);
router.put('/:id', adminMiddleware, controller.delete);
router.post('', adminMiddleware,controller.create);
router.get('/weather/:weather',controller.list_by_weather);
router.get('/continent/:continent',controller.list_by_continent);
router.get('/country/:country',controller.list_by_country);

module.exports = router;