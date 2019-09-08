//* imports
//import modules
const router = require("express").Router();

//* routes
// / - main route
router.route("/").get((req, res) => res.status(200).render("index", { title: "lightMeasuring", css: "/css/index.css" }));

//* exports
module.exports = router;
