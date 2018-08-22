import React, { Component } from 'react';
import withAuth from './withAuth';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
class Profile extends Component {

  state = {
    username: "",
    email: "",
    pictures:[]
  };

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
      <div className="container Profile">
        <h1>Your Profile Page</h1>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>
        <Link to="/">Go home</Link>
        <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
      </div>


    )
  }
}

export default withAuth(Profile);