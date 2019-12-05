import React, { useState, useEffect } from "react";
import "./policy.scss";
import policy from "../../assets/images/policy.svg";
import leaves from "../../assets/icons/sun-umbrella.svg";
import awards from "../../assets/icons/trophy.svg";
import thingsToRemember from "../../assets/icons/sticky.svg";
const Policy = () => {
  const [hidden,onLeaves] = useState(false);
  const hiddenCss = hidden ? "hide-policy-boxes": "";
  const showCss = hidden ? "": "hide-policy-boxes";
  useEffect(_=> {
  
  })
  return (
    <div className="policy-container">
      <section className="image-section">
        <img src={policy} />
        <div className="d-flex align-items-center">
          <p>
            The More Laws, The Less <span>Justice</span>
          </p>
        </div>
      </section>
      <section className="data-section screen-container d-flex flex-column justify-content-stretch align-items-center">
        <header className="mb-4">Policy</header>
        <div className="policy-cards d-flex justify-content-center flex-wrap">
          <div className="text-center flex-fill" onClick={_=> onLeaves(!hidden)}>
            <div className="d-flex flex-column align-items-center card-heading">
              <img width="50px" height="50px" alt="leaves" src={leaves} />
              <span className="mt-2">Leaves</span>
            </div>
            <div className="card-content">
              Morbi consectetur dui in magna condimentum malesuada.
            </div>
          </div>
          <div className={"text-center flex-fill "+ showCss}>
            <div className="d-flex flex-column align-items-center card-heading">
              <img width="50px" height="50px" alt="awards" src={awards} />
              <span className="mt-2">Earned leaves (EL)</span>
            </div>
            <div className="card-content">
                15 in a year, Max 30 accumulated
            </div>
          </div>
          <div className={"text-center flex-fill "+ showCss}>
            <div className="d-flex flex-column align-items-center card-heading">
              <img width="50px" height="50px" alt="awards" src={awards} />
              <span className="mt-2">Casual/ Sick leaves (CSL)</span>
            </div>
            <div className="card-content">
                11 in a year, Lapse at the end of the year
            </div>
          </div>
          <div className={"text-center flex-fill "+ showCss}>
            <div className="d-flex flex-column align-items-center card-heading">
              <img width="50px" height="50px" alt="awards" src={awards} />
              <span className="mt-2">Birthday/ Anniversary (BL)</span>
            </div>
            <div className="card-content">
              1 in a year, For Birthday OR Anniversary
            </div>
          </div>
          <div className={"text-center flex-fill "+ showCss}>
            <div className="d-flex flex-column align-items-center card-heading">
              <img width="50px" height="50px" alt="awards" src={awards} />
              <span className="mt-2">Paternity Leave (PL)</span>
            </div>
            <div className="card-content">
                5 Days within 1 month of child birth, Applicable for first two children
            </div>
          </div>
          <div className={"text-center flex-fill "+ showCss}>
            <div className="d-flex flex-column align-items-center card-heading">
              <img width="50px" height="50px" alt="awards" src={awards} />
              <span className="mt-2">Maternity Leave (ML)</span>
            </div>
            <div className="card-content">
                26 Weeks
            </div>
          </div>
          <div className={"text-center flex-fill "+ hiddenCss}>
            <div className="d-flex flex-column align-items-center card-heading">
              <img width="50px" height="50px" alt="awards" src={awards} />
              <span className="mt-2">Awards</span>
            </div>
            <div className="card-content">
              Morbi consectetur dui in magna condimentum malesuada.
            </div>
          </div>
          <div className={"text-center flex-fill "+ hiddenCss}>
            <div className="d-flex flex-column align-items-center card-heading">
              <img
                width="50px"
                height="50px"
                alt="thingsToRemember"
                src={thingsToRemember}
              />
              <span className="mt-2">Things To Remember</span>
            </div>
            <div className="card-content">
              Morbi consectetur dui in magna condimentum malesuada.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policy;
