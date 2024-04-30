import React from "react";
import "./imghover.css";
import batman from "../../assets/batman.jpg";
import spiderman from "../../assets/spiderman.png";
import Image from "next/image";

const Imghover = () => {
  return (
    <div>
      <div className="box">
        <Image
          className="img"
          src={batman}
          alt="batman"
          width={300}
          height={300}
        />
        <Image
          className="img hover-img "
          src={spiderman}
          alt="spiderman"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Imghover;
