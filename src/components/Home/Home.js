import React, {Component} from 'react';
import {Carousel, Col, Row} from 'react-bootstrap';

import HomeSlide1 from '../../assets/img/Home/Carousel/bg1.jpg';
import HomeSlide2 from '../../assets/img/Home/Carousel/bg2.jpg';
import HomeSlide3 from '../../assets/img/Home/Carousel/bg3.jpg';

class Home extends Component {
  render() {
    return (<div className="welcome_page">
      <h1>This is Home</h1>
      <Carousel className="home-carousel" controls={false}>
        <Carousel.Item className="slide-image">
          <img alt="900x500" src={HomeSlide1} responsive='true'/>
          <Carousel.Caption>
            <Row>
              <Col sm={6}>
                <h1 className="animation animated-item-1">Lorem ipsum dolor</h1>
                <h2 className="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</h2>
                <a className="btn-slide animation animated-item-3" href="/">Read More</a>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide-image">
          <img alt="900x500" src={HomeSlide2} responsive='true'/>
        </Carousel.Item>
        <Carousel.Item className="slide-image">
          <img alt="900x500" src={HomeSlide3} responsive='true'/>
        </Carousel.Item>
      </Carousel>
    </div>)
  }
}

export default Home;
