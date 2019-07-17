const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const luxSchema = new Schema({
    value: String
});

luxSchema.set('timestamps', true);

let lux1 = mongoose.model("lux1", luxSchema);
let lux2 = mongoose.model("lux2", luxSchema);
let lux3 = mongoose.model("lux3", luxSchema);
let lux4 = mongoose.model("lux4", luxSchema);
let lux5 = mongoose.model("lux5", luxSchema);
let lux6 = mongoose.model("lux6", luxSchema);
let lux7 = mongoose.model("lux7", luxSchema);
let lux8 = mongoose.model("lux8", luxSchema);
let lux9 = mongoose.model("lux9", luxSchema);
let lux10 = mongoose.model("lux10", luxSchema);
let lux11 = mongoose.model("lux11", luxSchema);
let lux12 = mongoose.model("lux12", luxSchema);
let lux13 = mongoose.model("lux13", luxSchema);
let lux14 = mongoose.model("lux14", luxSchema);
let lux15 = mongoose.model("lux15", luxSchema);
let lux16 = mongoose.model("lux16", luxSchema);
let lux17 = mongoose.model("lux17", luxSchema);
let lux18 = mongoose.model("lux18", luxSchema);
let lux19 = mongoose.model("lux19", luxSchema);
let lux20 = mongoose.model("lux20", luxSchema);
let lux21 = mongoose.model("lux21", luxSchema);
let lux22 = mongoose.model("lux22", luxSchema);


module.exports = {
    lux1,
    lux2,
    lux3,
    lux4,
    lux5,
    lux6,
    lux7,
    lux8,
    lux9,
    lux10,
    lux11,
    lux12,
    lux13,
    lux14,
    lux15,
    lux16,
    lux17,
    lux18,
    lux19,
    lux20,
    lux21,
    lux22
};