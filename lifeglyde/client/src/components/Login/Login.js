import React, {Component} from 'react';
import AuthService from "../AuthService";

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }


  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/profile/${res.data.user._id}`);
      })
      .catch(err => {
        console.log(err.response);
        alert(err.response)
      });
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form autocomplete="off" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input className="form-control"
                   placeholder="Email goes here..."
                   name="email"
                   type="email"
                   id="email"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input className="form-control"
                   placeholder="Password goes here..."
                   name="password"
                   type="password"
                   id="pwd"
                   onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    );
  }
}

export default Login;