import React, { Component } from "react";
import "./Site.css";
import LandingPage from "../LandingPage";
import AuthService from '../AuthService';


class Site extends Component {
componentDidMount() {
    document.body.style.backgroundImage="../../images/paragliding.png";
      }
    render() {
        return (
            <div className="main">
                <LandingPage
                />
            </div>
        )
    }
}

export default Site;