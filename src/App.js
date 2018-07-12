import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Fixtures from './Fixtures';
import Results from './Results';
import Groups from './Groups';
import PageNotFound from './PageNotFound';

class App extends Component {
  render() {
    return (
      <div className="App container">

        <header className="col-md-12" >
          <h1 id="title">FIFA WORLD CUP 2018</h1>
          <NavLink to='/'><button type="button" className="btn btn-success">FIXTURES</button></NavLink>
          <NavLink to='/results'><button type="button" className="btn btn-success" ref="btn" onClick={this.onClickUploadFile}>RESULTS</button></NavLink>
          <NavLink to='/groups'><button type="button" className="btn btn-success">GROUPS</button></NavLink>
        </header>

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
