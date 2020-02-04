import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import styles from './MapContentCard.module.scss';

export default ({
  title,
  icon,
  desc
}) => (
  <Row className={styles.cardWrapper}>
    <Col className={styles.cardImage}>
      <Image src={icon} fluid />
    </Col>
    <Col>
      <h5 className={styles.h5}>
        {title}
      </h5>
      <p className={styles.p}>
        {desc}
      </p>
    </Col>
  </Row>
);