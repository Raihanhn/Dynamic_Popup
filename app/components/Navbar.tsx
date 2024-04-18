import React from "react";
import { GiHummingbird } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="py-5 px-0 flex justify-between items-center fixed z-50 bg-white top-0 w-[80%] mx-auto">
      <GiHummingbird className=" w-[50px] h-[50px] text-blue-500" />
      <div className="item">Item</div>
      <div className="icons">Icon</div>
    </div>
  );
};

export default Navbar;
