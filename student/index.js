const express = require("express");
const router = express.Router();
const{listAction , removeAction} = require('./controller.js');

router.get('/',listAction);
router.get('/delete/:id',removeAction);

module.exports = router ; 