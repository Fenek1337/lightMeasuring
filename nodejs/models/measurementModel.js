//* imports
//import modules
const mongoose = require("mongoose");

//* declarations
//create measurement schema
const measurementSchema = mongoose.Schema({
    deviceNameShort: {
        type: Number,
        required: true
    },
    deviceNameLong: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
}, { timestamps: true });

//* exports
module.exports = mongoose.model("measurements", measurementSchema);