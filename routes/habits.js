const express = require('express');
const router = express.Router();

const habitsController = require('../controllers/habits_controller');

router.post('/create', habitsController.create);

module.exports = router;