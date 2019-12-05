import React from "react";
import "./pillars.scss";
import peopleFirst from "../../assets/icons/team.svg";
import sharingKnowledge from "../../assets/icons/meeting.svg";
import customerIntimacy from "../../assets/icons/target.svg";
import quality from "../../assets/icons/quality.svg";

const Pillars = () => {
  return (
    <div className="pillars-container screen-container d-flex flex-column justify-content-center align-items-center">
      <header className="mb-4">Xebia's Pillar</header>
      <div className="pillar-grid text-center">
        <div>
          <div>
            <img alt="people" src={peopleFirst} />
          </div>
          <div className="mt-2">
            <span>People First</span>
          </div>
          <div className="mt-4">People First, Always</div>
        </div>
        <div>
          <div>
            <img alt="sharing" src={sharingKnowledge} />
          </div>
          <div className="mt-2">
            <span>Sharing Knowledge</span>
          </div>
          <div className="mt-4">The more you share it, the more you grow</div>
        </div>
        <div>
          <div>
            <img alt="customer" src={customerIntimacy} />
          </div>
          <div className="mt-2">
            <span>Customer Intimacy</span>
          </div>
          <div className="mt-4">
            We don't just create customers, we create relationships
          </div>
        </div>
        <div>
          <div>
            <img alt="quality" src={quality} />
          </div>
          <div className="mt-2">
            <span>Quality</span>
          </div>
          <div className="mt-4">
            At Xebia Quality without compromise is the mantra
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pillars;
