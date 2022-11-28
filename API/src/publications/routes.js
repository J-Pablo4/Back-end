const router = require('express').Router();
const controller = require('./controllers');
const authMiddleware = require('../middlewares/auth');
const stayedMiddleware = require('../middlewares/stayed');
const upload = require('../middlewares/images');

router.post('/publish', authMiddleware, upload.single('photo'),controller.publish);
router.post('/publish_rate', authMiddleware, stayedMiddleware, controller.publish_rate, controller.publish);
router.get('', controller.list);
router.put('/delete', authMiddleware, controller.delete);
router.put('', authMiddleware, controller.comment);

module.exports = router;