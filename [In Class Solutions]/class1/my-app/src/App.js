import React, { Component } from 'react';
import Profile from './Profile';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Profile
          name="Rex"
          location="Vancouver"
          imageUrl="https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"
        />
        <Profile
          name="Puppie"
          location="Burnaby"
          imageUrl="http://cdn3-www.dogtime.com/assets/uploads/2011/01/file_23262_entlebucher-mountain-dog-300x189.jpg"
        />
      </div>
    );
  }
}

export default App;
