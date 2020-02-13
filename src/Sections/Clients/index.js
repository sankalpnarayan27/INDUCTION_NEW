import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import clientsData from './clientsData';
import SectionTitle from '../../Components/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Clients.module.scss';

export default () => {

  // grouping data for grid
  const array = [];
  const size = 5;
  while (clientsData.length > 0) {
    array.push(clientsData.splice(0, size));
  }

  const handleScroll = direction => {
    const clientele = document.getElementById('clientele');
    clientele.scrollBy( (direction === 'right' ? clientele.offsetWidth : -clientele.offsetWidth), 0)
  }

  const renderClients = () => {
    return (
      <Row id="clientele" className={styles.logoWrapper}>
        {
          array.map((clients, index) => (
            <Col className={styles.clientCol} key={index}>
              <Row className={styles.clientRow}>
              {
                clients.map(({name, image}) => (
                    <Col key={`${name}-${image}`}>
                      <div
                        className={styles.imageRow}
                        style={{
                          backgroundImage: `url("${image}")`
                        }}
                      />
                    </Col>
                  ))
                }
              </Row>
            </Col>
          ))
        }
      </Row>
    )
  }
  return (
    <Row className={styles.clientsWrapper}>
      <Col>
        <SectionTitle
          title="clients"
        />
      </Col>
      <Col>
        {renderClients()}
      </Col>
      <Col className={styles.buttonRow}>
        <Button
          type="button"
          className={styles.clientBtn}
          onClick={() => handleScroll('left')}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <Button
          type="button"
          className={styles.clientBtn}
          onClick={() => handleScroll('right')}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </Col>
    </Row>
  );
};