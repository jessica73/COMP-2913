import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DogView from './DogView';

class Dogs extends Component {
  render() {
    return (
      <div>
        <h1>Dogs</h1>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/chihuahua`}>Chihuahua</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/labrador`}>Labrador</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/akita`}>Akita</Link>
          </li>
        </ul>
        <Route path={`${this.props.match.url}/:breed`} component={DogView}/>
      </div>
    );
  }
}

export default Dogs;
