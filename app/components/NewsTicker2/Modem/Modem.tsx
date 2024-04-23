import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modem = ({ isVisible, onClose, children }: ModalProps) => {
  if (!isVisible) return null;
  return (
    <div className="flex items-center justify-center p-12 ">
      <div className=" py-[10px]  bg-[#EDEDED] fixed bottom-0 pl-[10px] pr-[40px] ">
        <div className=""> {children} </div>
      </div>
    </div>
  );
};

export default Modem;
