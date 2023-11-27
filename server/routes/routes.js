const express = require('express');
const router = express.Router();
const myController = require('../controller/controller');

router.get('',myController.getFileupload);
router.post('',myController.postFile)

module.exports = router;