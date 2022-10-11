import React, { FC, useState, useEffect } from "react";

//Components
import Profile from "./Prifile";
import Menu from "./Menu";

const Aside: FC = () => {
  return (
    <aside
      className="w-[0] hidden md:w-full h-full sm:p-2 md:p-4 xl:p-8 md:flex flex-col justify-start items-center bg-white dark:bg-slate-800 transition-all duration-300 "
      id="aside"
    >
      <div className="w-full mb-10 flex flex-col justify-start items-center transition-all duration-300 ">
        <h1 className="my-8 text-3xl font-extrabold text-slate-800 dark:text-slate-400">
          MJM
        </h1>
        <Profile />
      </div>
      <Menu />
    </aside>
  );
};

export default Aside;
