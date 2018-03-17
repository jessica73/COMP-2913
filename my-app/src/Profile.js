import React, { Component } from 'react';
import './Profile.css'

class Profile extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.location}</p>
        <img
          src={this.props.imageUrl}
          className="Profile-image" />
      </div>
    )
  }
}

export default Profile;
