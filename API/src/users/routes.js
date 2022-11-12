const router = require('express').Router();
const controller = require('./controllers');

router.get('', controller.list);
router.put('/:id', controller.update);
router.get("/:id", controller.getOne);
router.post('/sign_up', controller.create);
router.post('/log_in', controller.log_in);

module.exports = router;
