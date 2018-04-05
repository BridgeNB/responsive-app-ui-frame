import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {Grid, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }
  render() {
    return (<div className="rauf-footer">
      <Row>
        <Col lg={3} md={6} sm={6} xs={6}>
          <div className="footer-logo-name">
            <Link to="/" title={'Home'}>
              LOGO + Leonis Venture
            </Link>
          </div>
        </Col>
        <Col lg={3} mdHidden smHidden xsHidden>
          <div className="footer-address">
            <a>800 Wilshire Blvd</a><br/>
            <a>Los Angeles, CA 90017</a>
          </div>
        </Col>
        <Col lg={3} mdHidden smHidden xsHidden>
          <div className="footer-contact">
            <a>+ 123-456-789</a><br/>
            <a>info@leonisventure.com</a>
          </div>
        </Col>
        <Col lg={3} md={6} sm={6} xs={6}>
          <div className="footer-social-icon">
            <div className="social">
              <ul className="social-share">
                <li>
                  <a href="/">
                    <FontAwesome name="facebook"/>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesome name="twitter"/>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesome name="linkedin"/>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesome name="dribbble"/>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesome name="skype"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>)
  }
}

export default Footer;
