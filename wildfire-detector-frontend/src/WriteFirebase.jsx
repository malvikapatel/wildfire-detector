import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import app from "../firebaseConfig.js";

function WriteFirebase({ locationId, temperature, humidity }) {
  useEffect(() => {
    const db = getDatabase(app);
    set(ref(db, "locations/location-" + locationId), {
      temperature: temperature,
      humidity: humidity,
    })
      .then(() => {
        console.log("Data saved successfully!");
      })
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
}

export default WriteFirebase;
