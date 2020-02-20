import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Carousel, { Modal, ModalGateway } from 'react-images';
import SectionTitle from '../../Components/SectionTitle';
import XebiaCard from '../../Components/XebiaCard';
import party from './assets/party.png';
import calendar from './assets/calendar.svg';
import gallery from './assets/gallery.svg';
import cares from './assets/cares.svg';

import galleryImages from './galleryImages';

import styles from './Life.module.scss';

export default () => {
  const [showGallery, setShowGallery] = useState(false);
  const galleryData = galleryImages.reduce((state, payload) => {
    return state.concat({
      source: payload
    });
  } ,[])
  const policyData = [
    {
      icon: calendar,
      title: 'events'
    },
    {
      icon: gallery,
      title: 'gallery'
    },
    {
      icon: cares,
      title: 'cares'
    }
  ];

  const renderGallery = () => {
    return (
      <ModalGateway>
        {
          showGallery ? (
            <Modal onClose={() => setShowGallery(false)}>
              <Carousel 
                views={galleryData}
                isFullscreen
              />
            </Modal>
          ) : null
        }
      </ModalGateway>
    );
  }

  const handleClick = title =>  {
    switch(title){
      case 'gallery':
        console.log('here');
        return setShowGallery(true);
      default: 
        break;
    }
  }

  return (
    <Container fluid className="complete-width">
      <Row className={styles.lifeWrapper}>
        <Col>
          <Row className={styles.lifeContentWrapper}>
            <Col>
              <SectionTitle
                title="life at xebia" 
              />
            </Col>  
            <Col>
              <Row>
                {
                  policyData.map(item => (
                    <Col md={6} key={item.title}>
                      <XebiaCard
                        onClick={handleClick}
                        {...item}
                        style={{
                          marginBottom: '1.2rem',
                          height: '15rem'
                        }}
                      />
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </Col>
        <Col 
          className={styles.lifeImage}
          style={{
            backgroundImage: `url("${party}")`
          }}
        >
          <h1>
            a little party <br /> never <span>killed anybody</span>
          </h1>
        </Col>
        {renderGallery()}
      </Row>
    </Container>
  )
};
