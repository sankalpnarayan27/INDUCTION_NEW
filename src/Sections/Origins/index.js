import React from "react";
import OriginsBanner from './OriginSvg';
import { Row, Col, Button } from 'react-bootstrap';

import styles from './Origins.module.scss'

export default () => (
  <Row className={styles.originsWrapper}>
    <Col>
      <OriginsBanner />
      <Button>
        with 4 pillars
      </Button>
    </Col>
  </Row>
)
