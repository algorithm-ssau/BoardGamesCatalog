var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.send("I hate prolog so much");
});

module.exports = router;