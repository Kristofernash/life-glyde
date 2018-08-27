import React, { Component } from "react";
import "./HomePage.css";
import AuthService from '../AuthService';
import withAuth from '../withAuth';
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";
import { List, ListItem } from "../List";
import { Link } from 'react-router-dom';
const Auth = new AuthService();


class HomePage extends Component {

    state = {
        userId: this.props.user.id,
        profileLink: "",
        myEvents: [],
        events: []
    };

    componentDidMount() {
        const profileLinkURL = `/profile/${this.state.userId}`;
        const createEventLinkURL = `/createEvent/`;
        const eventsPageLinkURL = `/events/`;
        API.getUser(this.props.user.id).then(res => {
            
            if (res.data.events){
                this.setState({myEvents: [...res.data.events]})
            }
            this.setState({
                profileLink: profileLinkURL,
                createEventLink: createEventLinkURL,
                eventsPageLink: eventsPageLinkURL,
            });
            console.log(this.state.myEvents)
/*             this.loadEvents(this.state.myEvents) */
        });
    }

/*     loadEvents = (myEvents) => {
        API.getEvents(myEvents)
            .then(res => this.setState({ events: [...res.data] },
                console.log(res.data)))
            .catch(err => console.log(err));
    }; */


    handleLogout = () => {
        Auth.logout();
        this.props.history.replace('/');
    };

    goToEditProfile = () => {
        this.props.history.replace(this.state.profileLink);
    };

    goToCreateEvent = () => {
        this.props.history.replace(this.state.createEventLink);
    };

    goToEventsPage = () => {
        this.props.history.replace(this.state.eventsPageLink);
    };

    render() {
        console.log(process.env.REACT_APP_SECRET_CODE);
        return (
            <div className="first">
                <Container fluid>
                    <Row>
                        <Col size="lg-6 md-6 sm-6">
                            <div className="App-header">
                                <h2>Welcome {this.props.user.email}</h2>
                            </div>
                            <p className="App-intro">
                                {/* <button type="button" className="btn btn-primary" onClick={this.goToEditProfile}>Go to Profile</button> */}
                                <Link to={`/profile/${this.props.user.id}`}>Go to Profile</Link>
                                <button type="button" className="btn btn-primary" onClick={this.goToEventsPage}>Events Page</button>
                                { "  " }
                                <button type="button" className="btn btn-primary" onClick={this.goToCreateEvent}>Create New Event</button>
                                { "  " }
                                <button type="button" className="btn btn-primary" onClick={this.handleLogout}>Logout</button>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12 sm-12">
                            <h2>My Events</h2>
                            <Link to="/HomePage">Go home</Link>
                            {this.state.myEvents.length ? (
                                <List>
                                    {this.state.myEvents.map(event => (
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

export default withAuth(HomePage);