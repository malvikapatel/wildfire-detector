import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./Home";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div name="App">
      <Home />
      <Dashboard />
    </div>
  );
}

export default App;
