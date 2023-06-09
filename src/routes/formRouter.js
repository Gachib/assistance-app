const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/', formController.index);

module.exports = router;