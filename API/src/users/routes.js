const router = require('express').Router();
const controller = require('./controllers');
const authMiddleware = require('../middlewares/auth');

router.put('/:id', authMiddleware, controller.update);
router.get("/:id", controller.getOne);
router.post('/sign_up', controller.create);
router.get('', controller.log_in);

module.exports = router;
