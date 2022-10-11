import { useEffect, useState } from "react";

export const usePrefersColor = (changes: boolean): boolean => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(false);

  useEffect(() => {
    if (window.localStorage.theme === "dark") {
      document.documentElement.className = "dark";
      setIsThemeDark(true);
      window.localStorage.setItem("themeDark", "true");
    } else {
      document.documentElement.className = "light";
      setIsThemeDark(false);
      window.localStorage.setItem("themeDark", "false");
    }
  }, [changes]);

  return isThemeDark;
};
