import React, { Component } from 'react';
import './App.css';

import WeatherForecast from './WeatherForecast';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jessica's Weather for Top 10 Places to Live (2017)</h1>
          <a href="https://www.yahoo.com/?ilc=401" target="_blank"> <img src="https://poweredby.yahoo.com/white.png" width="134" height="29"/> </a>
        </header>
        <WeatherForecast />
      </div>
    );
  }
}

export default App;
