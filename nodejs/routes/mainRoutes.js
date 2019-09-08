//* imports
//import modules
const router = require("express").Router();

//* routes
// / - main route
router.route("/").get((req, res) => res.status(200).render("index"));

//* exports
module.exports = router;
