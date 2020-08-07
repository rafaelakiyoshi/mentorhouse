import React from 'react';
import LocationImg from '../../assets/location.svg';
import "./styles.css";

const Landing = () => {
  return (
    <div id="page-landing">
      <div id="landing-content" className="container">
        <div className="title-desc">
          <h1>MentorHouse</h1>
          <h2>Find a Mentor wherever you are.</h2>
        </div>
          <img className="locationImg" src={LocationImg} alt="logo" />
        <div className="buttons-container">
          <a className="find-mentor">Find a Mentor</a>
          <a className="be-mentor">Be a Mentor</a>
        </div>
      </div>
    </div>
  );
}

export default Landing;