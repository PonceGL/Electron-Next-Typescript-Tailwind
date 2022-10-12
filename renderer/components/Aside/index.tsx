import React, { FC, useState, useEffect } from "react";

//Components
import Profile from "./Prifile";
import Menu from "./Menu";
import { LogoMJM } from "../../common/SVG/LogoMJM";

//Hooks
import { usePrefersColor } from "../../hooks/usePrefersColor";

const Aside: FC = () => {
  const [changeThemeColor, setChangeThemeColor] = useState<boolean>(false);
  const [isThemeDark] = usePrefersColor(changeThemeColor);

  return (
    <aside
      className="w-[0] hidden md:w-full h-full sm:p-2 md:p-4 xl:p-8 md:flex flex-col justify-start items-center bg-white dark:bg-slate-800 transition-all duration-300"
      id="aside"
    >
      <div className="w-full mb-10 flex flex-col justify-start items-center transition-all duration-300 ">
        <div className="w-full max-w-[12rem] flex justify-center items-center">
          <LogoMJM dark={isThemeDark} />
        </div>
        <Profile
          themeDark={changeThemeColor}
          setThemeDark={setChangeThemeColor}
        />
      </div>
      <Menu />
    </aside>
  );
};

export default Aside;
