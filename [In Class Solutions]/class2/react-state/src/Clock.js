import React from 'react';
import ClockLabel from './ClockLabel';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
      color: 'red',
      backgroundColor: 'transparent'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.setState({ test: true });
    console.log('test state' , this.state.test);
  }

  componentDidMount() {
    console.log('conponentDidMount');

    setInterval(() => {
      this.setState({
        currentDate: new Date(),
        color: this.state.color === 'red' ? 'blue' : 'red'
      });
    }, 1000);
  }

  handleClick() {
    this.setState({ backgroundColor: 'yellow' });
  }

  render() {
    return (
      <div
        style={{ color: this.state.color,
        backgroundColor: this.state.backgroundColor }}
        onClick={this.handleClick}
      >
        <ClockLabel color={this.state.color} />
        {this.state.currentDate.toString()}
      </div>
    );
  }
}

export default Clock;
