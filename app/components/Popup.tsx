"use client";
import { Fragment, useState } from "react";
import Modal from "./Modal";
import { MdAddCircle } from "react-icons/md";
import Modal2 from "./Modal2";
import { HiMinusCircle } from "react-icons/hi";
import Modal3 from "./Modal3";

const Popup = () => {
  const [showModal, setShowModal] = useState(true);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

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
              onClick={() => setShowModal3(true)}
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

      <Modal3 isVisible={showModal3} onClose={() => setShowModal3(false)}>
        <div className="  pl-[140px] pt-[40px] pb-[70px] pr-[140px] bg-[#EDEDED]  ">
          <div className=" flex justify-end items-end ">
            <button
              className="text-[#73327E] text-xl    "
              onClick={() => setShowModal3(false)}
            >
              <HiMinusCircle className=" w-6 h-6 " />
            </button>
          </div>
          <div className=" leading-[26px] ">
            <p className="text-[12px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-semibold  text-[#73327E]">
              {" "}
              WHAT IS CYTALUX®?
            </p>
            <p>
              CYTALUX is an FDA approved prescription medication that is given
              prior to surgery to adult patients who have ovarian cancer or
              known or suspected cancer in the lung. It helps surgeons visualize
              ovarian and lung cancer lesions during surgery.
            </p>
            <p className="text-[12px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-semibold  text-[#73327E]">
              IMPORTANT SAFETY INFORMATION
            </p>
            <p>
              <b> Infusion-Related Reactions</b>
              <br />
              Adverse reactions including nausea, vomiting, abdominal pain,
              flushing, indigestion, chest discomfort, and allergic reactions
              were reported during the administration of CYTALUX. Your doctor
              may treat you with antihistamines and/or anti-nausea medication.
            </p>
            <p>
              <b> Risk of Misinterpretation</b>
              <br />
              Errors may occur with the use of CYTALUX. Sometimes cells may
              light up even if they are not cancerous or those that are
              cancerous may not light up. Also, non-cancerous cells from other
              areas may light up, such as areas of the bowel, kidneys, lymph
              nodes, lungs, and inflamed tissue.
            </p>
            <p>
              <b>Pregnancy</b>
              <br />
              CYTALUX may cause fetal harm when administered to a pregnant
              woman. There are no available human data to evaluate for a
              drug-associated risk of major birth defects, miscarriage, or other
              adverse maternal or fetal outcomes. Contact your healthcare
              provider with a known or suspected pregnancy.
            </p>
            <p>
              <b>Folate Supplementation Usage</b>
              <br />
              Folic acid may reduce the detection of cancerous tissue with
              CYTALUX. Patients should stop taking folate, folic acid, or
              folate-containing supplements 48 hours before administration of
              CYTALUX.
            </p>
            <p>
              <b> Adverse Reactions</b>
              <br />
              The most common side effects of CYTALUX reported in clinical
              trials were nausea (13%), vomiting (5%), abdominal pain (2%),
              flushing (2%), other infusion-related reactions (2%), allergic
              reaction (2%), elevation in blood pressure (1%), indigestion (1%),
              and chest discomfort (1%) during administration.
            </p>
            <p>
              Tell your healthcare provider if you have any side effect that
              bothers you or that does not go away. These are not all the
              possible side effects of CYTALUX. For more information, ask your
              healthcare provider.
            </p>
            <p>
              Call your doctor for medical advice about side effects. You may
              report side effects to On Target Laboratories at 1-844-434-9333 or
              FDA at 1-800-FDA-1088 or www.fda.gov/medwatch.
            </p>
            <p>See full Prescribing Information for more details</p>
          </div>
        </div>
      </Modal3>
    </Fragment>
  );
};

export default Popup;
