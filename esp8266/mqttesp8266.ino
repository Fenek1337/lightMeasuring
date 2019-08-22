#include <ArduinoJson.h>
#include <PubSubClient.h>
#include <ESP8266WiFi.h>
#include <Wire.h>
#include <BH1750.h>

#define wifi_ssid "lightMeasuring2G"
#define wifi_password "mJmD2018"
#define mqtt_server "192.168.1.3"
#define lux_topic "lux2"
#define sleepTime 10

BH1750 lightMeter;
WiFiClient espClient;
PubSubClient client(espClient);

float lux;
//IPAddress ip(192, 168, 1, 4);
//IPAddress gateway(192, 168, 1, 1);
//IPAddress subnet(255, 255, 255, 0);

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(wifi_ssid);
   //WiFi.config(ip, gateway, subnet);
  WiFi.begin(wifi_ssid, wifi_password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("WiFi connected - ESP IP address: ");
  Serial.println(WiFi.localIP());
  Serial.println(WiFi.macAddress());
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    // If you do not want to use a username and password, change next line to
    if (client.connect("ESP8266second")) {
    // if (client.connect("ESP8266Client", mqtt_user, mqtt_password)) {
      Serial.println("connected");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void publishLux() {
    client.publish(lux_topic, String(lux).c_str(), true);
}

void updateLux() {
  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  lux = lightMeter.readLightLevel();
 
    // Check if any reads failed and exit early (to try again).
  if (isnan(lux)){
    Serial.println("Failed BH1750");
    return;
  }
}

void setup(){

  Serial.begin(9600);

  // Initialize the I2C bus (BH1750 library doesn't do this automatically)
  // On esp8266 devices you can select SCL and SDA pins using Wire.begin(D4, D3);
  Wire.begin();
  lightMeter.begin();
  while(!Serial) {;}
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  Serial.println(F("BH1750 Test"));

}

void loop() {
  if (!client.connected()) 
  {
    reconnect();
  }
  client.loop();
 
  // update the temperature and humidity
  updateLux();
 
  // publish the temperature and humidity
  publishLux();
  // wait some time
  delay(sleepTime * 100);
}
