const express = require("express");
const path = require("path");
const router404 = express.Router();

router404.get("*", function (req, res) {
    res.status(404).sendFile(path.join(__dirname + "../../.." + "/public/404.html"));
});

module.exports = router404;