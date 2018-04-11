import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import profileImg from '../../assets/img/Team/teamMember.jpeg';


class IndividualProfile extends Component {
  render() {
    const {profileTitle, profileName, profileEmail, profilePhone, profileLinkedIn, profileTwitter} = this.props
    return (
      <div>
        <img src={profileImg} alt="profileImg"/>
        <div className="profileTitle">
          {profileTitle}
        </div>
        <div className="profileName">
          {profileName}
        </div>
        <div className="profileContact">
          <span>{profileEmail}</span><br/>
          <span>{profilePhone}</span>
        </div>
        <div className="profileSocialIcon">
          <FontAwesome name="linkedin" href={profileLinkedIn}/>
          <FontAwesome name="twitter" href={profileTwitter}/>
        </div>
      </div>
    )
  }
}

export default IndividualProfile;
