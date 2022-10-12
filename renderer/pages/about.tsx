import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Sobre - MJM Desktop</title>
      </Head>
      <main className="w-full h-full min-h-screen col-span-2 py-4 pr-2 flex flex-col justify-start items-center bg-white dark:bg-slate-800 transition-all duration-300">
        <h1 className="w-full text-center text-lg font-semibold text-slate-800 dark:text-slate-400 transition-all duration-300">
          Sobre - MJM Desktop
        </h1>
      </main>
    </>
  );
};

export default About;
