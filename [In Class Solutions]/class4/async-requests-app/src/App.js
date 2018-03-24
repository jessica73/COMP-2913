import React, { Component } from 'react';
import CountriesList from './CountriesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Countries List</h1>
        </header>
        <CountriesList />
      </div>
    );
  }
}

export default App;
