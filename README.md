# lightMeasuring
## introduction
  Repository of the school project about measuring actual light level. Basic configuration includes sixteen light sensors and central which connects all of measurers and process their's data. Our actual goal is to make devices communicate wireless, then connect whole configuration to existing [KNX](https://www.knx.org/knx-en/for-professionals/index.php) build in one of school clases.
## versions
As of today, our project consists of two versions different by used components, technologies and programming languages.
### [firstVersion](https://github.com/burzynnn/lightMeasuring/tree/firstVersion)
  First version is based on [Arduino Mega 2560](https://store.arduino.cc/arduino-mega-2560-rev3) and sixteen mini photocells connected with microcontroller by ethernet cable with modified wiring.
### [secondVersion](https://github.com/burzynnn/lightMeasuring/tree/secondVersion)
  Second version is based on two [Raspberry Pi 3B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/) and sixteen [light sensors](https://github.com/claws/BH1750) transmitting results by [MQTT](http://mqtt.org/) protocol to [Node.JS](https://nodejs.org/en/) server with [MongoDB](https://www.mongodb.com/) database.
## members 
- Michał Durski - **captain** | arduino ([WounderDragon](https://github.com/WounderDragon))
- Jakub Burzyński - backend/connection ([burzynnn](https://github.com/burzynnn))
- Mateusz Kosmalski - prepearing devices ([K05m0](https://github.com/K05m0))
- Daniel Bober- preparing devices ([Fenek1337](https://github.com/Fenek1337))
