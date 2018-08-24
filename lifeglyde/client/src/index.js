import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Profile from './components/Profile/Profile';

import Site from './components/Site';
import NavBar from './components/NavBar';
import ProfileNav from './components/ProfileNav/ProfileNav';


if(localStorage.getItem("id_token")) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Site} />
            <Route exact path="/signup" component={Site} />
            <Route exact path="/signup" component={NavBar} />
            <Route exact path="/profile" component={ProfileNav} />
            <Route exact path="/profile" component={Profile} />

        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
