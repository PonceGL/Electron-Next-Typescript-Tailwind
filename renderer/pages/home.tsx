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
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <img className="ml-auto mr-auto" src="/images/logo.png" />
        <h1>PonceGL with Electron</h1>
        <span>⚡ Electron ⚡</span>
        <span>+</span>
        <span>Next.js</span>
        <span>+</span>
        <span>tailwindcss</span>
        <span>=</span>
        <span>💕 </span>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
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
      </div>
    </>
  );
};

export default Home;
