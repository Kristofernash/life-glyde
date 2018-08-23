import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import ProfileNav from './components/ProfileNav';

import Site from './components/Site';
import NavBar from './components/NavBar';


if(localStorage.getItem("id_token")) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Site} />
            <Route exact path="/signup" component={Site} />
            <Route exact path="/signup" component={NavBar} />
            <Route exact path="/profile/" component={ProfileNav} />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
