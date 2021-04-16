import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import HomePage from './pages/HomePage';
import NotFoundPage from "./pages/NotFoundPage";

class Routes extends Component {

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/*" component={NotFoundPage} />
                </Switch>
            </Router>
        );
    }
}

export default Routes