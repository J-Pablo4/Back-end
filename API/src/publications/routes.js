const router = require('express').Router();
const controller = require('./controllers');

router.post('', controller.publish);
router.get('', controller.list);
router.put('/:id', controller.update);

module.exports = router;
