import React, {Component} from 'react';
import IndividualProfile from './IndividualProfile';
import TeamInfo from '../../assets/constants/Team/TeamInfo.js';
import {Col, Row} from 'react-bootstrap';

class Team extends Component {
  render() {
    return (<div>
      <div className="center">
        <h2>Lenois Ventures Team</h2>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          <br/>et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>
      <Row>
        {
          TeamInfo.map((individual, index) => {
            return (<Col lg={4} key={index}>
              <IndividualProfile
                profileTitle={individual.profileTitle}
                profileName={individual.profileNeme}
                profileEmail={individual.profileEmail}
                profilePhone={individual.profilePhone}
                profileLinkedIn={individual.profileLinkedIn}
                profileTwitter={individual.profileTwitter}
              />
            </Col>)
          })
        }
      </Row>
    </div>)
  }
}

export default Team;
