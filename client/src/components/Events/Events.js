import React, { Component } from "react";
import API from "../../utils/API";
//import withAuth from './withAuth';
import "./Events.css";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Link } from 'react-router-dom';

class Events extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="first">
        <Container fluid>
          <Row>
            <Col size="md-12 sm-12">
              <h1>Upcoming Events</h1>
              {this.state.events.length ? (
                <List>
                  {this.state.events.map(event => (
                    <ListItem key={event._id}>
                      <Link to={"/events/" + event._id}>
                        <strong>Event:</strong> {event.eventname} <br></br>
                        <strong>Location:</strong> {event.location} <br></br>
                        <strong>Description:</strong> {event.description} <br></br>
                        <strong>Organizer:</strong> {event.organizer} <br></br>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Events;