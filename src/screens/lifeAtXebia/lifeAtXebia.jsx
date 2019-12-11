import React, { useState, useEffect } from "react";
import "./lifeAtXebia.scss";
import lifeAtXebia from "../../assets/images/lifeAtXebia.svg";
import events from "../../assets/icons/calendar.svg";
import gallery from "../../assets/icons/attach.svg";
import cares from "../../assets/icons/worldwide.svg";
import bornImage from "../../assets/images/born.svg";
import * as gPhotos from "./gallery.jsx";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import Lightbox from 'react-image-gallery';
import { animateScroll as Scroll } from 'react-scroll';

const LifeAtXebia = () => {
  const [toggle, eventsClicked] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const carouselItems = [
    {
      imgSrc: bornImage,
      description: "Xebia Events"
    },
    {
      imgSrc: bornImage,
      description: "Xebia Events"
    },
    {
      imgSrc: bornImage,
      description: "Xebia Events"
    }
  ];
  const allGallery = _ => {
    let gal = [];
    for (let x in gPhotos) {
      gal.push({ title: x, original: gPhotos[x] });
    }
    return gal
  }
  useEffect(_ => {
    if(toggle){
      Scroll.scrollToBottom();
    }
  });



  const GalleryView = props => {
    return (
      <div>
        <Lightbox items={props.Model} />
      </div>
    )
  }

  return (
    <div>
      <div className="life-container">
        <section className="data-section screen-container d-flex flex-column justify-content-stretch align-items-center">
          <header className="mb-4">Life At Xebia</header>
          <div className="policy-cards d-flex justify-content-center flex-wrap">
            <div className="text-center flex-fill" to="events" spy={true} smooth={true} offset={50} duration={1000} onClick={_ => eventsClicked(!toggle)}>
              <div className="d-flex flex-column align-items-center card-heading">
                <img width="50px" height="50px" alt="evets" src={events} />
                <span className="mt-2">Events</span>
              </div>
              <div className="card-content">
                Events at Xebia
              </div>
            </div>
            <div className="text-center flex-fill" onClick={handleShow} >
              <div className="d-flex flex-column align-items-center card-heading">
                <img width="50px" height="50px" alt="gallery" src={gallery} />
                <span className="mt-2">Gallery</span>
              </div>
              <div className="card-content">
                Xebia Gallery
              </div>
            </div>
            <div className="text-center flex-fill">
              <div className="d-flex flex-column align-items-center card-heading">
                <img width="50px" height="50px" alt="cares" src={cares} />
                <span className="mt-2">Cares</span>
              </div>
              <div className="card-content">
                Xebia Cares
              </div>
            </div>
          </div>
        </section>
        <section className="image-section">
          <img src={lifeAtXebia} />
          <div className="d-flex align-items-center">
            <p className="text-left">
              A Little Party never <span>killed anybody</span>
            </p>
          </div>
        </section>
       
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Gallery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="row">
              <div class="col-md-12">
              <div>
                <GalleryView Model={allGallery()} />
              </div>
               {/*<GalleryView Model={allGallery()} /> */}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>


            {/*
            <Button variant="secondary" onClick={handleClose}>
              Close
      </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>

      </div>
      <div className="container">
        {
          toggle ?
            <section id="events" className="events-section data-section screen-container d-flex flex-column justify-content-stretch align-items-center">
              <header className="mb-4">Events at Xebia</header>
              <Container>
                {<ControlledCarousel CarouselItems={carouselItems} />}
              </Container>
            </section> :
            ""
        }
      </div>
      <div className="container">
        
      </div>
    </div>
  );
}

const ControlledCarousel = props => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  }

  return (
    <Carousel activeIndex={index} direction={direction} interval="6000" onSelect={handleSelect}>
      {
        props.CarouselItems.map((x, i) => {
          return (
            <Carousel.Item key={i}>
              <Row>
                <div className="item-wrapper">

                  <div>{x.description}</div>
                  <div><i className="fa fa-play" style={{color:"#bf234b"}}></i></div>
                </div>
                <div className="item-wrapper">
                  <img
                    className="d-block w-100"
                    src={x.imgSrc}
                    alt="Second slide"
                  />
                </div>
              </Row>


            </Carousel.Item>
          )
        })
      }

    </Carousel>

  )
}
export default LifeAtXebia;

{/*
    <Carousel activeIndex={index} direction={direction} interval="6000" onSelect={handleSelect}>
      
      
    
      {
        props.CarouselItems.map((x,i)=>{
          return(
            <Carousel.Item>
              <div>
                
                <div>{x.description}</div>
              </div>
              <div>
                <img
                      className="d-block w-100"
                      src={x.imgSrc}
                      alt="Second slide"
                    />
              </div>
            
    
            
          </Carousel.Item>
          )
        })
      }
     
    </Carousel>
    */}


