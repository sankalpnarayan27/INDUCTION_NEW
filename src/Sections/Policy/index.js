import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
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

  const contentData = {
    leaves: [
      {
        title: 'Earned Leaves',
        content: [
          '15 in a year',
          'Max 30 accumulated'
        ]
      },
      {
        title: 'Casual/Sick Leaves',
        content: [
          '11 in a year',
          'Lapse at the end of the year'
        ]
      },
      {
        title: 'Birthday/Anniversary',
        content: [
          '1 in a year',
          'For Birthday or Anniversary'
        ]
      },
      {
        title: 'Gift a leave',
        content: [
          'Employees can gift max 3 EL to other employee',
          'Only incase of exception crisis situation'
        ]
      },
      {
        title: 'Paternity Leave',
        content: [
          '11 in a year',
          'Lapse at the end of the year'
        ]
      },
      {
        title: 'Maternity Leave',
        content: [
          '26 weeks'
        ]
      },
      {
        title: 'Paternity Leave',
        content: [
          '45 hours'
        ]
      }
    ]
  }

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
        <Row className={styles.leaveListWrapper}>
          {
            contentData.leaves.map(({title, content}) => (
              <Col md="6" key={title}>
                <Card className={`${styles.leaveCard} shadow-sm`}>
                  <Card.Body>
                    <h5>{title}</h5>
                    <ul className={styles.leaveList}>
                      {
                        content.map(item => (
                          <li key={item}>
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
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
