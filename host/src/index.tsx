import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { init } from "@module-federation/enhanced/runtime";

const isHomeOverride = localStorage.getItem("override-home");
const prodUrl = import.meta.env.VITE_API_URL;
const bundlePath = ":3001/assets/remoteEntry.js";

const remotes = [
  {
    name: "home",
    entry: isHomeOverride
      ? `http://127.0.0.1${bundlePath}`
      : `${prodUrl}${bundlePath}`,
    type: "module",
  },
];

init({
  name: "host",
  remotes: remotes,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
