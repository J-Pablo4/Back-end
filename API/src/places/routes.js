const router = require('express').Router();
const { Router } = require('express');
const controller = require('./controllers');

router.get('', controller.list);
router.put('/:id', controller.delete);
router.post('', controller.create);

module.exports = router;