import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Map from './Map'

class Contact extends Component {
  render() {
    return (<div className="contact">
      <div className="center">
        <h2>How to contact us</h2>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          <br/>et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>
      <Grid className="address-info">
        <div className="gmap-area">
          <Row>
            <Col sm={5}>
              <div className="gmap">
                  <Map />
              </div>
            </Col>
            <Col sm={7} className="map-content">
              <Row>
                <ul>
                  <Col sm={6}>
                    <li>
                      <address>
                          <h5>Head Office</h5>
                          <p>1537 Flint Street <br/>
                          Tumon, MP 96911</p>
                          <p>Phone:670-898-2847 <br/>
                          Email Address:info@domain.com</p>
                      </address>
                      <address>
                          <h5>Zonal Office</h5>
                          <p>1537 Flint Street <br/>
                          Tumon, MP 96911</p>
                          <p>Phone:670-898-2847 <br/>
                          Email Address:info@domain.com</p>
                      </address>
                    </li>
                  </Col>
                  <Col sm={6}>
                    <li>
                      <address>
                          <h5>Zone#2 Office</h5>
                          <p>1537 Flint Street <br/>
                          Tumon, MP 96911</p>
                          <p>Phone:670-898-2847 <br/>
                          Email Address:info@domain.com</p>
                      </address>
                      <address>
                          <h5>Zone#3 Office</h5>
                          <p>1537 Flint Street <br/>
                          Tumon, MP 96911</p>
                          <p>Phone:670-898-2847 <br/>
                          Email Address:info@domain.com</p>
                      </address>
                    </li>
                  </Col>
                </ul>
              </Row>
            </Col>
          </Row>
        </div>
      </Grid>
    </div>)
  }
}

export default Contact;
