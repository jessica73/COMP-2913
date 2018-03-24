import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginView from './LoginView';
import CountrySearch from './CountrySearch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authorized: false
    }

    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  handleAuthentication(isAuthorized) {
    this.setState({
      authorized: isAuthorized
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        {this.state.authorized ? <CountrySearch /> : <LoginView onClick={this.handleAuthentication} /> }
      </div>
    );
  }
}

export default App;
