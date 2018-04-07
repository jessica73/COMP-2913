import React, { Component } from 'react';

class DogView extends Component {
  render() {
    const{ match } = this.props;
    return (
      <div>This is a page for {match.params.breed}</div>
    );
  }
}

export default DogView;
