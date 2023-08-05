import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HooksApp } from "./HooksApp";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHookApp } from "./01-useState/CounterWithCustomHookApp";
import { SimpleFormApp } from "./02-useEffect/SimpleFormApp";
import { FormWithCustomHookApp } from "./02-useEffect/FormWithCustomHookApp";
import { MultipleCustomHooksApp } from "./03-examples/MultipleCustomHooksApp";
import { FocusScreenApp } from "./04-useRef/FocusScreenApp";
import { LayoutApp } from "./05-useLayoutEffect/LayoutApp";
import { MemorizeApp } from "./06-memos/MemorizeApp";

ReactDOM.createRoot(document.getElementById("root")).render(<MemorizeApp />);

//<React.StrictMode>
//  {/* <HooksApp /> */}
//  {/* <CounterApp /> */}
//  {/* <CounterWithCustomHookApp /> */}
//  {/* <SimpleFormApp /> */}
//  {/* <FormWithCustomHookApp /> */}
//  <MultipleCustomHooksApp />
//</React.StrictMode>
