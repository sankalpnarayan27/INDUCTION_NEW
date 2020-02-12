import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import clientsData from './clientsData';
import { slideHorizontally } from '../../utils/slideHorizontatlly';
import SectionTitle from '../../Components/SectionTitle';

import styles from './Clients.module.scss';

export default () => {
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
    </Row>
  );
};