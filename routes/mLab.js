const fs = require ('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send(collection);
    });

module.exports = router;