import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeView from './HomeView';
import TestView from './TestView';
import Dogs from './Dogs';
import NotFound from './NotFound';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/test">Test View</Link>
            </li>
            <li>
              <Link to="/dogs">Dogs</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={HomeView}/>
            <Route path="/test" component={TestView}/>
            <Route path="/dogs" component={Dogs}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
