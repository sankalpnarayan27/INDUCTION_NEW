import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import clientsData from './clientsData';
import SectionTitle from '../../Components/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Clients.module.scss';

export default () => {

  const [view, setView] = useState(0);

  const array = [];
  const size = 5;
  while (clientsData.length > 0) {
    array.push(clientsData.splice(0, size));
  }
  const renderClients = () => {
    return (
      <Row className={styles.logoWrapper}>
        {
          array.map((clients, index) => (
            <Col className={styles.clientCol}>
              <Row className={styles.clientRow}>
              {
                clients.map(({name, image}, index) => (
                    <Col>
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
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <Button
          type="button"
          className={styles.clientBtn}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </Col>
    </Row>
  );
};