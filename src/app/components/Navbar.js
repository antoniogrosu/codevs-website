"use client";

import { useState } from "react";
import Image from "next/image";
function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const [alert, setAlert] = useState(true);
  return (
    <nav
      className={`text-violet-50 z-10 py-6  px-4  md:px-12 lg:px-16 xl:px-20 2xl:px-24 left-0 justify-between fixed top-0  w-full md:py-2 lg:py-4 flex  items-center ${
        !sideBar ? "bg-gray-950/90 " : ""
      }`}
    >
      {!sideBar && (
        <>
          <div
            className="md:hidden w-1/12 flex flex-col gap-1"
            onClick={() => {
              setSideBar(!sideBar);
            }}
          >
            <svg
              className="w-[24px] h-[24px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h14M1 6h14M1 11h7"
              />
            </svg>
          </div>
          <a
            href="/"
            className="hover:text-violet-500 transition-all ease-in-out sora text-xl semibold"
          >
            <span className="text-violet-500">@</span>codevs
          </a>
          <div className="hidden text-sm md:flex items-center poppins justify-between w-2/12">
            <a href="/despre">Despre Noi</a>
            <a href="/servicii">Servicii</a>
            {/* <a href="/blog">News</a> */}
          </div>
          <a
            href="tel:+40747738250"
            className="px-2 py-1 text-sm md:text-md md:px-3 md:py-1 poppins bg-violet-500/50 rounded-xl border-2  border-violet-500 hover:bg-violet-500/80 transition-all ease-in-out"
          >
            Meeting Gratuit
          </a>
        </>
      )}
      {sideBar && (
        <div className="absolute bg-gray-950/80   w-full top-0 left-0  h-screen">
          <div className="translate-y-1 w-8/12 px-8 py-6 border-r-2 border-violet-500 bg-gray-950 h-screen flex flex-col justify-between gap-48">
            <div>
              <div className="w-full flex items-center justify-between">
                <p className="inline-block sora text-xl semibold">
                  <span className="text-violet-500">@</span>codevs
                </p>

                <svg
                  onClick={() => {
                    setSideBar(!sideBar);
                  }}
                  className="w-[20px] h-[20px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </div>
              <div className="flex flex-col w-full mt-6 text-violet-50 gap-4  items-start poppins">
                <label className="mt-6 sora text-sm tracking-widest text-violet-50/50 ">
                  NAVIGATIE
                </label>
                <a
                  href="/despre"
                  className="py-2 text-violet-50  focus:bg-gray-800 w-full flex sora items-center justify-start"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white mr-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  Despre Noi
                </a>

                <a
                  href="/servicii"
                  className="py-2  focus:bg-gray-800 sora  w-full text-violet-50 flex items-center justify-start"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white mr-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 22"
                  >
                    <path d="M15.458 4a3 3 0 1 0-4.478 2.6A2.6 2.6 0 0 1 8.4 9H6.6a4.57 4.57 0 0 0-2.6.814v-3a3 3 0 1 0-2 0v8.368a3 3 0 1 0 2 0V13.6A2.607 2.607 0 0 1 6.6 11h1.8a4.6 4.6 0 0 0 4.548-4.049A3 3 0 0 0 15.458 4Z" />
                  </svg>
                  Servicii
                </a>
                {/* <a href="/blog" className="py-2">
                News
              </a> */}
                <label className="mt-6 sora text-sm tracking-widest text-violet-50/50 ">
                  CONTACT
                </label>
                <a
                  href="mailto:contact.codevs@gmail.com?subject=Colaborare Proiect"
                  className="underline text-sm hover:text-violet-500 transition-all ease-in-out   text-violet-50"
                >
                  contact.codevs@gmail.com
                </a>
              </div>
            </div>
            {/* {alert && (
              <div className="p-4 poppins text-violet-50/50 border-2 border-violet-500 bg-violet-500/20 h-auto rounded-xl">
                <div className="w-full flex items-center justify-between">
                  <div>
                    <p className="w-full text-violet-50 text-sm">
                      Blog-ul Codevs va fi disponibil in curand!
                      <br />
                      Fii primul care citeste postarile!
                    </p>
                    <button className="px-4 flex mt-6 py-1 rounded-md  sora bg-violet-500   text-gray-50">
                      <svg
                        className="w-[24px] h-[24px] mr-2 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 19 20"
                      >
                        <path d="M18.012 13.453c-.219-1.173-2.163-1.416-2.6-3.76l-.041-.217c0 .006 0-.005-.007-.038v.021l-.017-.09-.005-.025v-.006l-.265-1.418a5.406 5.406 0 0 0-5.051-4.408.973.973 0 0 0 0-.108L9.6 1.082a1 1 0 0 0-1.967.367l.434 2.325a.863.863 0 0 0 .039.1A5.409 5.409 0 0 0 4.992 9.81l.266 1.418c0-.012 0 0 .007.037v-.007l.006.032.009.046v-.01l.007.038.04.215c.439 2.345-1.286 3.275-1.067 4.447.11.586.22 1.173.749 1.074l12.7-2.377c.523-.098.413-.684.303-1.27ZM1.917 9.191h-.074a1 1 0 0 1-.924-1.07 9.446 9.446 0 0 1 2.426-5.648 1 1 0 1 1 1.482 1.343 7.466 7.466 0 0 0-1.914 4.449 1 1 0 0 1-.996.926Zm5.339 8.545A3.438 3.438 0 0 0 10 19.1a3.478 3.478 0 0 0 3.334-2.5l-6.078 1.136Z" />
                      </svg>
                      Inscrie-te
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setAlert(!alert);
                    }}
                  >
                    <svg
                      className="w-[20px] h-[20px] inline-block  text-red-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )} */}
            <div>
              {" "}
              <div className="w-full">
                <Image width={1200} height={0} src={"/codeMenu.svg"} />{" "}
                <p className="text-center sora  text-sm">
                  <Image
                    width={24}
                    height={24}
                    src={"/favicon.png"}
                    className="inline-block m-2"
                  />
                  Inovăm prin cod, transformăm prin tehnologie.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
