import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CallbackHookApp } from "./06-memos/CallbackHookApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CallbackHookApp />,
);

//<React.StrictMode>
//  {/* <HooksApp /> */}
//  {/* <CounterApp /> */}
//  {/* <CounterWithCustomHookApp /> */}
//  {/* <SimpleFormApp /> */}
//  {/* <FormWithCustomHookApp /> */}
//  <MultipleCustomHooksApp />
//</React.StrictMode>
