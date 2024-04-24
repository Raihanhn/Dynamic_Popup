import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modem = ({ isVisible, onClose, children }: ModalProps) => {
  if (!isVisible) return null;
  return (
    <div className="">
      <div className=""> {children} </div>
    </div>
  );
};

export default Modem;
