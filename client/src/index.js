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
import HomePage from './components/HomePage/HomePage';
import CreateEvent from './components/CreateEvent/CreateEvent';
import Events from './components/Events/Events';
import EventPage from './components/Events/EventPage';


if(localStorage.getItem("id_token")) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}
ReactDOM.render(
    <Router>
        <div>
            <Route path="/:page(profile|homepage|events|createevent|events/:id)" component={ProfileNav} />
            <Route exact path="/" component={Site} />
            <Route exact path="/" component={NavBar} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/homepage" component={HomePage} />
            <Route exact path="/createevent" component={CreateEvent} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/events/:id" component={EventPage} />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
