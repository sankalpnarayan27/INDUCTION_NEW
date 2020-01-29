import React from "react";
import "./welcome.scss";
import xebiaLogo from "../../assets/Group_161.svg";
import welcome from "../../assets/welcome.svg";
import { Link } from "react-scroll";

const Welcome = () => {
  return (
    <div className="welcome-container screen-container d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-center justify-content-lg-between align-items-center flex-fill flex-wrap">
        <div className="d-flex flex-column justify-content-start p-4">
          <div className="welcome-title">
            <span>Welcome To</span>
          </div>
          <div className="mb-3">
            <img alt="welcome" className="mw-100" src={welcome} />
          </div>
          <div>
            <Link to="born-in-netherland" spy={true} smooth={true} duration={1000} className="btn grey2-bg">We were born in</Link>
          </div>
        </div>
        <div className="d-flex align-items-center group-image p-4">
          <img alt="xebia" src={xebiaLogo} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
