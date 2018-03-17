import React, { Component } from 'react';
import Profile from './Profile';
import Header from './Header';
import logo from './logo.svg';
import profilePic from './profile.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          logo={logo}
          title="Welcome to COMP 2913" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    		<p>
    			Why, hello! Oh! How snazzy :)
    		</p>
        <Profile
          name="Admin"
          location="BCIT"
          imageUrl={profilePic} />
        <Profile
          name="Bulbasaur"
          location="Grass"
          imageUrl="https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png"/>
        <Profile
          name="Charmander"
          location="Fire"
          imageUrl="https://static.giantbomb.com/uploads/scale_small/0/6087/2438704-1202149925_t.png" />
        <Profile
          name="Squirtle"
          location="Water"
          imageUrl="https://static.giantbomb.com/uploads/scale_small/13/135472/1891764-007squirtle.png" />
        <Profile
          name="Pikachu"
          location="Electricity"
          imageUrl="https://static.giantbomb.com/uploads/scale_small/0/6087/2437349-pikachu.png" />
      </div>
    );
  }
}

export default App;
