"use client";
import React, { Fragment, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { HiMinusCircle } from "react-icons/hi";
import Modem from "./Modem";

const PopupModem = () => {
  const [showModal, setShowModal] = useState(true);
  const [currentState, setCurrentState] = useState("Login");
  // const [secondaryState, setSecondaryState] = useState("");

  return (
    <Fragment>
      <Modem isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className=" md:pl-[50px] lg:pl-[150px] ">
          <div className="bg-[#EDEDED] pt-4 pb-4 pr-4 pl-4 md:w-[100%] lg:w-[90%]  ">
            {currentState === "Login" ? (
              <div className="text-white flex items-center justify-between   ">
                <p className="text-[#73327E]  text-[16px] font-semibold">
                  WHAT IS CYTALUX®?
                </p>

                <p className="text-[#73327E]  md:block hidden text-[16px] font-semibold">
                  IMPORTANT SAFETY INFORMATION
                </p>
                <button
                  className="text-[#73327E] text-xl font-semibold "
                  onClick={() => setCurrentState("Sign Up")}
                >
                  <MdAddCircle className=" w-6 h-6  " />
                </button>
              </div>
            ) : currentState === "model3" ? (
              <div className="flex justify-between ">
                <div className="">Hello</div>
                <button
                  className="text-[#73327E] text-xl font-semibold "
                  onClick={() => setCurrentState("Sign Up")}
                >
                  <MdAddCircle className=" w-6 h-6  " />
                </button>
              </div>
            ) : (
              <div className="flex">
                <div className="">
                  <p className="text-[#73327E] text-[16px] font-semibold ">
                    {" "}
                    WHAT IS CYTALUX®?
                  </p>
                  <p>
                    CYTALUX is an FDA approved prescription medication that is
                    given prior to surgery to adult patients who have ovarian
                    cancer or known or suspected cancer in the lung. It helps
                    surgeons visualize ovarian and lung cancer lesions during
                    surgery.
                  </p>
                </div>
                <div className="">
                  <p className="text-[#73327E] text-[16px] font-semibold">
                    {" "}
                    IMPORTANT SAFETY INFORMATION
                  </p>
                  <p>
                    <b>Infusion-Related Reactions</b> <br /> Adverse reactions
                    including nausea, vomiting, abdominal pain, flushing,
                    allergic reaction, elevation in blood pressure, indigestion,
                    and chest discomfort were reported during the administration
                    of CYTALUX. Your doctor may treat you with antihistamines
                    and/or anti-nausea medication.
                  </p>
                </div>
                <div className="flex">
                  <button
                    className="text-[#73327E] text-xl font-semibold "
                    onClick={() => setCurrentState("Login")}
                  >
                    {" "}
                    <HiMinusCircle className=" w-6 h-6 " />{" "}
                  </button>
                  <button
                    className="text-[#73327E] text-xl font-semibold "
                    onClick={() => setCurrentState("model3")}
                  >
                    {" "}
                    <MdAddCircle className=" w-6 h-6  " />{" "}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* <button
            onClick={() =>
              setCurrentState(currentState === "Sign Up" ? "Login" : "Sign Up")
            }
          >
            {currentState === "Sign Up" ? "Create account" : "Login"}
          </button> */}

          {/* {currentState === "Login" ? (
            <p></p>
          ) : (
            <p>
              {currentState !== "model3" && (
              
              )}
              <span onClick={() => setCurrentState("Login")}>+</span>
            </p>
          )} */}

          {/* Conditionally render the button to switch to "model3" state */}
        </div>
      </Modem>
    </Fragment>
  );
};

export default PopupModem;
