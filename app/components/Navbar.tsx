"use client";
import React, { useState } from "react";
import { GiHummingbird } from "react-icons/gi";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className=" mt-[48px] py-5 px-0 flex justify-between items-center fixed z-50 bg-white top-0 w-[80%] mx-auto">
      <GiHummingbird className=" w-[40px] h-[40px] md:w-[40px] lg:w-[50px] md:h-[40px] lg:h-[50px] text-blue-500" />
      <div className=" ">
        <ul
          className={` cursor-pointer absolute ml-[-47px] sm:ml-[90px] mt-[27px] px-20 py-28 md:px-0 md:py-0 bg-yellow-300 md:bg-inherit mb-14 md:mt-[-12px] md:ml-[-160px] md:flex  md:text-[16px] lg:text-[18px] md:gap-[15px] lg:gap-[30px] ${
            navbar ? " md:gap-[20px] text-gray-700  block" : "hidden"
          } `}
        >
          <li className=" mb-5 md:mb-0 " onClick={() => setNavbar(!navbar)}>
            Home
          </li>
          <li className=" mb-5 md:mb-0 " onClick={() => setNavbar(!navbar)}>
            Pages
          </li>
          <li className=" mb-5 md:mb-0 " onClick={() => setNavbar(!navbar)}>
            About us
          </li>
          <li className=" mb-5 md:mb-0 " onClick={() => setNavbar(!navbar)}>
            Category
          </li>
          <li className=" mb-5 md:mb-0 " onClick={() => setNavbar(!navbar)}>
            Contact
          </li>
        </ul>
      </div>
      <div className="icons">
        <div className="md:block hidden  lg:max-w-md mx-auto">
          <div className="relative flex items-center sm:w-[60%] sm:h-8 md:w-[80%] lg:w-full md:h-12 rounded-lg focus-within:shadow-lg border border-blue-500 bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>
        {/* HAMBURGER BUTTON FOR MOBILE */}
        {/* <div className="md:hidden"> */}
        <div className="md:hidden  ">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <XMarkIcon className=" h-6 w-6'" />
            ) : (
              <Bars3Icon className=" h-6 w-6'" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
