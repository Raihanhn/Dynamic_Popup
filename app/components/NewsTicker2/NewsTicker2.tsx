import React from "react";
import "./newsticker2.css";
import Marquee from "react-fast-marquee";

const NewsTicker2 = () => {
  return (
    <div className="announcement">
      <Marquee gradient={false} speed={60} pauseOnHover>
        <div className="announcement-text text">
          <span>Spend $110 or more for free US shipping</span>
          <span>365days risk-free gurantee. Shop Now</span>
        </div>

        <div className="announcement-text text2">
          <span>Spend $110 or more for free US shipping</span>
          <span>365days risk-free gurantee. Shop Now</span>
        </div>
      </Marquee>
    </div>
  );
};

export default NewsTicker2;
