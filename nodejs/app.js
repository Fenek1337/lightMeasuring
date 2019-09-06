//* imports
// import environment variables
require("dotenv").config();

// import modules
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const mqtt = require("mqtt");
const socketio = require("socket.io");
const path = require("path");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const moment = require("moment");

//import routes
const mainRoutes = require(path.join(__dirname, "routes", "mainRoutes.js"));

//* variables
// define server port
const PORT = process.env.SRV_PORT || 3000;

// initialize express
const app = express();

//* middlewares
// setup body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set view engine
app.set("views", path.join(__dirname, "public", "views"));
app.set("view engine", "pug");

// set routes
app.use("/", mainRoutes);

//* services
// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });

// notify on connection with db
mongoose.connection.on("connected", () => console.log("Successfully connected to DB."));

// notify on reconnection with db
mongoose.connection.on("reconnected", () => console.log("Reconnected to DB."));

// notify on disconnection with db
mongoose.connection.on("disconnected", () => console.log("Disconnected from DB."));

// notify in case of error
mongoose.connection.on("error", err => {
    console.log(`Error happened while connecting to DB: ${err}.`);
    process.exit(1);
});

// http instance using express
const server = http.createServer(app);

// socketio by http instance
const io = socketio(server).sockets;

// connect to mqtt broker
const mqttClient = mqtt.connect(process.env.MQTT_CONNECTION);

// subscribe to topic
mqttClient.on("connect", () => {
    mqttClient.subscribe("lux");
});

// launch server
server.listen(PORT, () => console.log(`Server up and running on port ${PORT}.`));

//* exports
module.exports = { mqttClient, io };
