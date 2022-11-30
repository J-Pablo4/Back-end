const router = require('express').Router();
const controller = require('./controllers');
const authMiddleware = require('../middlewares/auth');
const stayedMiddleware = require('../middlewares/stayed');
const upload = require('../middlewares/images');

router.post('/publish', authMiddleware, upload.single('photo'),controller.publish);
router.get('', controller.list);
router.put('', authMiddleware, controller.comment);

module.exports = router;