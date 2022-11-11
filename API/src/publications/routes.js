const router = require('express').Router();
const controller = require('./controllers');

router.get('', controller.list);
router.put('/:id', controller.update);

module.exports = router;
