import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import profileImg from '../../assets/img/Team/teamMember.jpeg';


class IndividualProfile extends Component {
  render() {
    return (
      <div>
        <img src={profileImg} />
        <div className="profileTitle">
          CEO
        </div>
        <div className="profileName">
          Shon
        </div>
        <div className="profileContact">
          <span>info@mysite.com</span><br/>
          <span>+123-456-7890</span>
        </div>
        <div className="profileSocialIcon">
          <FontAwesome name="linkedin" />
          <FontAwesome name="twitter" />
        </div>
      </div>
    )
  }
}

export default IndividualProfile;
