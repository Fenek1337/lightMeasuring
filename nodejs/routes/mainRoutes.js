//* imports
//import modules
const router = require("express").Router();

//* routes
// / - main route
router.route("/").get((req, res) => res.send("working"));

//* exports
module.exports = router;
