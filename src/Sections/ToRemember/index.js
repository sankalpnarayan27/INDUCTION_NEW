import React, { useState } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import styles from './ToRemember.module.scss';

const ThingsToRemember = () => {

  const carouselItems = [
    {
      title: "XFC",
      subtitle: "[Xebia Foundation Course]",
      description: "The aim of Xebia foundation course is to ensure all software engineers hired in Xebia know the vocabulary for building high quality software products. The course covers Agile, TDD, Clean Code, Git Version control, Continuous Integration, DevOps practices, and basic security know how. The course is self-paced consisting of high quality videos and text material. Every Xebians needs to complete this course with in one week of joining. There is an online test at the end to evaluate employee understanding of the concepts."
    },
    {
      title: "POSH",
      subtitle: null,
      description: "Xebia commits to provide a workplace free from sexual harassment, and provide a mechanism for redressal of any complaints, without fear or threat of any reprisals in any form or manner."
    },
    {
      title: "Zoho People Update",
      subtitle: null,
      description: "Check your pre-filled details and ensure that you fill out all your information on “My Information” under the “Self Service” tab, so that the system is updated!"
    },
    {
      title: "ISMS",
      subtitle: "",
      description: "Information security and management is one of the top priorities for Xebia. To ensure that all our employees are equipped with any information regarding ISMS"
    },
    {
      title: "Background Verification",
      subtitle: null,
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
      <Carousel className={styles.dropShadow} activeIndex={index} direction={direction} controls={false} interval="6000" onSelect={handleSelect} indicators>
        {
          props.CarouselItems.map(({title, subtitle, description}, i) => {
            return (
              <Carousel.Item key={i}>
                <div className={styles.remCard}>
                  <h5>
                    {title} <span>{subtitle}</span>
                  </h5>
                  <p>
                    {description}
                  </p>
                </div>
              </Carousel.Item>
            )
          })
        }
      </Carousel>

    )
  }
  return (
    <Row className={styles.rememberWrapper}>
      <Col>
        <h1>
          things to<br />remember 
        </h1>
      </Col>
      <Col>
        <ControlledCarousel CarouselItems={carouselItems} />
      </Col>
    </Row>
  )
}
export default ThingsToRemember;