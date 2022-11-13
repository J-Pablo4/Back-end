const router = require('express').Router();
const controller = require('./controllers');

router.post('/publish', controller.publish);
router.post('/publish_rental', controller.publish_rental);
router.post
router.get('', controller.list);
router.put('/:id/delete', controller.delete);
router.put('/:id', controller.comment);


module.exports = router;
