import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HooksApp } from "./HooksApp";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHookApp } from "./01-useState/CounterWithCustomHookApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    <CounterWithCustomHookApp />
  </React.StrictMode>
);
