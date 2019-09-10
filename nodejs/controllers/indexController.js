//* imports
//import modules
const path = require("path");

//import import schema of measurement db saving
const measurementSchema = require(path.join(__dirname, "..", "models", "measurementModel.js"));

//* declarations
async function findMeasurements(req, res) {
    const amountOfSensors = 22;
    const queries = {};
    for (var i = 0; i < amountOfSensors; i++) {
        queries[i + 1] = await measurementSchema.find({ deviceNameShort: i + 1 }).sort({ _id: -1 }).limit(5);
    }
    res.status(200).render("index", { title: "lightMeasuring", css: "/css/index.css", queries });
}

//* exports
module.exports = { findMeasurements };