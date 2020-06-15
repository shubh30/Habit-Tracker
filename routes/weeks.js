const express = require('express');
const router = express.Router();
const weekController = require('../controllers/week_controller');

router.get("/",weekController.home);
router.get("/update/:id/:day/:value",weekController.update);

module.exports = router;