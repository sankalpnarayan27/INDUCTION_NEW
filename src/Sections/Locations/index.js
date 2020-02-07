import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import SectionTitle from '../../Components/SectionTitle';
import MapContentCard from '../../Components/MapContentCard';

import mapAsset from './assets/map.svg';

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
        <Image
          src={mapAsset}
          fluid
        />
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