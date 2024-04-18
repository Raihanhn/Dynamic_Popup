import React from "react";
import { GiHummingbird } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="py-5 px-0 flex justify-between items-center fixed z-50 bg-white top-0 w-[80%] mx-auto">
      <GiHummingbird className=" w-[30px] h-[30px] md:w-[40px] lg:w-[50px] md:h-[40px] lg:h-[50px] text-blue-500" />
      <ul className="flex md:gap-[20px] sm:gap-[10px]  lg:gap-[30px] text-gray-700 md:text-[14px] lg:text-[18px] ">
        <li>Home</li>
        <li>Pages</li>
        <li>About us</li>
        <li>Category</li>
        <li>Contact</li>
      </ul>
      <div className="icons">
        <div className=" md:max-w-sm lg:max-w-md mx-auto">
          <div className="relative flex items-center sm:w-[60%] sm:h-8 md:w-[80%] lg:w-full md:h-12 rounded-lg focus-within:shadow-lg border border-blue-500 bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
      </div>
    </div>
  );
};

export default Navbar;
