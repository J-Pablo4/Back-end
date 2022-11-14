const router = require('express').Router();
const { Router } = require('express');
const controller = require('./controllers');

router.get('', controller.list);
router.put('/:id', controller.delete);
router.post('', controller.create);
router.get('/:weather',controller.list_by_weather);
router.get('/:continent',controller.list_by_continent);
router.get('/:country',controller.list_by_country)

module.exports = router;