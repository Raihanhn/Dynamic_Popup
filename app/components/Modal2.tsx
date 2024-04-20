import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal2({ isVisible, onClose, children }: ModalProps) {
  if (!isVisible) return null;

  return (
    <div className="flex items-center justify-center  ">
      {/* <div className="  py-[40px]  bg-[EDEDED] bg-green-500 fixed bottom-0 pl-[120px] pr-[40px] "> */}
      <div className="  py-[40px]  bg-[EDEDED] bg-green-500  pl-[120px] pr-[40px] ">
        {" "}
        {children}{" "}
      </div>
    </div>
  );
}
