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
        <div className="pl-[150px] ">
          <div className="bg-amber-300 pt-4 pb-4 pr-4 pl-4 w-[90%]  ">
            {currentState === "Login" ? (
              <div className="text-white flex items-center justify-between   ">
                <h2 className=" ">WHAT IS CYTALUX®?</h2>

                <h2 className=" ">IMPORTANT SAFETY INFORMATION</h2>
                <button className="" onClick={() => setCurrentState("Sign Up")}>
                  -
                </button>
              </div>
            ) : currentState === "model3" ? (
              <div className="text-blue-600">Another Model</div>
            ) : (
              <>
                <div className="text-orange-300">Hello world!</div>
                <span onClick={() => setCurrentState("Login")}>+</span>
                <button onClick={() => setCurrentState("model3")}>
                  Switch to Model 3
                </button>
              </>
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
