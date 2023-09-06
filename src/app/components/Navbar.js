"use client";

import { useState } from "react";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);
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
            <div className="pt-1 w-full bg-violet-50"></div>
            <div className="pt-1 w-2/3 bg-violet-50"></div>
            <div className="pt-1 w-1/3 bg-violet-50"></div>
          </div>
          <a
            href="/"
            className="hover:text-violet-500 transition-all ease-in-out sora text-xl semibold"
          >
            <span className="text-violet-500">@</span>codevs
          </a>
          <div className="hidden text-sm md:flex items-center poppins justify-between w-3/12">
            <a href="/despre">Despre Noi</a>
            <a href="/servicii">Servicii</a>
            <a href="/blog">News</a>
          </div>
          <button className="px-2 py-1 text-sm md:text-md md:px-3 md:py-1 poppins bg-violet-500/50 rounded-xl border-2  border-violet-500 hover:bg-violet-500/80 transition-all ease-in-out">
            Meeting Gratuit
          </button>
        </>
      )}
      {sideBar && (
        <div className="absolute  w-full top-0 left-0 h-screen">
          <div className="w-9/12 px-4 py-6  bg-gray-950 h-screen">
            <div className="w-full flex items-center justify-between">
              <a
                href="/"
                className="inline-block hover:text-violet-500 transition-all ease-in-out sora text-xl semibold"
              >
                <span className="text-violet-500">@</span>codevs
              </a>
              <p
                className="px-3 py-1 semibold poppins bg-gray-800 rounded-md"
                onClick={() => {
                  setSideBar(!sideBar);
                }}
              >
                x
              </p>
            </div>
            <div className="flex flex-col w-full mt-6 text-violet-50 gap-4  items-start poppins">
              <a href="/despre" className="py-2">
                Despre Noi
              </a>
              <a href="/servicii" className="py-2">
                Servicii
              </a>
              <a href="/blog" className="py-2">
                News
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
