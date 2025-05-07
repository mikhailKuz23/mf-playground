import React from "react";
import ReactDOM from "react-dom/client";
import * as ReactRouterModule from "react-router-dom";
import App from "./app/App";
import { init } from "@module-federation/enhanced/runtime";
import { getRemotesConfig } from "./utils/getRemotesConfig";

init({
  name: "host",
  remotes: await getRemotesConfig(),
  shared: {
    react: {
      version: "19.0.0",
      scope: "default",
      lib: () => React,
      shareConfig: {
        singleton: true,
        requiredVersion: "^19.0.0",
      },
    },
    "react-dom": {
      version: "19.0.0",
      scope: "default",
      lib: () => ReactDOM,
      shareConfig: {
        singleton: true,
        requiredVersion: "^19.0.0",
      },
    },
    "react-router-dom": {
      version: "6.27.0",
      scope: "default",
      lib: () => ReactRouterModule,
      shareConfig: {
        singleton: true,
        requiredVersion: "^6.27.0",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
