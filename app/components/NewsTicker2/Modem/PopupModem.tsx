"use client";
import React, { Fragment, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { HiMinusCircle } from "react-icons/hi";
import Modem from "./Modem";

const PopupModem = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <Fragment>
      <Modem isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="flex items-center justify-between p-2   ">
          <div
            className=" text-[12px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-semibold  lg:font-semibold text-[#73327E]
           pr-[60px] md:pr-[80px]  lg:pr-[100px] 2xl:pr-[200px] "
          >
            WHAT IS CYTALUX®?
          </div>
          <div
            className=" text-[12px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-semibold lg:font-semibold text-[#73327E]  
            hidden md:block pl-[60px] md:pr-[80px] pr-[60px] md:pl-[80px] lg:pr-[100px] 2xl:pr-[100px] lg:pl-[100px] 2xl:pl-[100px] "
          >
            IMPORTANT SAFETY INFORMATION
          </div>
          <button
            className=" text-[#73327E] text-xl pl-[60px] md:pl-[80px] lg:pl-[100px] 2xl:pl-[200px] "
            // onClick={() => setShowModal2(true)}
          >
            <MdAddCircle className=" w-6 h-6  " />
          </button>
        </div>
      </Modem>
    </Fragment>
  );
};

export default PopupModem;
