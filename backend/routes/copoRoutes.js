const express = require('express');
const copoController = require('../controllers/copoController');

const router = express.Router();

router
	.route('/')
	.get(copoController.getAllCoPo)
	.post(copoController.createCoPo);

router
	.route('/:id')
	.delete(copoController.deleteCoPO);


module.exports = router;