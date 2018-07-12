import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class NavBtn extends Component {
    render() {
        if (this.props.route === this.props.to) {
            return <button type="button" className="btn btn-success" id="active" disabled>{this.props.text}</button>
        }
        return (
            <NavLink to={this.props.to}><button type="button" className="btn btn-success">{this.props.text}</button></NavLink>
        )
    }
}

export default NavBtn;