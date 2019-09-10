const path = require("path");
const measurementSchema = require(path.join(__dirname, "..", "models", "measurementModel.js"));

async function findMeasurements(req, res) {
    const amountOfSensors = 22;
    const queries = {};
    for (var i = 0; i < amountOfSensors; i++) {
        queries[i + 1] = await measurementSchema.find({ deviceNameShort: i + 1 }).sort({ _id: -1 }).limit(5);
    }
    console.log(queries);
    res.status(200).render("index", { title: "lightMeasuring", css: "/css/index.css", queries });
}

module.exports = { findMeasurements };