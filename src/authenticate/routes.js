const express = require('express');
const router = express.Router();

const authenticateController = require('./authenticate.controller.js');

router.post('/signin', authenticateController.signin);
router.get('/signout', authenticateController.signout);

module.exports = router;
