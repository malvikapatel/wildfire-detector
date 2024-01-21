import React from "react";
import logo from "./assets/logo.png";

function Home() {
  return (
    <div name="Home" className="w-full h-screen bg-green-950">
      <div className="h-full p-15 mx-auto flex">
        <div className="flex flex-col w-full h-full text-center items-center justify-center">
          <p className="flex md:text-9xl font-bold text-green-300 items-center justify-center font-outline-2 md:font-outline-2">
            Tree Huggers
            <img src={logo} width={1 / 2} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
