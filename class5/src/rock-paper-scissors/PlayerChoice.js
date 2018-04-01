import React, { Component } from 'react';

class PlayerChoice extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      <li
        style={{ display: 'inline-block' }}
        onClick={this.handleClick}
      >
        <img
        style={{ width: 100 }}
        src={this.props.imageSrc}
        />
      </li>
    );
  }
}

export default PlayerChoice;
