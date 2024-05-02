import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal2({ isVisible, onClose, children }: ModalProps) {
  if (!isVisible) return null;

  return (
    <div className="flex items-center justify-center p-12 ">
      <div className="  py-[10px]   pl-[70px] pr-[70px]   lg:pl-[150px] lg:pr-[150px]  xl:pl-[250px] xl:pr-[250px] 2xl:pl-[350px] 2xl:pr-[350px] ">
        {children}
      </div>
    </div>
  );
}
