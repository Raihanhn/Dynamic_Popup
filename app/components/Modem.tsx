import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modem = ({ isVisible, onClose, children }: ModalProps) => {
  if (!isVisible) return null;
  return <div className=" fixed bottom-0 w-[80%]  ">{children}</div>;
};

export default Modem;
