//* imports
//import modules
const router = require("express").Router();
const path = require("path");

//import controller
const { findMeasurements } = require(path.join(__dirname, "..", "controllers", "indexController.js"));

//* routes
// / - main route
router.route("/").get(findMeasurements);

//* exports
module.exports = router;
