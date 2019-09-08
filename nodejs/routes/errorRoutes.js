//* imports
//import modules
const router = require("express").Router();

//* routes
// / - any not designed route
router.route("*").get((req, res) => res.render("error"));

//* exports
module.exports = router;