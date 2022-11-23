const router = require('express').Router();
const controller = require('./controllers');
const authMiddleware = require('../middlewares/auth');
const ownerMiddleware = require('../middlewares/owner');
const stayedMiddleware = require('../middlewares/stayed');
const upload = require('../middlewares/images');

router.get('', controller.list);
router.get('/:id', controller.getOne);
router.put('/:id/book', authMiddleware, controller.book);
router.post('', authMiddleware, upload.single('photo'), controller.create);

router.post('/:id', authMiddleware, stayedMiddleware, upload.single('photo'),controller.rate);
router.get('/places/:place', controller.list_by_place);

module.exports = router;