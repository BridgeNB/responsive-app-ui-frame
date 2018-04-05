import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class About extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      arrows: false
    };
    return (
      <div>
        <h1>This is about us</h1>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="images/slider_one.jpg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://placekitten.com/g/400/200" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://placekitten.com/g/400/200" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>;
      </div>
    )
  }
}

export default About;
