//* imports
// import environment variables
require("dotenv").config();

// import modules
const http = require("http");
const express = require("express");
const mongoose = require("");
const mqtt = require("mqtt");
const socketio = require("socket.io").listen(process.env.IO_PORT);
const path = require("path");
const chalk = require("chalk");
const moment = require("moment");
