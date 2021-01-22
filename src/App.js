import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={'/'} className="navbar-brand">React Home</Link>
            <div className="collapse navbar-collapse" id="navBarSupportedContent"></div>
              <ul className="navbar-nav mr-auto">
                <li>
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li>
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li>
                  <Link to={'/edit'} className="nav-link">Edit</Link>
                </li>
                <li>
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
          </nav>
        <Switch>
          <Route exact path='/create' component = { Create } />
          <Route exact path='/edit/:id' component = { Edit } />
          <Route exact path='/index' component = { Index } />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
