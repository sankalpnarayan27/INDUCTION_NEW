import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import SectionTitle from '../../Components/SectionTitle';
import XebiaCard from '../../Components/XebiaCard';
import party from './assets/party.png';
import calendar from './assets/calendar.svg';
import gallery from './assets/gallery.svg';
import cares from './assets/cares.svg';

import styles from './Life.module.scss';

export default () => {
  const [content, setContent] = useState(null);
  const policyData = [
    {
      icon: calendar,
      title: 'events  '
    },
    {
      icon: gallery,
      title: 'gallery'
    },
    {
      icon: cares,
      title: 'Cares'
    }
  ];


  const handleClick = title =>  {
    console.log(title)
  }

  return (
    <Container fluid className="complete-width">
      <Row className={styles.lifeWrapper}>
        <Col>
          <Row className={styles.lifeContentWrapper}>
            <Col>
              <SectionTitle
                title="life at xebia" 
              />
            </Col>  
            <Col>
              <Row>
                {
                  policyData.map(item => (
                    <Col md={6}>
                      <XebiaCard
                        onClick={handleClick}
                        {...item}
                        style={{
                          marginBottom: '1.2rem',
                          height: '15rem'
                        }}
                      />
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </Col>
        <Col 
          className={styles.lifeImage}
          style={{
            backgroundImage: `url("${party}")`
          }}
        >
          <h1>
            a little party <br /> never <span>killed anybody</span>
          </h1>
        </Col>
      </Row>
    </Container>
  )
};
