import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import SectionTitle from '../../Components/SectionTitle';
import XebiaCard from '../../Components/XebiaCard';
import policy from './assets/policy.png';
import leaves from './assets/sun-umbrella.svg';
import awards from './assets/trophy.svg';
import performance from './assets/diamond.svg';

import styles from './Policy.module.scss';

export default () => {
  const [content, setContent] = useState(null);
  const policyData = [
    {
      icon: leaves,
      title: 'leaves'
    },
    {
      icon: awards,
      title: 'rewards & recognition'
    },
    {
      icon: performance,
      title: 'performance management'
    }
  ];

  const policyContent = {
    
  };

  const handleClick = title =>  {
    console.log(title)
  }

  return (
    <Row className={styles.policyWrapper}>
      <Col className={styles.policyImage}>
        <Image
          fluid
          src={policy} 
        />
        <h1>
          the more laws, <br /> the less <span>justice</span>
        </h1>
      </Col>
      <Col>
        <Row className={styles.policyContentWrapper}>
          <Col>
            <SectionTitle
              title="policy" 
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
                        marginBottom: '1.2rem'
                      }}
                    />
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
};
