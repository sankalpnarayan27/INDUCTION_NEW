import React from 'react';
import { Row, Col } from 'react-bootstrap';

import SectionTitle from '../../Components/SectionTitle';
import MapContentCard from '../../Components/MapContentCard';

import styles from './Locations.module.scss';

import data from './locationsContent';

export default () => {
  return (
    <Row className={styles.locationsWrapper}>
      <Col>
        <SectionTitle
          title="locations"
        />
      </Col>
      <Col className={styles.mapWrapper}>
      </Col>
      <Col className={styles.locationContent}>
        <Row>
          {
            data.map((cardProps) => (
              <Col key={cardProps.title}>
                <MapContentCard
                  {...cardProps}
                />
              </Col>
              ))
            }
        </Row>
      </Col>
    </Row>
  )
}