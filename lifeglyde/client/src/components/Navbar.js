import React, { Component } from 'react';
import withAuth from './withAuth';
import API from '../utils/API';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Life Glyde</a>
            <a className="nav-link" ><Link to="/Logout"></Link>Log Out</a>
            </nav>)
    }



}

export default withAuth(Navbar);