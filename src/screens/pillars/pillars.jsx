import React,{useState} from "react";
import "./pillars.scss";
import peopleFirst from "../../assets/icons/team.svg";
import sharingKnowledge from "../../assets/icons/meeting.svg";
import customerIntimacy from "../../assets/icons/target.svg";
import quality from "../../assets/icons/quality.svg";
import { Card, Button, Col, Row } from "react-bootstrap";

const Pillars = () => {

  const [coeInfo, descriptionHandler] = useState({ Title: "", Description: "", Clicked: -1 });

  const array = [
    { Title: "People First", ShortDesc: "People First, Always", Src: peopleFirst, Description: "" },
    { Title: "Sharing Knowledge", ShortDesc: "The more you share it, the more you grow", Src: sharingKnowledge, Description: "" },
    { Title: "Customer Intimacy", ShortDesc: "We don't just create customers, we create relationships", Src: customerIntimacy, Description: "" },
    { Title: "Quality", ShortDesc: "At Xebia Quality without compromise is the mantra", Src: quality, Description: "" }
  ]

  const Values = props => {
    let { Value, Clicked } = props;
    let askArrow = Clicked == Value ? "" : "Hide-Arrow";
    return (
      <div>
        <div className="pillar-card">
          <div>
            <img alt="people" src={props.Src} />
          </div>
          <div className="mt-2">
            <span>{props.Title}</span>
          </div>
          <div className="mt-4">{props.ShortDesc}</div>
        </div>
        <div className={"arrow " + askArrow} style={{ margin: "0 auto", maxWidth: "40px" }}>
          <svg style={{ height: "30px", width: "40px" }}>
            <g>
              <polygon points="10,0 30,0 20,8" style={{ fill: "#707070a1", stroke: "#707070a1", strokeWidth: 4 }}></polygon>
            </g>
          </svg>
        </div>
      </div>

    )
  }

  return (
    <div className="pillars-container screen-container d-flex flex-column justify-content-center align-items-center">
      <header className="mb-4">Xebia's Values</header>
      <div className="pillar-grid text-center">
        {
          array.map((x, i) => <Values {...x} key={i} />)
        }
      </div>
      {
        coeInfo.Clicked != -1 ?
          <Row>
            <div className="col-md-12 Card-Description box-shadow">
              <div className="card-title h5">
                {
                  coeInfo.Title
                }
              </div>
              <div>
                {
                  coeInfo.Description
                }
              </div>
            </div>
          </Row> : ""
      }
    </div>
  );
};

export default Pillars;
