import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import ImageUploader from './ImageUploader.js';
import Profileform from './Profileform';
import AuthService from '../AuthService';
import "./Profile.css"; 



class Profile extends Component {
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

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
    this.onDrop=this.onDrop.bind(this);
  }
  onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}

  render() {
    return (
      <div>
       <div className="container Profile">
        <h1>Your Profile Page</h1>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>
        <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        <Profileform userId={this.props.user.id}/>
        
      </div>
      </div>


    )
  }
}
// Need to add in a button that submits a form that takes in emergencycontact name and phone
export default withAuth(Profile);