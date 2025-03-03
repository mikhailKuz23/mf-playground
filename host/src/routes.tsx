import { loadRemote } from "@module-federation/enhanced/runtime";
import { createElement, lazy } from "react";
import { RouteProps } from "react-router-dom";

const getRemoteModule = (path: string) => {
  return lazy(async () => {
    const remoteModule = await loadRemote<any>(path);
    return { default: remoteModule };
  });
};

export const routes: RouteProps[] = [
  { path: "/", element: <>Host Application</> },
  {
    path: "/home",
    element: <>{createElement(getRemoteModule("home/Home"))}</>,
  },
];
