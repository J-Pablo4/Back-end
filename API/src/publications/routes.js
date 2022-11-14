const router = require('express').Router();
const controller = require('./controllers');

router.post('/publish', controller.publish);
router.post('/publish_rental', controller.publish_rental);
router.post('/publish_rate', controller.publish_rate);
router.get('', controller.list);
router.put('/delete', controller.delete);
router.put('', controller.comment);


module.exports = router;
