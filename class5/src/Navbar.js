import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';

import Home from './Home';
import RockPaperScissor from './rock-paper-scissors/RockPaperScissorsGame';
import CountriesList from './countries-list/CountriesList';
import NoMatch from './NoMatch';

class Navbar extends Component {
    render() {
        return(
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                </header>
                <Router>
                    <div>
                        <ul style={{ listStyleType: 'none', margin: 0, padding: 0}}>
                            <li style={{ display: 'inline', padding: '10px' }}><Link to="/">Home</Link></li>
                            <li style={{ display: 'inline', padding: '10px' }}><Link to="/rock-paper-scissors">Rock Paper Scissor</Link></li>
                            <li style={{ display: 'inline', padding: '10px' }}><Link to="/countries">Countries List</Link></li>
                        </ul>
                        <br />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/rock-paper-scissors" component={RockPaperScissor} />
                            <Route path="/countries" component={CountriesList} />
                            <Redirect from="/countries-list" to="/countries" />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Navbar;