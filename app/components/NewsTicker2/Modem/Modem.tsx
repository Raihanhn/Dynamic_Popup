import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modem = ({ isVisible, onClose, children }: ModalProps) => {
  if (!isVisible) return null;
  return (
    <div className=" fixed bottom-0 p-1 bg-green-500  w-[80%]  ">
      {/* <div className="bg-orange-600 pr-[80px] pl-20    p-1 "> {children} </div> */}
      {children}
    </div>
  );
};

export default Modem;
