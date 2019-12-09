import React from "react";
import "./bornInNetherlands.scss";
import bornImage from "../../assets/images/born.svg";
import { Link } from "react-scroll";
const BornInNetherlands = () => {
  return (
    <div id="born-in-netherland" className="born-container screen-container d-flex flex-column justify-content-center align-items-center">
      <div>
        <img alt="born" className="born-img w-100 mb-4" src={bornImage} />
      </div>
      <div>
        <Link to="pillars" spy={true} smooth={true} duration={1000} className="btn grey2-bg mt-4">Xebia Values</Link>
      </div>
    </div>
  );
};

export default BornInNetherlands;
