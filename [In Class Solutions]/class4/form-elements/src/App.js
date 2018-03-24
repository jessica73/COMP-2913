import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { firstName: '', lastName: '', description: '', gender: '', likesReact: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // const newState = {};
    // newState[e.target.name] = e.target.value;
    // this.setState(newState);
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: newValue });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        First Name:
        <input name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        Last Name:
        <input name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        Description
        <textarea name="description" value={this.state.description} onChange={this.handleChange} />
        <select name="gender" value={this.state.gender} onChange={this.handleChange}>
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        Likes React
        <input type="checkbox" name="likesReact" checked={this.state.likesReact} onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
