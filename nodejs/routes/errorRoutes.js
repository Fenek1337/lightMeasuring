//* imports
//import modules
const router = require("express").Router();

//* routes
// / - any not designed route
router.route("*").get((req, res) => res.status(404).render("error", { title: "Error 404", css: "/css/error.css" }));

//* exports
module.exports = router;