import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './App.css';
import NavBtn from './NavBtn';

class NavBar extends Component {
    render() {
        return (
            <header className="col-md-12" >
                <h1 id="title">FIFA WORLD CUP 2018</h1>
                <NavBtn to='/' text='FIXTURES' route={this.props.location.pathname}/>
                <NavBtn to='/results' text='RESULTS' route={this.props.location.pathname}/>
                <NavBtn to='/groups' text='GROUPS' route={this.props.location.pathname}/>
            </header>
        );
    }
}

export default withRouter(NavBar);
