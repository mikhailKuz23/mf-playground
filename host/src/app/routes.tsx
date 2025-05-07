import { createElement } from "react";
import { RouteProps } from "react-router-dom";
import { getRemoteModule } from "../utils/getRemoteModule";

export const routes: RouteProps[] = [
  { path: "/", element: <>Host Application</> },
  {
    path: "/home/*",
    element: <>{createElement(getRemoteModule("home/Home"))}</>,
  },
];
