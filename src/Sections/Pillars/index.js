import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import XebiaCard from '../../Components/XebiaCard';
import SectionTitle from '../../Components/SectionTitle';

import styles from './Pillars.module.scss';

import data from './pillarsData';

const { cardContent, sectionData } = data;
export default () => {

  const toCamelCase = str => str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');

  const [loadedContent, setContent] = useState({
    title: 'People First',
    content: sectionData[toCamelCase('People First')]
  });

  const handleClick = title => {
    const content = {
      title,
      content: sectionData[toCamelCase(title)]
    } 
    setContent(content);
  }

  return(
    <Row className={styles.pillarsWrapper} id="pillars">
      <SectionTitle
        title="xebia's pillars"
      />
      <Col className={styles.pillarContentWrapper}>
        <Row>
          <Col>
            <Row>
              {
                cardContent.map(cardProps => (
                  <Col 
                    key={cardProps.title}
                    sm={6} 
                    className={styles.cardCol}
                  >
                    <XebiaCard
                      {...cardProps}
                      role="presentation"
                      active={cardProps.title === loadedContent.title}
                      onClick={handleClick}
                    />
                  </Col>
                ))
              }
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className={styles.contentCol}>
                <Card className={styles.contentCard}>
                  <Card.Title>
                    {loadedContent.title}
                  </Card.Title>
                  <Card.Body>
                    <ul>
                      {
                        loadedContent.content.map(item => (
                          <li key={item}>
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
};
