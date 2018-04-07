import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import NoMatch from './NoMatch';
import RockPaperScissor from '../rock-paper-scissors/RockPaperScissorsGame';
import CountriesList from '../countries-list/CountriesList';
import StopWatch from '../stop-watch/StopWatch';
import TaskList from '../todo/TaskList';

class Navbar extends Component {
    render() {
        const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
            <Route
                path={to}
                exact={activeOnlyWhenExact}
                children={({ match }) => (
                    <span className={match ? "active" : ""}>
                        {match ? "> " : ""}
                        <Link to={to}>{label}</Link>
                    </span>
            )}
            />
        );

        return(
            <div>
                <Router>
                    <div>
                        <ul className="Navbar">
                            <li><OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" /></li>
                            <li><OldSchoolMenuLink to="/rock-paper-scissors" label="Rock Paper Scissor" /></li>
                            <li><OldSchoolMenuLink to="/countries" label="Countries List" /></li>
                            <li><OldSchoolMenuLink to="/stop-watch" label="Stop Watch" /></li>
                            <li><OldSchoolMenuLink to="/task-list" label="Todo List" /></li>
                        </ul>
                        <br />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/rock-paper-scissors" component={RockPaperScissor} />
                            <Route path="/countries" component={CountriesList} />
                            <Redirect from="/countries-list" to="/countries" />
                            <Route path="/stop-watch" component={StopWatch} />
                            <Route path="/task-list" component={TaskList} />
                            <Redirect from="/todo" to="/task-list" />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Navbar;