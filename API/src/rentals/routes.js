const router = require('express').Router();
const controller = require('./controllers');
const publish_rental = require('../publications/controllers');
const authMiddleware = require('../middlewares/auth');
const stayedMiddleware = require('../middlewares/stayed');
const upload = require('../middlewares/images');

router.get('', controller.list);
router.get('/:id', controller.getOne);
router.put('/:id/book', authMiddleware, controller.book);
router.post('', authMiddleware, upload.single('photo'), controller.create, publish_rental.publish_rental);
router.post('/:id', authMiddleware, stayedMiddleware, upload.single('photo'),controller.rate);
router.get('/places/:place', controller.list_by_place);

module.exports = router;