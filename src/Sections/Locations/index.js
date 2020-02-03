import React from 'react';
import { Row, Col } from 'react-bootstrap';

import styles from './Locations.module.scss';

import data from './locationsContent';

export default () => {
  return (
    <Row className={styles.locationsWrapper}>
      <Col className={styles.mapWrapper}>
      </Col>
      <Col>
      </Col>
    </Row>
  )
}