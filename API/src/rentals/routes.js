const router = require('express').Router();
const controller = require('./controllers');

router.get('', controller.list);
router.get('/:id', controller.getOne);

router.put('/:id', controller.update);
router.put('/:id/book', controller.book);
router.post('', controller.create)
router.post('/:id', controller.rate);

module.exports = router;