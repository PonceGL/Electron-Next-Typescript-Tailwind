import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

//Utils
import { showNotification } from "../utils/showNotification";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inicio - MJM Paquetería</title>
      </Head>
      <main className="w-full h-full min-h-screen py-4 bg-white dark:bg-slate-800">
        <section className="w-full h-full flex flex-col justify-start items-center sm:p-8 sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-8 bg-slate-200 dark:bg-slate-700 sm:rounded-3xl sm:overflow-hidden transition-all duration-300">
          <div className="w-[93%] p-4 m-4 sm:w-full sm:m-0 sm:h-full sm:col-span-1 lg:shadow-2xl bg-gray-900 dark:bg-black rounded-3xl overflow-hidden"></div>
          <div className="w-[93%] p-4 m-4 sm:w-full sm:m-0 sm:h-full sm:col-span-2 lg:shadow-2xl bg-blue-400 dark:bg-blue-500 rounded-3xl overflow-hidden"></div>
          <div className="w-[93%] p-4 m-4 sm:w-full sm:m-0 sm:h-full sm:col-span-3 lg:shadow-2xl bg-orange-600 dark:bg-gray-500 rounded-3xl overflow-hidden"></div>

          {/* <div className="mt-1 w-full flex-wrap flex justify-center">
            <Link href="/next">
              <a className="btn-blue">Go to next page</a>
            </Link>
          </div>
          <div className="mt-1 w-full flex-wrap flex justify-center">
            <button
              className="btn-blue"
              type="button"
              onClick={() =>
                // showNotification()
                showNotification({
                  title: "Wellcome 🔔",
                  body: "This is a sample notification.",
                })
              }
            >
              Launch Notigfication
            </button>
          </div> */}
        </section>
      </main>
    </>
  );
};

export default Home;
