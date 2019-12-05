import React from "react";
import "./bornInNetherlands.scss";
import bornImage from "../../assets/images/born.svg";
const BornInNetherlands = () => {
  return (
    <div className="born-container screen-container d-flex flex-column justify-content-center align-items-center">
      <div>
        <img alt="born" className="born-img w-100 mb-4" src={bornImage} />
      </div>
      <div>
        <button className="btn grey2-bg mt-4">With 4 Pillars</button>
      </div>
    </div>
  );
};

export default BornInNetherlands;
