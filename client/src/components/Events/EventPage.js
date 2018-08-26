import React, { Component } from "react";
import API from "../../utils/API";
import withAuth from '../withAuth';
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Link } from 'react-router-dom';

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.handleJoinButton = this.handleJoinButton.bind(this);
}
  state = {
    id: "",
    eventname: "",
    location: "",
    description: "",
    organizer: "",
    events: ""
  };

  componentDidMount() {
    this.loadEvent();
  }

  loadEvent = () => {
    console.log(this.props);
    API.getEvent(this.props.match.params.id)
      .then(res => this.setState({
        id: res.data._id,
        eventname: res.data.eventname,
        location: res.data.location,
        description: res.data.description,
        organizer: res.data.organizer
      }))
      .catch(err => console.log(err));
  };

handleJoinButton = event => {
    event.preventDefault();
    console.log(this.props.user.id)
    this.setState({ events: this.props.match.params.id});
    API.updateUserWithObject(
      this.props.user.id,
      {events: this.props.match.params.id}
    )
      .then(res => this.componentDidMount())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="first">
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Link to="/HomePage">Go home</Link>
            <button type="submit" className="btn btn-primary" onClick={this.handleJoinButton}>Join Event!</button>
              <List>
                <ListItem key={this.state._id}>

                  <strong>Event:</strong> {this.state.eventname} <br></br>
                  <strong>Location:</strong> {this.state.location} <br></br>
                  <strong>Description:</strong> {this.state.description} <br></br>
                  <strong>Organizer:</strong> {this.state.organizer} <br></br>

                </ListItem>
              </List>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default withAuth(EventPage);