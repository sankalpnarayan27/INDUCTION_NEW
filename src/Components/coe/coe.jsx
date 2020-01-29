import React, { useState, useEffect } from "react";
import "./coe.scss";
import { Card, Button, Col, Row } from "react-bootstrap";

import Ajay from '../../assets/images/ajaykabra.jpg';
import vikasmittal from '../../assets/images/vikasmittal.jpg';
import ram from '../../assets/images/ram.png';
import shekhargulati from '../../assets/images/shekhargulati.png';
import vikasthareja from '../../assets/images/vikasthareja.png';
import mandeep from '../../assets/images/mandeep.png';
import { slideHorizontally } from "../../utils/slideHorizontatlly";
import { relative } from "path";


const Coe = _ => {
    const coeList = [
        {
            title: "Vikas Mittal",
            smallDescription: "Digital Assurance",
            description: "In 2019 we brought in Vikas Mittal a industry thought leader to establish “Digital Assurance & Consulting” service line. Mission of this service line is providing CCC (Confidence, Conformance and Capability) to our customers to determine if their applications are ready to be used in today’s digital world. ",
            src: vikasmittal
        },
        {
            title: "Shekhar Gulati",
            smallDescription: "Full Stack",
            description: "Full stack COE works in backend technologies like Java, Golang, Node.js, frontend technologies like React, Angular, Vue.js, and mobile technologies like React Native, iOS and Android native development. It is composed of humble, technical people who believe in Extreme programming practices and continuous learning. We blog regularly, speak at conferences, and contribute to open source",
            src: shekhargulati
        },
        {
            title: "Ram Narasimhan",
            smallDescription: "Big Data",
            description: "At Xebia, we are ‘consulting technologists’ – which means we partner with customer to solve problems using technology. Without exception we start with the strategic goals of our customer and develop a plan to assist with transformation projects. This is the way we approach AI and Big Data analytics",
            src: ram
        },
        {
            title: "Vikas Thareja",
            smallDescription: "Microsoft",
            description: "Our Microsoft practice (MS Practice) is Microsoft Partner on DevOps and Application Development, Microsoft Cloud Solution Provider and Microsoft MPN Partner consists of many leading IT specialists in Microsoft Application Lifecycle Management, Cloud, Enterprise Mobility & Security, Data Analytics & Power Bi et al.Globally this practice is called Xpirit and regionally it is managed under MSFT COE. Since inception the MS practice is focussed on providing high-end consulting solutions to our clients and help them to adopt the new offerings effectively, making their operations cost-effective and business more relevant as compared to the competitors.We specialize in high performance, secure solutions on MS technology stack including focussed consultancy for Azure migration path for enterprises and helping with DevOps set-up and adoption of Agile practices.",
            src: vikasthareja
        },
        {
            title: "Ajay Kabra",
            smallDescription: "Agile",
            description: "Agile software development refers to a group of software development methodologies based on iterative development, where requirements and solutions evolve through collaboration between self-organizing cross-functional teams.",
            src: Ajay
        },
        {
            title: "Mandeep Mehra",
            smallDescription: "DevOps",
            description: "COE for DevOps",
            src: mandeep
        }
    ];

    const scrollClients = direction => {
        let container = document.getElementById("coeslider");
        slideHorizontally(container, direction, 10, 400, 10);
    };
    const [coeInfo, descriptionHandler] = useState({ Title: "", Description: "", Clicked: -1 });

    const [togglei,toggleIcon] = useState(["fa fa-circle","fa fa-dot-circle-o"]);

    const clickHandler = CoeInfo => {

        descriptionHandler(CoeInfo);
    }
    useEffect(() => {
        console.log(coeInfo);
    })
    const CoeCard = props => {
        let { Value, Handler, Title, SmallDescription, Src, Clicked } = props;
        let askArrow = Clicked == Value ? "" : "Hide-Arrow";
        useEffect(() => {
            
        });
        return (
            <div className="card-wrapper">
                <Card className="box-shadow" onClick={_ => Handler({ ...props, Clicked: Value })}>
                    <Card.Img variant="top" src={Src} />
                    <Card.Body>
                        <Card.Title>{Title}</Card.Title>
                        <Card.Text>
                            {SmallDescription}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className={"arrow " + askArrow} style={{ margin: "0 auto", maxWidth: "40px", position: "relative", bottom: "10px"  }}>
                    <svg style={{ height: "30px", width: "40px" }}>
                        <g>
                            <polygon points="10,0 30,0 20,8" style={{ fill: "#CBCBCB", stroke: "#CBCBCB", strokeWidth: 4 }}></polygon>
                        </g>
                    </svg>
                </div>
            </div>
        )
    }

    return (
        <div className="locations-container screen-container d-flex flex-column justify-content-center align-items-center">
            <header className="mb-4">COE's</header>
            <div className="container" >
                <Row>
                    <div id="coeslider" className="card-container">
                        {
                            coeList.map((x, i) => <CoeCard Value={i} Handler={clickHandler} key={i} Title={x.title} SmallDescription={x.smallDescription} Description={x.description} Src={x.src} Clicked={coeInfo.Clicked} />)
                        }
                    </div>
                </Row>
                <div className="d-flex coearrows">
                    <div>
                        <i className={togglei[0]} onClick={() => {scrollClients("left"); toggleIcon(["fa fa-circle","fa fa-dot-circle-o"]); }}></i>
                        <i className={togglei[1]} onClick={() => {scrollClients("right"); toggleIcon(["fa fa-dot-circle-o","fa fa-circle"]);}}></i>
                    </div>
                </div>
                {
                    coeInfo.Clicked != -1 ?
                        <Row>
                            <div className="col-md-12 Card-Description">
                                <div className="card-title h5">
                                    {
                                        coeInfo.Title
                                    }
                                </div>
                                <div style={{fontSize:"18px"}}>
                                    {
                                        coeInfo.Description
                                    }
                                </div>
                            </div>
                        </Row> : ""
                }

            </div>
        </div>
    )
}
export default Coe;