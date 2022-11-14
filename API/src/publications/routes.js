const router = require('express').Router();
const controller = require('./controllers');
const authMiddleware = require('../middlewares/auth');
const ownerMiddleware = require('../middlewares/owner');
const stayedMiddleware = require('../middlewares/stayed');

router.post('/publish', authMiddleware, controller.publish);
router.post('/publish_rental', authMiddleware, ownerMiddleware,controller.publish_rental);
router.post('/publish_rate', authMiddleware, stayedMiddleware, controller.publish_rate);
router.get('', controller.list);
router.put('/delete', authMiddleware, controller.delete);
router.put('', authMiddleware, controller.comment);


module.exports = router;
