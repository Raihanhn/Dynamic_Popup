"use client";
import React, { Fragment, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { HiMinusCircle } from "react-icons/hi";
import Modem from "./Modem";

const PopupModem = () => {
  const [showModal, setShowModal] = useState(true);
  const [currentState, setCurrentState] = useState("Model1");

  return (
    <Fragment>
      <Modem isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="bg-green-400">
          <div className="">
            {currentState === "Login" ? (
              <>
                <div className="text-red-400">h9</div>
              </>
            ) : (
              <div className="text-purple-600">Hello world!</div>
            )}
          </div>
          <button>
            {currentState === "Sign Up" ? "Create account" : "Login"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree the terms of use & privacy policy.</p>
          </div>
          {currentState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>-</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>+</span>
            </p>
          )}
        </div>
      </Modem>
    </Fragment>
  );
};

export default PopupModem;
