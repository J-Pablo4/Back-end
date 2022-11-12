const router = require('express').Router();
const controller = require('./controllers');

router.post('', controller.publish);
router.get('', controller.list);
router.put('/:id/delete', controller.delete);
router.put('/:id', controller.comment);


module.exports = router;
