import React, {Component} from 'react';
import Slider from 'react-slick';

class Portfolio extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      arrows: false
    };
    return (<div>
      <h1>This is Portfolio</h1>
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="1"/>
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="2"/>
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt='3'/>
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="4"/>
          </div>
        </Slider>
      </div>
    </div>)
  }
}

export default Portfolio;
