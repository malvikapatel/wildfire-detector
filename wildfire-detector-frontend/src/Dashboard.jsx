import React from "react";

function Dashboard() {
  return (
    <div className="w-full h-screen justify-center text-center p-8 md:p-20 bg-green-950 overflow-hidden">
      <div className="md:flex md:max-w-screen-lg mx-auto pb-10 ">
        <div
          data-aos="fade-right"
          className="flex-1 border-4 p-8  md:p-12 rounded-xl border-black bg-neutral-100  hover:bg-white"
        >
          <h1 className="font-bold text-4xl md:text-4xl py-12 text-center">
            Temperature
          </h1>
          <p className="leading-normal text-center">30 °C</p>
        </div>
        <div className="p-6 text-6xl"></div>
        <div
          data-aos="fade-left"
          className="flex-1 border-4 p-8 md:p-12 rounded-xl border-black bg-neutral-100 hover:bg-white"
        >
          <h1 className="font-bold text-4xl md:text-4xl py-12 text-center">
            Humidity
          </h1>
          <p className="leading-normal text-center">10 % rh</p>
        </div>
        <div
          data-aos="fade-right"
          className="flex-1 border-4 p-8 mx-10 md:p-12 rounded-xl border-black bg-neutral-100  hover:bg-white"
        >
          <h1 className="font-bold text-4xl md:text-4xl py-12 text-center">
            Risk
          </h1>
          <p className="leading-normal text-center">Low</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
