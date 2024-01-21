import React from "react";
import logo from "./assets/logo.png";

function Home() {
  return (
    <div name="Home" className="w-full h-screen bg-green-950">
      <div className="h-full p-15 mx-auto flex">
        <div className="flex flex-col w-full h-full text-center items-center justify-center">
          <p className="flex md:text-9xl font-bold text-green-300 items-center justify-center font-outline-2 md:font-outline-2">
            Tree Huggers
          </p>
          <p className="flex md:text-xl font-bold text-white items-center justify-center py-20">
            Click here to start
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
