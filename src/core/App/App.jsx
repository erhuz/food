import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, Grommet } from 'grommet';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Navbar from 'partials/Navbar';

import './App.css';
import Login from 'pages/Login';
import Welcome from 'pages/Welcome';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);

    if(this.state.isAuthenticated){
      return (
        <Router>
          <Grommet plain>
            <Switch>
              <Route exact path='/' render={(props) => <Home {...props} />} />
              <Route render={(props) => <NotFound {...props} />} />
            </Switch>
            <Navbar items={[{ label: 'logout' }]} />
          </Grommet>
        </Router>
      );
    } else {
      return (
        <Router>
          <Grommet plain>
            <Switch>
              <Route exact path='/' render={(props) => <Welcome {...props} />} />
              <Route path='/login' render={(props) => <Login {...props} />} />
              <Route render={(props) => <NotFound {...props} />} />
            </Switch>
          </Grommet>
        </Router>
      );
    }
  }
}

export default App;
