import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </header>
          <Navbar />
      </div>
    );
  }
}

export default App;
