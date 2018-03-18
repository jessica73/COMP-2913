import React from 'react';

class ClockLabel extends React.Component {
  constructor(props) {
    super(props);

    // you have access to this.props
  }

  componentWillReceiveProps(nextProps) {
    console.log('props changed!', this.props, nextProps);
  }

  render() {
    return (
      <span style={{ color: this.props.color }}>Clock</span>
    );
  }
}

export default ClockLabel;
