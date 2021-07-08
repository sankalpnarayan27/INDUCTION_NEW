import React from 'react';
import { Col } from 'react-bootstrap';

import styles from './SectionTitle.module.scss';

export default ({
  title
}) => (
  <Col className={styles.sectionTitle}>
    <h1>
      {title}
    </h1>
  </Col>
);