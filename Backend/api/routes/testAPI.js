var express = require("express");
var router = express.Router();

const responceData = {
    message: "Test",
    status: "Tired",
    num: 420
}

router.get("/", function(req, res, next){
    /*res.send("I hate prolog so much");*/
    res.send(JSON.stringify(responceData));
});

module.exports = router;