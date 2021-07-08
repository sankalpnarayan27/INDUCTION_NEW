import React from 'react';
import { Row, Col } from 'react-bootstrap';

import SectionTitle from '../../Components/SectionTitle';

import styles from './Events.module.scss';

export default () => {
  return (
    <Row className={styles.eventsWrapper}>
      <Col>
        <SectionTitle
          title="events at xebia"
        />
      </Col>
    </Row>
  );
}; 