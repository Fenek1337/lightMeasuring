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
const errorRoutes = require(path.join(__dirname, "routes", "errorRoutes.js"));

//* variables
// define server port
const PORT = process.env.SRV_PORT || 3000;

// initialize express
const app = express();

// define actual time
let now = `[${moment().format("HH:mm:ss | DD-M-YYYY")}]`;
function updateTime() {
    now = `[${moment().format("HH:mm:ss | DD-M-YYYY")}]`;
}
setInterval(updateTime, 1000);

/**
 * @description Improves logs to console
 *
 * @param {string} [type="info"] Type determining variation of log
 * @param {string} [app="server"] App from log is coming
 * @param {string} text Text that will appear in console
 * 
 * @example log("error", "mongoose", "Connected to DB.")
 */
function log(type = "info", app = "server", text) {
    if (type === "error") {
        console.error(`${chalk.cyan(now)} ${chalk.red(type)} ${chalk.magentaBright(`${app}:`)} ${text}`);
    } else {
        console.log(`${chalk.cyan(now)} ${chalk.green(type)} ${chalk.magentaBright(`${app}:`)} ${text}`);
    }
}

// handle process close
process.on("SIGINT" || "SIGTERM", () => {
    mongoose.connection.close(() => {
        log("info", "mongoose", "Disconnected from DB and shutdown server.");
        process.exit(0);
    });
});

//* middlewares
// setup body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set public folder
app.use(express.static(path.join(__dirname, "public")));

// set view engine
app.set("views", path.join(__dirname, "public", "views"));
app.set("view engine", "pug");

// set routes
app.use("/", mainRoutes);
app.use("*", errorRoutes);

//* services
// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });

// notify on connection with db
mongoose.connection.on("connected", () => log("info", "mongoose", "Successfully connected to DB."));

// notify on reconnection with db
mongoose.connection.on("reconnected", () => log("info", "mongoose", "Reconnected to DB."));

// notify on disconnection with db
mongoose.connection.on("disconnected", () => log("info", "mongoose", "Disconnected from DB."));

// notify in case of error
mongoose.connection.on("error", err => {
    log("error", "mongoose", `Error happened while connecting to DB: ${err}.`);
    process.exit(1);
});

// http instance using express
const server = http.createServer(app);

// socketio by http instance
const io = socketio(server).sockets;

io.on("connection", () => {
    log("info", "socket.io", "Established connection with client");
});

// connect to mqtt broker
const mqttClient = mqtt.connect(process.env.MQTT_CONNECTION);

// subscribe to topic
mqttClient.on("connect", () => {
    log("info", "mqtt", "Connected with MQTT Broker.");
    mqttClient.subscribe("lux");
});

// launch server
server.listen(PORT, () => log("info", "server", `Server up and running on port ${PORT}.`));

//* exports
module.exports = { mqttClient, io };
