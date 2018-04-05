import React, {Component} from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { fadeInDown } from 'react-animations';

import slideImg from '../../assets/img/slider_one.jpg';

const styles = {
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: '1s',
    animationDelay: '0.3s'
  }
}

class About extends Component {
  render() {

    return (<div>
      <div className="center">
        <h2>About Lenois Ventures</h2>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          <br/>et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>

      <Carousel className="about-carousel">
        <Carousel.Item className="slide-image">
          <img width={900} height={500} alt="900x500" src={slideImg} responsive='true'/>
        </Carousel.Item>
        <Carousel.Item className="slide-image">
          <img width={900} height={500} alt="900x500" src={slideImg} responsive='true'/>
        </Carousel.Item>
        <Carousel.Item className="slide-image">
          <img width={900} height={500} alt="900x500" src={slideImg} responsive='true'/>
        </Carousel.Item>
      </Carousel>

      <div className="skill">
        <div className="center wow fadeInDown">
          <h2>Our Skill</h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            <br/>et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          <Row>
            <Col sm={3}>
              <div className="skill-item" style={styles.fadeInDown}>
                Analytics
              </div>
            </Col>
            <Col sm={3}>
              <div className="skill-item" style={styles.fadeInDown}>
                Creativity
              </div>
            </Col>
            <Col sm={3}>
              <div className="skill-item" style={styles.fadeInDown}>
                Communications
              </div>
            </Col>
            <Col sm={3}>
              <div className="skill-item" style={styles.fadeInDown}>
                Leadership
              </div>
            </Col>
          </Row>

        </div>
      </div>
      )
  }
}

export default About;
