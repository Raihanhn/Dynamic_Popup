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
        <div className="bg-purple-600">
          <div className="">
            {currentState === "Login" ? (
              <>
                <div className="text-white flex justify-between ">
                  <h2>WHAT IS CYTALUX®?</h2>
                  <h2>IMPORTANT SAFETY INFORMATION</h2>
                </div>
              </>
            ) : currentState === "model3" ? (
              <div className="text-blue-600">Another Model</div>
            ) : (
              <div className="text-orange-300">Hello world!</div>
            )}
          </div>
          {/* <button
            onClick={() =>
              setCurrentState(currentState === "Sign Up" ? "Login" : "Sign Up")
            }
          >
            {currentState === "Sign Up" ? "Create account" : "Login"}
          </button> */}

          {currentState === "Login" ? (
            <p>
              <span onClick={() => setCurrentState("Sign Up")}>-</span>
            </p>
          ) : (
            <p>
              {currentState !== "model3" && (
                <button onClick={() => setCurrentState("model3")}>
                  Switch to Model 3
                </button>
              )}
              <span onClick={() => setCurrentState("Login")}>+</span>
            </p>
          )}

          {/* Conditionally render the button to switch to "model3" state */}
        </div>
      </Modem>
    </Fragment>
  );
};

export default PopupModem;
