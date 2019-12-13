import './xebiaGroup.scss';
import React, { useState } from 'react';
const XebiaGroup = _ => {
    const [toggleGroup, RectClickHandler] = useState(false);
    const Rectangle = props => {
        return (
            <svg x={props.X} y={props.Y}>
                <g>
                    <rect x="0" y="0" rx="8" ry="8" width="80" height="50" style={{ fill: "rgb(255,255,255)", strokeWidth: 2, stroke: "#707070a1" }} onClick={props.RectClick} />
                    <text width="100" fontFamily="Verdana" fontSize="10" fill="#707070" onClick={props.RectClick}>
                        <tspan x={props.TX1} y={props.TY1}>{props.T1}</tspan>
                        <tspan x={props.TX2} y={props.TY2}>{props.T2}</tspan>
                    </text>
                </g>
            </svg>
        )
    }
    Rectangle.defaultProps = {
        TX1: 25,
        TX2: 5,
        TY1: 20,
        TY2: 40
    }
    return (
        <div className="xeGroup-container screen-container d-flex flex-column justify-content-center align-items-center">
            <header className="mb-4">Xebia Group</header>
            <div className="container">
                <div>
                <svg style={{ height: "600px", width: "100%" }}>
                    <g>
                        <svg height="450" x="0" y="0">
                            <Rectangle X={30} Y={180} TY1="28" TX1="10" T1={"Xebia Group"} />
                        </svg>
                        <svg width="70" x="110" y="0">
                            <g>
                                <line x1="10" y1="30" x2="10" y2="380" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                <line x1="10" y1="30" x2="70" y2="30" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                <line x1="10" y1="82" x2="70" y2="82" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                <line x1="10" y1="145" x2="70" y2="145" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                <line x1="0" y1="205" x2="70" y2="205" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                <line x1="10" y1="265" x2="70" y2="265" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                <line x1="10" y1="325" x2="70" y2="325" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                <line x1="10" y1="380" x2="70" y2="380" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                            </g>
                        </svg>
                        <svg x="70">
                            <g>
                                <Rectangle X={100} Y={0} T1={"Xebia"} T2={"NetherLands"} />
                                <Rectangle X={100} Y={60} TY1="28" T1={"Xpirit"} />
                                <Rectangle X={100} Y={120} TY1="28" T1={"Binx.io"} />
                                <Rectangle X={100} Y={180} TX1="10" TX2="20" T1={"Xebia Global"} T2={"Services"} RectClick={_ => RectClickHandler(!toggleGroup)} />
                                <Rectangle X={100} Y={240} TX1="30" TX2="12" T1={"Go"} T2={"Data Driven"} />
                                <Rectangle X={100} Y={300} TX1="15" TY1="28" T1={"Xccelerated"} />
                                <Rectangle X={100} Y={360} TX1="15" TY1="28" T1={"Stack State"} />
                            </g>
                        </svg>
                        <svg x="250" onClick={_ => RectClickHandler(!toggleGroup)} >
                            <g>
                                <line x1="0" y1="203" x2="10" y2="203" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                <polygon points="10,200 18,204 10,208" style={{ fill: "#707070a1", stroke: "#707070a1", strokeWidth: 4 }}></polygon>
                            </g>
                        </svg>
                        {
                            toggleGroup ?
                                <svg>
                                    <g>
                                        <svg x="261" width="70">
                                            <g>
                                                <line x1="10" y1="115" x2="10" y2="295" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                                <line x1="10" y1="115" x2="70" y2="115" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                                <line x1="10" y1="180" x2="70" y2="180" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                                <line x1="10" y1="235" x2="70" y2="235" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                                <line x1="10" y1="295" x2="70" y2="295" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                            </g>
                                        </svg>
                                        <svg x="270">
                                            <g>
                                                <Rectangle X={50} Y={90} TY1="28" TX1="15" T1={"Xebia India"} />
                                                <Rectangle X={50} Y={150} TY1="28" T1={"Xebia"} TX2="15" T2={"Middle East"} />
                                                <Rectangle X={50} Y={210} TY1="28" TX2="30" T1={"Xebia"} T2={"US"} />
                                                <Rectangle X={50} Y={270} TY1="28" TX2="30" T1={"Xebia"} T2={"UK"} />
                                            </g>
                                        </svg>
                                        <svg x="400">
                                            <g>
                                                <line x1="0" y1="115" x2="30" y2="115" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                            </g>
                                        </svg>
                                        <svg x="420" width="70">
                                            <g>
                                                <line x1="10" y1="115" x2="10" y2="295" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                                <line x1="10" y1="115" x2="70" y2="115" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                                <line x1="10" y1="180" x2="70" y2="180" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                                <line x1="10" y1="235" x2="70" y2="235" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                                <line x1="10" y1="295" x2="70" y2="295" style={{ stroke: "#707070a1", strokeWidth: 2 }} />
                                            </g>
                                        </svg>
                                        <svg x="440">
                                            <g>
                                                <Rectangle X={50} Y={90} TY1="28" TX1="20" TX2="15" T1={"Xebia"} T2={"Gurugram"} />
                                                <Rectangle X={50} Y={150} TY1="28" T1={"Xebia"} TX2="15" T2={"Xebia Pune"} />
                                                <Rectangle X={50} Y={210} TY1="28" TX2="15" T1={"Xebia"} T2={"Bangalore"} />
                                                <Rectangle X={50} Y={270} TY1="28" TX2="15" T1={"Xebia"} T2={"Academy"} />
                                            </g>
                                        </svg>
                                    </g>
                                </svg> : ""
                        }
                    </g>
                </svg>
                </div>
            </div>
        </div>
    )
}
export default XebiaGroup;