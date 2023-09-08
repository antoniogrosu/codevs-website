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
          <div className="hidden text-sm md:flex items-center poppins justify-between w-3/12">
            <a href="/despre">Despre Noi</a>
            <a href="/servicii">Servicii</a>
            {/* <a href="/blog">News</a> */}
          </div>
          <button className="px-2 py-1 text-sm md:text-md md:px-3 md:py-1 poppins bg-violet-500/50 rounded-xl border-2  border-violet-500 hover:bg-violet-500/80 transition-all ease-in-out">
            Meeting Gratuit
          </button>
        </>
      )}
      {sideBar && (
        <div className="absolute  w-full top-0 left-0  h-screen">
          <div className="w-9/12 px-8 py-6  bg-gray-950 h-screen flex flex-col justify-between">
            <div>
              <div className="w-full flex items-center justify-between">
                <a
                  href="/"
                  className="inline-block hover:text-violet-500 transition-all ease-in-out sora text-xl semibold"
                >
                  <span className="text-violet-500">@</span>codevs
                </a>

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
                <a
                  href="/despre"
                  className="py-2 text-violet-50  focus:bg-gray-800 w-full flex sora items-center justify-start"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-4"
                  >
                    <path
                      d="M12.0225 0C5.39699 0 0 4.92255 0 11.0558C0 14.0689 1.33375 16.7744 3.47151 18.7793C3.1484 19.8128 2.42705 20.6284 1.69818 21.2551C1.30557 21.5919 0.929869 21.8799 0.631183 22.1583C0.48278 22.2965 0.347526 22.4366 0.240451 22.6099C0.133375 22.7831 0.0375704 23.0303 0.105197 23.295L0.16531 23.4974L0.33062 23.6064C0.950532 23.9763 1.7226 24.0405 2.55479 23.9801C3.38698 23.9198 4.2943 23.7213 5.18472 23.4663C6.91296 22.9719 8.536 22.2673 9.39261 21.878C10.2379 22.061 11.087 22.1738 11.9775 22.1738C18.603 22.1738 24 17.2513 24 11.1181C24 4.98678 18.65 0 12.0225 0ZM12.0225 0.996577C18.1879 0.996577 23.0382 5.58823 23.0382 11.1181C23.0382 16.644 18.1446 21.1773 11.9775 21.1773C11.0983 21.1773 10.2699 21.0877 9.4377 20.897L9.27239 20.8503L9.13713 20.9281C8.33312 21.296 6.63306 22.0142 4.92924 22.5009C4.07639 22.7442 3.2273 22.931 2.49468 22.9836C2.00438 23.0186 1.70194 22.8979 1.36756 22.8123C1.60614 22.6001 1.933 22.3471 2.31434 22.0181C3.15216 21.298 4.15717 20.2955 4.50845 18.8104L4.58359 18.499L4.34314 18.3121C2.22417 16.4513 0.961803 13.8898 0.961803 11.0558C0.961803 5.52984 5.85535 0.996577 12.0225 0.996577ZM11.4515 5.88604C11.3068 5.88604 11.2561 5.97363 11.2561 6.07289V7.3809C11.2561 7.53078 11.3557 7.56776 11.4515 7.56776H12.5936C12.7383 7.56776 12.789 7.48017 12.789 7.3809V6.07289C12.789 5.92302 12.6894 5.88604 12.5936 5.88604H11.4515ZM11.4966 9.5142C11.3519 9.5142 11.3012 9.61736 11.3012 9.71663V16.3968C11.3012 16.5467 11.4008 16.5992 11.4966 16.5992V16.646H12.5936C12.7383 16.646 12.789 16.5428 12.789 16.4435V9.71663C12.789 9.56675 12.6894 9.5142 12.5936 9.5142H11.4966Z"
                      fill="#F5F3FF"
                    />
                  </svg>
                  Despre Noi
                </a>

                <a
                  href="/servicii"
                  className="py-2  focus:bg-gray-800 sora  w-full text-violet-50 flex items-center justify-start"
                >
                  <svg
                    className="w-5 h-5 mr-4 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M6 1v4a1 1 0 0 1-1 1H1m5 8.514L4 12.5l2-2m4 4.014 2-2.014-2-2m5 7.5a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16Z"
                    />
                  </svg>
                  Servicii
                </a>
                {/* <a href="/blog" className="py-2">
                News
              </a> */}
              </div>
            </div>
            {alert && (
              <div className="p-4 poppins text-violet-50/50 border-2 border-violet-500 bg-violet-500/20 h-auto rounded-xl">
                <div className="w-full flex justify-end">
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
                <p className="w-full sm:w-3/4">
                  Blog-ul Codevs va fi disponibil in curand! Daca iti doresti sa
                  fii primul care vede postarile noastre, inscrie-te in
                  newsletter-ul nostru!
                </p>
                <button className="px-4 flex mt-2 py-1 rounded-lg border-2 sora bg-violet-500  border-violet-900/50 text-gray-50">
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
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
