const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/apiController');


router.get('/', ApiController.hello);

router.get('/check', ApiController.check);

router.get('/data', ApiController.getDailySticks);

module.exports = router;
