import React, { Component } from 'react';
import IndividualProfile from './IndividualProfile';
import TeamInfo from '../../assets/constants/Team/TeamInfo.js';
import {Col, Row} from 'react-bootstrap';

class Team extends Component {
  render() {
    return (
      <div>
        <div className="center">
          <h2>Lenois Ventures Team</h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            <br/>et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
        <Row>
          <Col lg={4}>
            <IndividualProfile />
          </Col>
          <Col lg={4}>
            <IndividualProfile />
          </Col>
          <Col lg={4}>
            <IndividualProfile />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Team;
