export const getRemotesConfig = async () => {
    const homeOverridePath = localStorage.getItem("home-override-path");
    const prodUrl = import.meta.env.VITE_API_URL;
    const bundlePath = ":3001/assets/remoteEntry.js";

    const response: { config: { name: string; entry: string; type: string }[] } =
        await new Promise((resolve) =>
            resolve({
                config: [
                    {
                        name: "home",
                        entry: `${prodUrl}${bundlePath}`,
                        type: "module",
                    },
                ],
            })
        );

    return response.config.map((route) => {
        if (route.name === "home" && homeOverridePath) {
            return { ...route, entry: homeOverridePath };
        }
        return route;
    });
};