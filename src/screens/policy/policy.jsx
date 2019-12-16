import React, { useState, useEffect } from "react";
import "./policy.scss";
import policy from "../../assets/images/policy.png";
import leaves from "../../assets/icons/sun-umbrella.svg";
import awards from "../../assets/icons/trophy.svg";
import performance from "../../assets/icons/diamond.svg";
const Policy = () => {
  const [hidden, onLeaves] = useState(false);
  const [ahidden, onAwards] = useState(false);
  const hiddenCss = hidden || ahidden ? "hide-policy-boxes" : "policy-boxes";
  const showCss = hidden ? "policy-boxes" : "hide-policy-boxes";
  const ashowCss = ahidden ? "policy-boxes" : "hide-policy-boxes";
  const visibility = hidden || ahidden ? "": "hide-visibility";
  useEffect(_ => {

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
        <div className={visibility} style={{height: "100%",width:"85%",fontSize: "24px",cursor:"pointer"}} 
        onClick={_ => {
          if(hidden)
            onLeaves(!hidden)
          else
            onAwards(!ahidden)}}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <div className="policy-cards d-flex justify-content-center flex-wrap">
          <div className={hiddenCss}>
            <div className="text-center flex-fill" onClick={_ => onLeaves(!hidden)}>
              <div className="d-flex flex-column align-items-center card-heading">
                <img width="50px" height="50px" alt="leaves" src={leaves} />
                <span className="mt-2">Leave</span>
              </div>
              <div className="card-content">
              </div>
            </div>
            <div className={"text-center flex-fill "} onClick={_ => onAwards(!ahidden)}>
              <div className="d-flex flex-column align-items-center card-heading">
                <img width="50px" height="50px" alt="awards" src={awards} />
                <span className="mt-2">Rewards &amp; Recognition</span>
              </div>
              <div className="card-content">
                
              </div>
            </div>
            <div className={"text-center flex-fill "}>
              <div className="d-flex flex-column align-items-center card-heading">
                <img width="50px" height="50px" alt="awards" src={performance} />
                <span className="mt-2">Performance Management</span>
              </div>
              <div className="card-content">
                
              </div>
            </div>
            {/*
            <div className={"text-center flex-fill "}>
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
                Things To Remember
              </div>
            </div>
             */}
          </div>
           
          <div className={"policy-leaves "+ showCss}>
            <div className={"text-center flex-fill "}>
              <div className="d-flex flex-column align-items-center card-heading">
                <img width="50px" height="50px" alt="awards" src={awards} />
                <span className="mt-2">Earned leave (EL)</span>
              </div>
              <div className="card-content">
                15 in a year, Max 30 accumulated
              </div>
            </div>
            <div className={"text-center flex-fill "}>
              <div className="d-flex flex-column align-items-center card-heading">
                <img width="50px" height="50px" alt="awards" src={awards} />
                <span className="mt-2">Casual/ Sick leave (CSL)</span>
              </div>
              <div className="card-content">
                11 in a year, Lapse at the end of the year
              </div>
            </div>
            <div className={"text-center flex-fill "}>
              <div className="d-flex flex-column align-items-center card-heading">
                <img width="50px" height="50px" alt="awards" src={awards} />
                <span className="mt-2">Birthday/ Anniversary (BL)</span>
              </div>
              <div className="card-content">
                1 in a year, For Birthday OR Anniversary
              </div>
            </div>
            <div className={"text-center flex-fill "}>
              <div className="d-flex flex-column align-items-center card-heading">
                <img width="50px" height="50px" alt="awards" src={awards} />
                <span className="mt-2">Paternity Leave (PL)</span>
              </div>
              <div className="card-content">
                5 Days within 1 month of child birth, Applicable for first two children
              </div>
            </div>
            <div className={"text-center flex-fill "}>
              <div className="d-flex flex-column align-items-center card-heading">
                <img width="50px" height="50px" alt="awards" src={awards} />
                <span className="mt-2">Maternity Leave (ML)</span>
              </div>
              <div className="card-content">
                26 Weeks
              </div>
            </div>
          </div>
          <div className={"awards-lists "+ashowCss}>
            <div className={"text-center flex-fill awards"}>
              <div className="d-flex flex-column align-items-center card-heading">
                <span className="mt-2">2019 &amp; 2018</span>
              </div>
              <div className="card-content">
                <ul>
                  <li>NASSCOM Technology Excellence Award 2019</li>
                  <li>Stack State - "Cool Vendor" for AI by Gartner</li>
                  <li>Xpirit wins partner of the year 2018 worldwide award from Microsoft in DevOps</li>
                  <li>Xebia top ranked in strategy category in the latest application release automation report by Forrester</li>
                </ul>
              </div>
            </div>
            <div className={"text-center flex-fill awards"}>
              <div className="d-flex flex-column align-items-center card-heading">
                <span className="mt-2">2016 &amp; 2015</span>
              </div>
              <div className="card-content">
                <ul>
                  <li>Featured IT Market Clock for Application Development</li>
                  <li>Xebia Labs named leader in Gartner</li>
                  <li>Featured IT market clock for mobile development</li>
                </ul>
              </div>
            </div>
            <div className={"text-center flex-fill awards"}>
              <div className="d-flex flex-column align-items-center card-heading">
                <span className="mt-2">2014 &amp; 2013</span>
              </div>
              <div className="card-content">
                <ul>
                  <li>Xebia India Mr Anand Sahay got award as one of the one of the top 10 CEO's &amp; key strategic advisor for 2014 by HITECH</li>
                  <li>Xebia France great place to work</li>
                  <li>Xebia Netherlands great place to work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policy;
