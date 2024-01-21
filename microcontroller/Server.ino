
//---- import required libraries ----
//server
#include <Arduino.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <ESPmDNS.h>
#include "esp_wpa2.h"

//json
#include "AsyncJson.h"
#include "ArduinoJson.h"

//sensors
#include <Adafruit_AHTX0.h>

//display
#include <LiquidCrystal.h>

//-----constants------
// replace with your network credentials
const char *ssid = "treehugger";
const char *password = "password";

//LCD pins
const int rs = 12, en = 11, d4 = 26, d5 = 25, d6 = 23, d7 = 24;

//sensor readings
Adafruit_Sensor *aht_humidity, *aht_temp;

//----objects----
// create AsyncWebServer object on port 80
AsyncWebServer server(80);

//temperature and humidity sensor
Adafruit_AHTX0 aht;

//lcd
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

//-------setup----------
void setup() {
  // serial port for debugging purposes
  Serial.begin(115200);

  //display
  lcd.begin(16, 2);
  lcd.print("The Tree Hugger!");

  // connect to Wi-Fi
  connectWiFi();

  //connect MDNS
  connectMDNS();

  // add MDNS service
  MDNS.addService("http", "tcp", 80);

  // route for getting sensor data
  server.on("/sensorData", HTTP_GET, [](AsyncWebServerRequest *request) {
    returnSensorData(request);
  });

  // route for receiving classification result
  server.on("/risk", HTTP_GET, [](AsyncWebServerRequest *request) {
    handleRisk(request);
  });

  //if route not found
  server.onNotFound(notFound);

  // start server
  server.begin();
}

//------------loop----------
void loop() {
}

//--------server setup functions------
// set up wifi connection
void connectWiFi() {
  // set wifi mode
  WiFi.mode(WIFI_STA);

  //start wifi
  WiFi.begin(ssid, password);

  // until connected to wifi, check for connection
  while (WiFi.waitForConnectResult() != WL_CONNECTED) {
    delay(1000);
    Serial.println(F("Connecting to WiFi..."));
  }

  // print ESP Local IP Address once connected
  Serial.print(F("IP Address: "));
  Serial.println(WiFi.localIP());
}

// set mdns responder
void connectMDNS() {
  if (!MDNS.begin("treehugger")) {
    Serial.println(F("Error setting up MDNS responder!"));
    while (1) {
      delay(1000);
      Serial.println(F("Connecting..."));
    }
  }
  Serial.println(F("mDNS responder started"));
}


//----server route functions----
// route for not found pages
void notFound(AsyncWebServerRequest *request) {
  request->send(404, "application/json", "{\"message\":\"Not found\"}");
}

//route for returning sensor data
void returnSensorData(AsyncWebServerRequest *request) {
  // read temperature and humidity
  String temperature = String(getTemperature());
  String humidity = String(getHumidity());

  // create JSON response
  String jsonResponse = "{\"temperature\": " + temperature + ", \"humidity\": " + humidity + "}";

  // Send the response
  request->send(200, "application/json", jsonResponse);
}

// route for handling post (result of classification)
void handleRisk(AsyncWebServerRequest *request) {
  String result = "";

  //check if param in request
  if (request->hasParam("risk", true)) {
    result = request->getParam("risk", true)->value();
    Serial.println(result);
  } else {
    Serial.println("No message sent");
    //send failure message
    request->send(400, "text/plain", "Risk parameter not found!");
  }

  //handle display
  printRisk(result);

  //send success message
  request->send(200, "text/plain", "Success!");
}


//----sensor setup functions----
void setupSensors() {
  while (aht.begin() != true) {
    //save string to flash memory to save RAM
    Serial.println(F("AHT20 failed to connect."));
    delay(1000);
  }
  Serial.println(F("AHT20 Connected"));

  aht_temp = aht.getTemperatureSensor();
  aht_temp->printSensorDetails();

  aht_humidity = aht.getHumiditySensor();
  aht_humidity->printSensorDetails();
}

//----sensor reading functions------
//get temperature
int getTemperature() {
  sensors_event_t temp;
  aht_temp->getEvent(&temp);

  return (int)temp.temperature;
}

//get humidity
int getHumidity() {
  sensors_event_t humidity;
  aht_humidity->getEvent(&humidity);

  return (int)humidity.relative_humidity;
}

//-----display-------
void printRisk(String risk) {
  //set warning or normal notif. of reading
  if (risk.equals("alert")) {
    lcd.noBlink();
    lcd.print("Fire Alert!");
  } else if (risk.equals("high") || risk.equals("extreme")) {
    lcd.blink();
    lcd.print("Warning!");
  } else {
    lcd.noBlink();
    lcd.print("New reading!");
  }

  //print risk
  lcd.clear();
  lcd.print(risk);

  delay(1000);
}
