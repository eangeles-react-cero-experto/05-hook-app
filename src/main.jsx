import ReactDOM from "react-dom/client";
import "./index.css";
import { MainApp } from "./09-useContext/MainApp.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>,
);
// ReactDOM
//<React.StrictMode>
//  {/* <HooksApp /> */}
//  {/* <CounterApp /> */}
//  {/* <CounterWithCustomHookApp /> */}
//  {/* <SimpleFormApp /> */}
//  {/* <FormWithCustomHookApp /> */}
//  <MultipleCustomHooksApp />
//</React.StrictMode>
