
import React, { Component } from "react";
import "./App.css";
import AuthService from "./components/AuthService";
import withAuth from "./components/withAuth";
import Form from "./components/Form";

import Site from "./components/Site";


const Auth = new AuthService();

class App extends Component {
  state = {
    userId: this.props.user.id,
    profileLink: ""
    

  };

  componentDidMount() {
    const profileLinkURL = `/profile/${this.state.userId}`;
    this.setState({
      profileLink: profileLinkURL
    });
  }


  

  handleLogout = () => {
    Auth.logout();
    this.props.history.replace("/signup");
  };

  goToEditProfile = () => {
    this.props.history.replace(this.state.profileLink);
  };

  onSubmit = fields => {
    console.log("app comp got: ", fields);
  };

  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);
    return (

        <div className="App">
          <Form onSubmit={fields => this.onSubmit(fields)} />
      <Site/>
        </div>
  
     

    );
  }
}

export default withAuth(App);
