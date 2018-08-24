import React, { Component } from "react";
import "./Site.css";
import LandingPage from "../LandingPage";


class Site extends Component {
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