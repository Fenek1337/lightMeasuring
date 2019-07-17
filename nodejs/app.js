const express = require("express");

const indexController = require("./controllers/index/indexController.js");
const errorController = require("./controllers/404/404Controller.js");

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public/"));
app.use("/", indexController);
app.use("*", errorController);

app.listen(port, function () {
    console.log("Server started on port: " + port);
});