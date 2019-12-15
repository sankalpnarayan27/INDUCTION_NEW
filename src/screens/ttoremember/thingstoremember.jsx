import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Row} from 'react-bootstrap';
import './thingstoremember.scss';



const ThingsToRemember = _ => {

    const carouselItems = [
        {
            title: "XFC",
            subtitle: "[Xebia Foundation Course]",
            description: "The aim of Xebia foundation course is to ensure all software engineers hired in Xebia know the vocabulary for building high quality software products. The course covers Agile, TDD, Clean Code, Git Version control, Continuous Integration, DevOps practices, and basic security know how. The course is self-paced consisting of high quality videos and text material. Every Xebians needs to complete this course with in one week of joining. There is an online test at the end to evaluate employee understanding of the concepts."
        },
        {
            title: "POSH",
            subtitle: "",
            description: "Xebia commits to provide a workplace free from sexual harassment, and provide a mechanism for redressal of any complaints, without fear or threat of any reprisals in any form or manner."
        },
        {
            title: "Zoho People Update",
            subtitle: "",
            description: "Check your pre-filled details and ensure that you fill out all your information on “My Information” under the “Self Service” tab, so that the system is updated!"
        },
        {
            title: "ISMS",
            subtitle: "",
            description: "Information security and management is one of the top priorities for Xebia. To ensure that all our employees are equipped with any information regarding ISMS"
        },
        {
            title: "Background Verification",
            subtitle: "",
            description: "Xebia has tied up with AuthBridge for their Background verification services. Please make sure you complete and submit the forms for a smooth BGV process."
        }
      ];

      const ControlledCarousel = props => {
        const [index, setIndex] = useState(0);
        const [direction, setDirection] = useState(null);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
          setDirection(e.direction);
        }
      
        return (
          <Carousel activeIndex={index} direction={direction} interval="6000" onSelect={handleSelect}>
            {
              props.CarouselItems.map((x, i) => {
                return (
                  <Carousel.Item key={i}>
                    <Row>
                        <div className="ttr-descriptiontitle">
                            <div>
                                <div>
                                    {x.title}
                                </div>
                                <div>
                                    {`${x.subtitle}`}
                                </div>
                            </div>
                        </div>
                        <div className="ttr-description">
                            <div>
                                {x.description}
                            </div>
                        </div>
                    </Row>
                  </Carousel.Item>
                )
              })
            }
      
          </Carousel>
      
        )
      }
    return (
        <div className="ttr-container screen-container d-flex flex-column justify-content-center align-items-center">
            <div className="container">
                <Row>
                    <div className="col-lg-6 col-md-6">
                        <div className="ttr-title">
                            <div>
                                Things To
                            </div>
                            <div>
                                Remember
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 slider-square">
                        <ControlledCarousel CarouselItems={carouselItems} />    
                    </div>
                </Row>
            </div>
        </div>
    )
}
export default ThingsToRemember;