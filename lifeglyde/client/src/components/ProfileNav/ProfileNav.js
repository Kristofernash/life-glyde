import React from "react";
import "./ProfileNav.css"; 
import AuthService from '../AuthService';

class ProfileNav extends React.Component{
  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
    username: "",
    email: "",
    pictures:[],
    loggedIn: true
  }
}
  clickedLogout = () => {
    this.Auth.logout();
    this.props.history.replace('/')
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
        <a class="nav-link" href="/profile">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/profile">Profile</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" button id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        {this.Auth.loggedIn() ? <button onClick= {this.clickedLogout}>Log Out</button>:null}
          <a class="dropdown-item" button>Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" button>Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
        )
    }
}

export default ProfileNav;