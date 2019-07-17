const mongoose = require("mongoose");

const modelsMap = require("./luxModel.js");

mongoose.connect('mongodb+srv://burzynnn:<password>@cluster0-xfjav.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.on("error", function () {
    console.log("MongoDB connection error")
});
connection.once("open", function () {
    console.log("MongoDB connection successful")
});

module.exports = {
    connection,
    modelsMap
};