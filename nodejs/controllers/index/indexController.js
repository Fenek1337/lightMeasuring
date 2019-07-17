const express = require("express");
const path = require("path");
const mqtt = require("mqtt");
const mongoose = require("mongoose");
const serverSocket = require("socket.io").listen(4000).sockets;

const routerIndex = express.Router();
const clientMQTT = mqtt.connect("mqtt://192.168.1.3:1883");

let database = require(path.join(__dirname + "../../.." + "/model/luxDb.js"));

routerIndex.get("/", function (req, res) {
    res.status(200).sendFile(path.join(__dirname + "../../.." + "/public/index.html"));
});

clientMQTT.on('connect', function () {
    clientMQTT.subscribe('#');
});

clientMQTT.on('message', function (topic, message) {

    let sendMessages = function (topic2, message2) {

        const luxConstructor = database.modelsMap[topic2];
        const model = new luxConstructor({
            value: message2.toString()
        });

        model.save(function (error) {
            if (error) {
                console.error(error);
            }
        });

        serverSocket.emit(topic2, {
            topic: String(topic2),
            message: String(message2)
        });

    };

    let manageMessages = function (topic1, message1) {
        let topics = ["lux1", "lux2", "lux3", "lux4", "lux5", "lux6", "lux7", "lux8", "lux9", "lux10", "lux11", "lux12", "lux13", "lux14", "lux15", "lux16"];
        for (let i = 0; i < topics.length; i++) {
            if (topics[i] === topic1) {
                sendMessages(topic1, message1);
            }
        }
    };

    manageMessages(topic, message);

});

module.exports = routerIndex;