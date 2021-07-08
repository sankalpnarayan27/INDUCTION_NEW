import React from "react";
import OriginsBanner from './OriginSvg';
import { Row, Col, Button } from 'react-bootstrap';

import styles from './Origins.module.scss'

export default () => {
  const handleScroll = () => {
    document.querySelector('#pillars').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };
  return (
    <Row className={styles.originsWrapper} id="origins">
      <Col>
        <OriginsBanner />
        <Button
          onClick={handleScroll}
          type="button"
        >
          with 4 pillars
        </Button>
      </Col>
    </Row>
  );
};
