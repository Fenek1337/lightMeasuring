//* imports
// import environment variables
require("dotenv").config();

// import modules
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const mqtt = require("mqtt");
const socketio = require("socket.io");
const nodemailer = require("nodemailer");
const excel = require("exceljs");
const path = require("path");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const moment = require("moment");

//import routes
const mainRoutes = require(path.join(__dirname, "routes", "mainRoutes.js"));
const errorRoutes = require(path.join(__dirname, "routes", "errorRoutes.js"));

//import schema of measurement db saving
const measurementSchema = require(path.join(__dirname, "models", "measurementModel.js"));

//* variables
// define server port
const PORT = process.env.SRV_PORT || 3000;

// initialize express
const app = express();

//gmail auth options
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD
    }
});

// define format time
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

async function createExcelFile(schoolClass, weather, side, results) {
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet("Measurements");
    worksheet.mergeCells("D1:E1");
    worksheet.mergeCells("D2:E2");
    const arr = ["Class", "Date", "Time", "Weather", "Sensors"];
    for (var i = 0; i < Object.keys(results).length; i++) {
        if (side === "ALL") {
            arr.push(Object.keys(results)[i]);
        } else {
            arr.push(`${side}${Object.keys(results)[i]}`);
        }
    }
    const firstRow = worksheet.getRow(1);
    for (var k = 0; k < arr.length; k++) {
        if (k < 4) {
            firstRow.getCell(k + 1).value = arr[k];
        } else {
            firstRow.getCell(k + 2).value = arr[k];
        }
    }
    const secondRow = worksheet.getRow(2);
    secondRow.getCell(1).value = schoolClass;
    secondRow.getCell(2).value = moment().format("DD.M.YYYY");
    secondRow.getCell(3).value = moment().format("HH:mm:ss");
    secondRow.getCell(4).value = weather;
    for (var j = 0; j < Object.keys(results).length; j++) {
        secondRow.getCell(j + 7).value = results[Object.keys(results)[j]];
    }
    await workbook.xlsx.writeFile(`worksheet.xlsx`);
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
const io = socketio.listen(server).sockets;

io.on("connection", (socket) => {
    log("info", "socket.io", "Established connection with client");
    socket.on("send-mail", (data) => {
        createExcelFile(data.class, data.weather, data.side, data.results);
        const mailOptions = {
            from: {
                name: "lightMeasuring",
                address: process.env.NODEMAILER_EMAIL
            },
            to: process.env.NODEMAILER_TO.split(","),
            subject: "Pomiar światła",
            text: "Sprawdź załącznik",
            attachments: [{ path: 'worksheet.xlsx' }]
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                log("error", "nodemailer", err);
                io.emit("email-confirmation", "Failed to send email.");
            } else {
                log("info", "nodemailer", "Email sent successfully.");
                io.emit("email-confirmation", "Email sent successfully.");
            }
        });
    });
});

// connect to mqtt broker
const mqttClient = mqtt.connect(process.env.MQTT_CONNECTION);

// subscribe to topic
mqttClient.on("connect", () => {
    log("info", "mqtt", "Connected with MQTT Broker.");
    mqttClient.subscribe("lux");
});

mqttClient.on("message", (topic, message) => {
    const messageObject = JSON.parse(String(message));
    messageObject.measurement = Number(messageObject.measurement).toFixed(2);
    const messageToSave = new measurementSchema({
        deviceNameShort: messageObject.sensorShort,
        deviceNameLong: messageObject.sensorLong,
        value: messageObject.measurement
    });
    messageToSave.save();
    io.emit("lux", messageObject);
});

// launch server
server.listen(PORT, () => log("info", "server", `Server up and running on port ${PORT}.`));

//* exports
module.exports = { mqttClient, io };
