const express = require('express');
const router = express.Router();
const passport = require('passport');

const habitsController = require('../controllers/habits_controller');

router.post('/create', passport.checkAuthentication, habitsController.create);
router.get('/destroy/:id', passport.checkAuthentication, habitsController.destroy);

module.exports = router;