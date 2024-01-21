import React from "react";
import { getDatabase, ref, set } from "firebase/database";

function WriteFirebase(locationId, { temperature, humidity }) {
  const db = getDatabase();
  set(ref(db, "locations/" + locationId), {
    temperature: temperature,
    humidity: humidity,
  })
    .then(() => {
      console.log("Data saved successfully!");
    })
    .catch((err) => console.log(err));
  return <div>WriteFirebase</div>;
}

export default WriteFirebase;
