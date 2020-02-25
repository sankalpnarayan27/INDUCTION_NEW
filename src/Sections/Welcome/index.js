import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import xebiaLogo from './xebiaLogo.svg';
import welcome from './welcome.png';
import styles from './Welcome.module.scss';

export default () => {
  const handleScroll = () => {
    document.querySelector('#origins').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };
  
  return (
    <Row className={styles.welcomeWrapper}>
      <Col>
        <Row className={styles.welcomeText}>
          <Col>
            <h1>
              welcome to
            </h1>
          </Col>
          <Col className={styles.imageMargin}>
            <Image alt="welcome" src={xebiaLogo} fluid />
          </Col>
          <Col>
            <Button
              type="button"
              onClick={handleScroll}
            >
              We were born in
            </Button>
          </Col>
        </Row>
      </Col>
      <Col className={styles.welcomeImage}>
        <Image alt="welcome" src={welcome} fluid />
      </Col>
    </Row>
  );
};