import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar';
import Fixtures from './Fixtures';
import Results from './Results';
import Groups from './Groups';
import PageNotFound from './PageNotFound';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavBar/>

        <div className="col-md-12" id="app-body">
          <Switch>
            <Route exact path='/' render={() => (
              <Fixtures />
            )} />
            <Route exact path='/results' render={() => (
              <Results />
            )} />
            <Route exact path='/groups' render={() => (
              <Groups />
            )} />
            <Route render={() => (
              <PageNotFound />
            )} />
          </Switch>
        </div>

        <footer className="col-md-12" >
          <p id="footer">Alexander Mann 2018</p>
        </footer>

      </div >
    );
  }
}

export default App;
