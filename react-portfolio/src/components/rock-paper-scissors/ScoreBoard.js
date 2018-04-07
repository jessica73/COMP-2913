import React, { Component } from 'react';

class ScoreBoard extends Component {
  render() {
    return (
      <table style={{ width: 300, margin: '0 auto' }}>
        <caption>Score Board</caption>
        <thead>
          <tr>
            <th>Player Score</th>
            <th>Computer Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.playerScore}</td>
            <td>{this.props.computerScore}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ScoreBoard;
