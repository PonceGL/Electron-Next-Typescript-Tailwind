import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Next: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next - MJM Paquetería</title>
      </Head>
      <main className="w-full h-full min-h-screen py-4 pr-2 bg-white dark:bg-slate-800 transition-all duration-300">
        <section className="w-full h-full flex flex-col justify-start items-center sm:p-8 sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-8 bg-slate-200 dark:bg-slate-700 sm:rounded-3xl sm:overflow-hidden transition-all duration-300">
          <div className="w-[93%] p-4 m-4 sm:w-full sm:m-0 sm:h-full sm:col-span-3 lg:shadow-2xl bg-gray-900 dark:bg-black rounded-3xl overflow-hidden transition-all duration-300">
            <div className="grid grid-col-1 text-2xl w-full text-center">
              <img className="w-28 ml-auto mr-auto" src="/images/logo.png" />
              <p className="text-slate-50 dark:text-slate-400">⚡ MJM ⚡</p>
            </div>
            <div className="mt-1 w-full flex-wrap flex justify-center">
              <Link href="/home">
                <a className="btn-blue">Go to home page</a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Next;
