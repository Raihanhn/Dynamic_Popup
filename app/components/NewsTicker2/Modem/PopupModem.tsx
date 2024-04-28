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
                <div className=" leading-[26px] ">
                  {/* <p className="text-[12px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-semibold  text-[#73327E]"> */}
                  <p className=" font-semibold  text-[#73327E]">
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
                  <p className=" font-semibold  text-[#73327E]">
                    IMPORTANT SAFETY INFORMATION
                  </p>
                  <p>
                    <b> Infusion-Related Reactions</b>
                    <br />
                    Adverse reactions including nausea, vomiting, abdominal
                    pain, flushing, indigestion, chest discomfort, and allergic
                    reactions were reported during the administration of
                    CYTALUX. Your doctor may treat you with antihistamines
                    and/or anti-nausea medication.
                  </p>
                  <p>
                    <b> Risk of Misinterpretation</b>
                    <br />
                    Errors may occur with the use of CYTALUX. Sometimes cells
                    may light up even if they are not cancerous or those that
                    are cancerous may not light up. Also, non-cancerous cells
                    from other areas may light up, such as areas of the bowel,
                    kidneys, lymph nodes, lungs, and inflamed tissue.
                  </p>
                  <p>
                    <b>Pregnancy</b>
                    <br />
                    CYTALUX may cause fetal harm when administered to a pregnant
                    woman. There are no available human data to evaluate for a
                    drug-associated risk of major birth defects, miscarriage, or
                    other adverse maternal or fetal outcomes. Contact your
                    healthcare provider with a known or suspected pregnancy.
                  </p>
                  <p>
                    <b>Folate Supplementation Usage</b>
                    <br />
                    Folic acid may reduce the detection of cancerous tissue with
                    CYTALUX. Patients should stop taking folate, folic acid, or
                    folate-containing supplements 48 hours before administration
                    of CYTALUX.
                  </p>
                  <p>
                    <b> Adverse Reactions</b>
                    <br />
                    The most common side effects of CYTALUX reported in clinical
                    trials were nausea (13%), vomiting (5%), abdominal pain
                    (2%), flushing (2%), other infusion-related reactions (2%),
                    allergic reaction (2%), elevation in blood pressure (1%),
                    indigestion (1%), and chest discomfort (1%) during
                    administration.
                  </p>
                  <p>
                    Tell your healthcare provider if you have any side effect
                    that bothers you or that does not go away. These are not all
                    the possible side effects of CYTALUX. For more information,
                    ask your healthcare provider.
                  </p>
                  <p>
                    Call your doctor for medical advice about side effects. You
                    may report side effects to On Target Laboratories at
                    1-844-434-9333 or FDA at 1-800-FDA-1088 or
                    www.fda.gov/medwatch.
                  </p>
                  <p>See full Prescribing Information for more details</p>
                </div>
                <button
                  className="text-[#73327E] text-xl font-semibold "
                  onClick={() => setCurrentState("Sign Up")}
                >
                  <HiMinusCircle className=" w-6 h-6 " />
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
