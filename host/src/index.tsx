import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { init } from "@module-federation/enhanced/runtime";
import { getRemotesConfig } from "./utils/getRemotesConfig";

init({
  name: "host",
  remotes: await getRemotesConfig(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
