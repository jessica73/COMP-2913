import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RockPaperScissorsGame from './rock-paper-scissors/RockPaperScissorsGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rock Paper Scissors</h1>
        </header>
        <RockPaperScissorsGame />
      </div>
    );
  }
}

export default App;
