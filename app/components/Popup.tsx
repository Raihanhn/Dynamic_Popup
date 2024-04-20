"use client";
import { Fragment, useState } from "react";
import Modal from "./Modal";
import { MdAddCircle } from "react-icons/md";
import Modal2 from "./Modal2";
import { HiMinusCircle } from "react-icons/hi";

const Popup = () => {
  const [showModal, setShowModal] = useState(true);
  const [showModal2, setShowModal2] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      {/* The modal */}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="flex items-center justify-between p-2   ">
          <div className=" text-[12px] lg:text-[18px] font-semibold lg:font-semibold text-[#73327E]  ">
            WHAT IS CYTALUX®?
          </div>
          <div className=" text-[12px] lg:text-[18px] font-semibold lg:font-semibold text-[#73327E] pl-[100px] md:pl-[5rem] hidden md:block ">
            IMPORTANT SAFETY INFORMATION
          </div>
          <button
            className=" text-[#73327E] text-xl pl-[100px] md:pl-[100px] lg-[128px] xl:pl-[290px] "
            onClick={() => setShowModal2(true)}
          >
            <MdAddCircle className=" w-6 h-6 " />
          </button>
        </div>
      </Modal>

      <Modal2 isVisible={showModal2} onClose={() => setShowModal2(false)}>
        <div className="flex items-center justify-between p-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, porro
          ullam maiores beatae harum aspernatur?
        </div>
        <button
          className=" text-[#73327E] text-xl pl-[100px] md:pl-[100px] lg-[128px] xl:pl-[290px] "
          onClick={() => setShowModal2(false)}
        >
          <HiMinusCircle className=" w-6 h-6 " />
        </button>
      </Modal2>
    </Fragment>
  );
};

export default Popup;
