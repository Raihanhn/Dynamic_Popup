import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isVisible, onClose, children }: ModalProps) {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "wrapper") onClose();
  };

  return (
    <div
      className="  fixed inset-0 flex justify-center items-center  "
      id="wrapper"
    >
      <div className=" w-[600px] flex flex-col bg-yellow-400 ">
        <button
          className=" text-[#73327E] text-xl place-self-end "
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="  p-2 rounded "> {children} </div>
      </div>
    </div>
  );
}
