import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, Grommet } from 'grommet';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Navbar from 'partials/Navbar';

import './App.css';
import Welcome from 'pages/Welcome';
import Food from 'pages/Food/Food';
import GroceryList from 'pages/GroceryList';
import Settings from 'pages/Settings/Settings';
import { ToastProvider } from 'react-toast-notifications';

const localStorage = window.localStorage;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: localStorage.getItem('isAuthenticated') === "true" || false,
    };
  }

  setAuthenticated = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated }, () => {
      localStorage.setItem('isAuthenticated', this.state.isAuthenticated);
    });
  }

  render() {
    if(this.state.isAuthenticated === true){
      return (
        <ToastProvider
          autoDismiss
          autoDismissTimeout={4000}
          placement="top-center"
        >
          <Router>
            <Grommet plain>
              <Switch>
                <Route exact path='/' render={(props) => <Home {...props} />} />
                <Route exact path='/food' render={(props) => <Food {...props} />} />
                <Route exact path='/grocery-list' render={(props) => <GroceryList {...props} />} />
                <Route exact path='/settings' render={(props) => <Settings {...props} />} />
                <Route render={(props) => <NotFound {...props} />} />
              </Switch>
              <Navbar />
            </Grommet>
          </Router>
        </ToastProvider>
      );
    } else {
      return (
        <Router>
          <Grommet plain>
            <Switch>
              <Route exact path='/' render={(props) => <Welcome setAuthenticated={this.setAuthenticated} {...props} />} />
              <Route render={(props) => <NotFound {...props} />} />
            </Switch>
          </Grommet>
        </Router>
      );
    }
  }
}

export default App;
