import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Site from './components/Site';
import NavBar from './components/NavBar';


if(localStorage.getItem("id_token")) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Site} />
            <Route exact path="/signup" component={NavBar} />
            <Route exact path="/profile/:id" component={Profile} />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
