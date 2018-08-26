import React from "react";
import "./LandingPage.css"; 
import {Link} from 'react-router-dom';

var styles = {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'MediumPurple',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 100 
  };

const LandingPage = (props) => (
<div className="first">
   <h1 className="L">L</h1><h1 className="G">G</h1>
   <h2 className="title">LIFE GLYDE</h2>
   <h2 className="subtitle">ADVENTURE <br></br>SMARTER.</h2>
   <h3 className="description">BRINGING SAFETY AND COMMUNICATION <br></br>
       TO THE WORLD OF EXTREME SPORTS
   </h3>
   <p><Link to="/login" style={styles}>Login</Link></p><p><Link to="/signup" style={styles}>Signup</Link></p>
   </div>
    
);

export default LandingPage;