import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//Icons
import {
  RectangleGroupIcon,
  UsersIcon,
  TruckIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

//Data
const menu = [
  {
    id: 1,
    label: "Dashboard",
    // link: "/next",
    link: "/home",
    icon: (
      <RectangleGroupIcon
        className="w-0 aspect-square mr-0 md:w-4 md:mr-2 stroke-slate-800 dark:stroke-slate-200"
        aria-hidden="true"
      />
    ),
  },
  {
    id: 2,
    label: "Customers",
    link: "/next",
    // link: "/customers",
    icon: (
      <UsersIcon
        className="w-0 aspect-square mr-0 md:w-4 md:mr-2 stroke-slate-800 dark:stroke-slate-200"
        aria-hidden="true"
      />
    ),
  },
  {
    id: 3,
    label: "Solutions",
    link: "/next",
    // link: "/solutions",
    icon: (
      <TruckIcon
        className="w-0 aspect-square mr-0 md:w-4 md:mr-2 stroke-slate-800 dark:stroke-slate-200"
        aria-hidden="true"
      />
    ),
  },
  {
    id: 4,
    label: "Settings",
    link: "/next",
    // link: "/settings",
    icon: (
      <Cog6ToothIcon
        className="w-0 aspect-square mr-0 md:w-4 md:mr-2 stroke-slate-800 dark:stroke-slate-200"
        aria-hidden="true"
      />
    ),
  },
];

const Menu: FC = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full mt-8">
      <nav className="w-full h-full flex flex-col justify-between items-start">
        <ul className="w-full grid grid-cols-1 grid-rows-4 gap-4 justify-items-center place-items-center">
          {menu.map(({ id, label, link, icon }) => (
            <li key={id} className={`w-full flex justify-center items-center `}>
              <Link href={link}>
                <a
                  className={`w-full h-full lg:px-4 xl:px-4 py-2 flex justify-start items-center text-base font-semibold text-slate-800 dark:text-slate-200 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-900 ${
                    router.pathname === link
                      ? "bg-slate-300 dark:bg-slate-900"
                      : "bg-white dark:bg-slate-800"
                  } transition-all duration-300 cursor-pointer`}
                >
                  {icon}
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="#">
          <a className="w-full lg:px-4 xl:px-4 py-2 flex justify-start items-center text-base font-light text-slate-800 dark:text-slate-200 rounded-xl opacity-70 bg-white dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-900 transition-all duration-300 cursor-pointer">
            <ArrowRightOnRectangleIcon
              className="h-4 w-4 mr-2 stroke-slate-800 dark:stroke-slate-200"
              aria-hidden="true"
            />
            Exit
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
