# lightMeasuring
This is the repository of our project which focuses on light measuring. It's based on sixteen light sensors and some kind of main computer, where we can display results of measurements. Our goal is to make sensors wireless and then connect whole configuration with existing [KNX](https://www.knx.org/knx-en/for-professionals/index.php) build.
## versions
Like for now our project has two versions differing in used components, principles of operations and codes.
### firstVersion
First version is based on [Arduino Mega 2560](https://store.arduino.cc/arduino-mega-2560-rev3) and sixteen mini photocells connected by ethernet cable with modified wiring.
### secondVersion
Second version is based on [Raspberry Pi 3B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/) and sixteen [light sensors](https://github.com/claws/BH1750) connected by WiFi network.
