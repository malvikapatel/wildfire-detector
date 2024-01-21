import React, { useEffect, useState } from "react";
import WriteFirebase from "./WriteFirebase";

function FetchArduino() {
  const [temperature, setTemperature] = useState(0.0);
  const [humidity, setHumidity] = useState(0);
  const [locationId, setLocationId] = useState(0);

  // fetch data from ESP32
  useEffect(() => {
    fetch("http:treehugger/sensorData")
      .then((res) => {
        return res.json();
      })
      .then(({ temperature, humidity }) => {
        setTemperature(temperature);
        setHumidity(humidity);
        setLocationId(locationId + 1);
      });
  }, []);

  return (
    <WriteFirebase
      locationId={locationId}
      temperature={temperature}
      humidity={humidity}
    />
  );
}

export default FetchArduino;
