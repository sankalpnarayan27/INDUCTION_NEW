import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SectionTitle from '../../Components/SectionTitle';
import XebiaCard from '../../Components/XebiaCard';
import policy from './assets/policy.png';
import leaves from './assets/sun-umbrella.svg';
import awards from './assets/trophy.svg';
import performance from './assets/diamond.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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

  const renderAllContent = () => (
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
              <Col md={6} key={item.title}>
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
  );

  const policyContent = () => (
    <Row className={styles.policyContentWrapper}>
      <Col className={styles.leavePolicyTitle}>
        <SectionTitle
          title="Leave Policy"
        />
        <Button
          type="button"
          className={styles.backBtn}
        >
          <FontAwesomeIcon icon={faArrowLeft} className={styles.backIcon}/>
        </Button>
      </Col>  
      <Col>
        <Row>
          
        </Row>
      </Col>
    </Row>
  );

  const handleClick = title =>  {
    console.log(title)
  }

  return (
    <Container fluid className="complete-width">
      <Row>
        <Col 
          className={styles.policyImage}
          style={{
            backgroundImage: `url("${policy}")`
          }}
        >
          <h1>
            the more laws, <br /> the less <span>justice</span>
          </h1>
        </Col>
        <Col>
          { policyContent() }
        </Col>
      </Row>
    </Container>
  )
};
