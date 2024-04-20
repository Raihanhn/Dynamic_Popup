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
            onClick={() => setShowModal2(true)}
          >
            <MdAddCircle className=" w-6 h-6  " />
          </button>
        </div>
      </Modal>

      <Modal2 isVisible={showModal2} onClose={() => setShowModal2(false)}>
        <div className="flex items-center justify-between p-2 bg-[#EDEDED]  ">
          <div className=" ">
            <p className="text-[12px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-semibold  text-[#73327E]">
              {" "}
              WHAT IS CYTALUX®?
            </p>
            <p className=" pr-[50px] xl:pr-[10px] 2xl:pr-[158px]">
              CYTALUX is an FDA approved prescription medication that is given
              prior to surgery to adult patients who have ovarian cancer or
              known or suspected cancer in the lung. It helps surgeons visualize
              ovarian and lung cancer lesions during surgery.
            </p>
          </div>
          <div className=" hidden md:block ">
            <p className="text-[12px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-semibold  text-[#73327E]  ">
              {" "}
              IMPORTANT SAFETY INFORMATION
            </p>
            <p className="pr-[8px] ">
              <b>Infusion-Related Reactions</b> <br /> Adverse reactions
              including nausea, vomiting, abdominal pain, flushing, allergic
              reaction, elevation in blood pressure, indigestion, and chest
              discomfort were reported during the administration of CYTALUX.
              Your doctor may treat you with antihistamines and/or anti-nausea
              medication.
            </p>
          </div>
          <div className="flex mt-[-135px]">
            <button
              className="text-[#73327E] text-xl  "
              onClick={() => setShowModal2(false)}
            >
              <MdAddCircle className=" w-6 h-6  " />
            </button>
            <button
              className="text-[#73327E] text-xl  "
              onClick={() => setShowModal2(false)}
            >
              <HiMinusCircle className=" w-6 h-6 " />
            </button>
          </div>
        </div>
      </Modal2>
    </Fragment>
  );
};

export default Popup;
