import { useEffect, useState } from "react";

export const usePrefersColor = (changes: boolean): boolean[] => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(false);
  // const [colorThemeDefinedByUser, setColorThemeDefinedByUser] = useState<
  //   null | string
  // >(null);

  // console.log("=== usePrefersColor callback ===");
  // console.log(colorThemeDefinedByUser);
  // console.log("====================================");

  useEffect(() => {
    const themeColor = window.localStorage.getItem("themeColor");
    const colorThemeDefinedByUser = window.localStorage.getItem(
      "colorThemeDefinedByUser"
    );
    // console.log("themeColor: ", themeColor);
    // console.log("DefinedByUser: ", DefinedByUser);
    // const colorThemeDefinedByUser = store.get("colorThemeDefinedByUser");

    const colorThemeDefinedBySistem = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (colorThemeDefinedByUser !== null) {
      const theme = changes ? "dark" : "light";
      document.documentElement.className = theme;
      setIsThemeDark(changes);
      window.localStorage.setItem("themeColor", theme);
      return;
    }

    if (
      colorThemeDefinedBySistem !== null &&
      colorThemeDefinedByUser === null
    ) {
      const theme = colorThemeDefinedBySistem ? "dark" : "light";
      document.documentElement.className = theme;
      setIsThemeDark(colorThemeDefinedBySistem);
      window.localStorage.setItem("themeColor", theme);
      return;
    }

    document.documentElement.className = "light";
    setIsThemeDark(false);
    window.localStorage.setItem("themeColor", "light");
  }, [changes]);

  return [isThemeDark];
};
