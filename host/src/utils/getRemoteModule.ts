import { loadRemote } from "@module-federation/enhanced/runtime";
import { lazy } from "react";

export const getRemoteModule = (path: string) => {
    return lazy(async () => {
        const remoteModule = await loadRemote<any>(path);
        return { default: remoteModule };
    });
};