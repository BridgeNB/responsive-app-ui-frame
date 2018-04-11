import React, {Component} from 'react';
import { Carousel, Row, Col, Grid } from 'react-bootstrap';
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

    return (<div className="about-main">
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
          <Grid>
            <Row>
              <div className="center">
                <h2>Our Skill</h2>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  <br/>et dolore magna aliqua. Ut enim ad minim veniam</p>
              </div>
            </Row>
            <Row className="item-list">
              <Col sm={3}>
                <div className="anlytics-item" style={styles.fadeInDown}>
                  <p>Analytics</p>
                </div>
              </Col>
              <Col sm={3}>
                <div className="creativity-item" style={styles.fadeInDown}>
                  <p>Creativity</p>
                </div>
              </Col>
              <Col sm={3}>
                <div className="communication-item" style={styles.fadeInDown}>
                  <p>Communication</p>
                </div>
              </Col>
              <Col sm={3}>
                <div className="leadership-item" style={styles.fadeInDown}>
                  <p>Leadership</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
      )
  }
}

export default About;
