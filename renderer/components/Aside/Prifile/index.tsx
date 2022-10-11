import React, { FC, useState, useEffect } from "react";

//Icons
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

//Hooks
import { usePrefersColor } from "../../../hooks/usePrefersColor";

const Profile: FC = () => {
  const [themeDark, setThemeDark] = useState<boolean>(false);
  // const isThemeDark = usePrefersColor(themeDark);

  useEffect(() => {
    if (window) {
      const themeColor = window.localStorage.getItem("themeDark");
      if (themeColor !== null && themeColor === "true") {
        setThemeDark(true);
      } else {
        setThemeDark(false);
      }
    }

    // return () => {
    //   second
    // }
  }, []);

  console.log("====================================");
  console.log(themeDark);
  console.log("====================================");

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="sm:w-20 md:w-28 aspect-square relative">
        <button
          type="button"
          className="w-10 aspect-square rounded-full flex justify-center items-center bg-slate-800 dark:bg-slate-200 absolute bottom-0 -right-2"
        >
          {themeDark ? (
            <SunIcon
              className="w-6 aspect-square stroke-slate-200 dark:stroke-slate-800"
              aria-hidden="true"
              onClick={() => {
                document.documentElement.className = "light";
                setThemeDark(false);
              }}
            />
          ) : (
            <MoonIcon
              className="w-6 aspect-square stroke-slate-200 dark:stroke-slate-800"
              aria-hidden="true"
              onClick={() => {
                document.documentElement.className = "dark";
                setThemeDark(true);
              }}
            />
          )}
        </button>
        <div className="w-full aspect-square rounded-full bg-slate-500 shadow-2xl" />
      </div>
      <div className="w-full mt-8 flex flex-col justify-center items-center">
        <h3 className="w-full text-left lg:text-center text-xl font-bold text-slate-800 dark:text-slate-400 transition-all duration-300">
          Jonathan Roy
        </h3>
        <p className="w-full mt-4 text-left lg:text-center text-base text-slate-800 dark:text-slate-400 transition-all duration-300">
          CEO
        </p>
      </div>
    </div>
  );
};

export default Profile;
