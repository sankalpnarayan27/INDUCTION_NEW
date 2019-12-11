import React, { useState, useEffect } from "react";
import "./coe.scss";
import { Card, Button, Col, Row } from "react-bootstrap";

import Ajay from '../../assets/images/ajay.png';


const Coe = _ => {
    const coeList = [
        {
            title: "COE 1",
            smallDescription: "COE 1 Description",
            description: "One ",
            src: Ajay
        },
        {
            title: "COE 2",
            smallDescription: "COE 2 Description",
            description: "One ",
            src: Ajay
        },
        {
            title: "COE 3",
            smallDescription: "COE 3 Description",
            description: "One ",
            src: Ajay
        },
        {
            title: "COE 4",
            smallDescription: "COE 4 Description",
            description: "One ",
            src: Ajay
        },
        {
            title: "COE 5",
            smallDescription: "COE 4 Description",
            description: "One ",
            src: Ajay
        }
    ];
    const [coeInfo, descriptionHandler] = useState({ Title: "", Description: "", Clicked: -1 });
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
                <div className={"arrow " + askArrow} style={{ margin: "0 auto", maxWidth: "40px" }}>
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
                    <div className="card-container">
                        {
                            coeList.map((x, i) => <CoeCard Value={i} Handler={clickHandler} key={i} Title={x.title} SmallDescription={x.smallDescription} Description={x.description} Src={x.src} Clicked={coeInfo.Clicked} />)
                        }
                    </div>
                </Row>
                {
                    coeInfo.Clicked != -1 ?
                        <Row>
                            <div className="col-md-12 Card-Description">
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
        </div>
    )
}
export default Coe;