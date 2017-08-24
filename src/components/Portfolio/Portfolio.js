import React, { Component } from 'react';
import './Portfolio.css';
import amidstTheMountains from './jpg/amidstTheMountains.JPG';
import rooMinder from './jpg/rooMinder.JPG';
import gitHub from './jpg/GitHub-Mark-Light-120px-plus.png';
import live from './jpg/globe.svg';
import video from './jpg/video-camera.svg';

export default class Portfolio extends Component {
  render() {
    return (
      <div  className="portfolio">
        <div className="left">
          <img src={amidstTheMountains} alt="screenshot of site" />
          <h2>AmidstTheMountains | Personal</h2>
          <h3>Using React, Auth0, Stripe, Node, and PostgreSql this site is designed to display and allow others to purchase different Photographs that I have taken over the years</h3>
          <div className="social">
            <a href="https://github.com/black-penguin/Personal_Project">
              <img id ="link" src={gitHub} alt ='github' />
            </a>
            <a href="#">
              <img id ="link" src={live} alt ='github' />
            </a>
            <a href="#">
              <img id ="link" src={video} alt ='github' />
            </a>
          </div>
        </div>
        <div className="right">
          <img src={rooMinder} alt="screenshot of site" />
          <h2>RooMinder | Group</h2>
          <h3>Using React, Auth0, Node, PostgreSql, FlightStats api, and googles api this site is designed to allow users to enter in a flight number, date, and location, and it will give them the directions to the airport, when they should leave to pick the person up, and reminders based from the preferences they set</h3>
          <div className="social">
            <a href="#">
              <img id ="link" src={video} alt ='github' />
            </a>
            <a href="roomind.me">
              <img id ="link" src={live} alt ='github' />
            </a>
            <a href="https://github.com/FriendFlight/FriendFlight">
              <img id ="link" src={gitHub} alt ='github' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
