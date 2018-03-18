import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <img
          className="profile-image"
          src={this.props.imageUrl}
          style={{ width: 100 }}
        />
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

export default Profile;
