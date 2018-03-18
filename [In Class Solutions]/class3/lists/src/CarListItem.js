import React, { Component } from 'react';

class CarListItem extends Component {
  render() {
    return (
      <li>
        <img style={{ width: 100 }} src={this.props.imageUrl} />
        {this.props.brand}
        {this.props.make}
        {this.props.year}
        {this.props.price}
        {this.props.isNew ? 'New' : 'Used'}
      </li>
    );
  }
}

export default CarListItem;
