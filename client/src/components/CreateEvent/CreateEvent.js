import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import "./CreateEvent.css";

class CreateEvent extends Component {

  state = {
    eventname: "",
    location: "",
    description: "",
    organizer: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.props.user.id)
    API.createEvent(
      this.state.eventname,
      this.state.location,
      this.state.description,
      this.state.organizer
    )
      .then(res => console.log(res),
        this.props.history.replace('/events'))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="first">
        <div className="container Event">
          <h1>Create New Event!</h1>
          <form onSubmit={this.handleFormSubmit}>
            <p>Event Name:</p>
            <div className="form-group">
              <input className="form-control"
                placeholder="Event name goes here..."
                name="eventname"
                type="eventname"
                id="eventname"
                onChange={this.handleChange} />
            </div>
            <p>Location:</p>
            <div className="form-group">
              <input className="form-control"
                placeholder="Location goes here..."
                name="location"
                type="location"
                id="location"
                onChange={this.handleChange} />
            </div>
            <p>Description:</p>
            <div className="form-group">
              <textarea className="form-control"
                style={{ minWidth: '100%' }}
                placeholder="Description goes here..."
                name="description"
                type="description"
                id="description"
                onChange={this.handleChange} />
            </div>
            <p>Organizer:</p>
            <div className="form-group">
              <input className="form-control"
                placeholder="Organizer goes here..."
                name="organizer"
                type="organizer"
                id="organizer"
                onChange={this.handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">Create Event</button>
          </form>
          &nbsp;
        <Link to="/HomePage">Go home</Link>
        </div>
      </div>
    )
  }
}

export default withAuth(CreateEvent);