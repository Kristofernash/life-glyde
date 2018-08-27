import React from "react";
import "./ProfileNav.css"; 
import AuthService from '../AuthService';
import {Link} from 'react-router-dom';

class ProfileNav extends React.Component{
  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
    username: "",
    profileLink: "",
    email: "",
    pictures:[],
    loggedIn: true
  }
}

  clickedLogout = () => {
    this.Auth.logout();
  }
  
    render(){
        return(
<nav class="navbar navbar-expand-lg navbar-light">
<div class="logo">
</div>
<h1 className="life">LIFE</h1><h1 className="glide">GLYDE</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      {(this.Auth.loggedIn()) ?
        <li class="nav-item">
          <Link class="nav-link" to={`/profile`}>Profile</Link>
        </li>
        :
        ""
      }
      <li class="nav-item ">
        <Link className="nav-link" to="/events">Events</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" button id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="/createEvent">Create Event</Link>
          <div class="dropdown-divider"></div>
          {this.Auth.loggedIn() ? <button onClick= {this.clickedLogout}>Log Out</button>:null}
        </div>
      </li>
    </ul>
  </div>
</nav>
        )
    }
}

export default ProfileNav;