import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jessica's Todo List</h1>
        </header>
        <br />
        <TaskList />
      </div>
    );
  }
}

export default App;
