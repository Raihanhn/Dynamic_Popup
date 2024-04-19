"use client";
import { Fragment, useState } from "react";
import Modal from "./Modal";

const Popup = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <Fragment>
      {/* Your main content */}
      <div className=" p-10 text-center ">
        <button
          onClick={() => setShowModal(true)}
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 mt-2 "
        >
          Text Modal
        </button>
      </div>

      {/* The modal */}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {/* <div className="p-6 bg-[#EDEDED] fixed bottom-0 left-0 right-0"></div> */}
        <div className="py-[10px] px-[25px] bg-[#EDEDED] fixed bottom-0 left-[350px] right-[350px] flex ">
          <div className=" pt-2 pb-2 text-[18px] font-semibold text-[#73327E] w-[41%] ">
            WHAT IS CYTALUX®?
          </div>
          <div className=" pt-2 pb-2 text-[18px] font-semibold text-[#73327E] ">
            IMPORTANT SAFETY INFORMATION
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Popup;
