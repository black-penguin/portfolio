import React, { Component } from 'react';
import './Portfolio.css';
import amidstTheMountains from './jpg/amidstTheMountains.JPG';
import rooMinder from './jpg/rooMinder.JPG';
import gitHub from '../jpg/GitHub-Mark-Light-120px-plus.png';
import live from '../jpg/globe.svg';
import video from '../jpg/video-camera.svg';

export default class Portfolio extends Component {
  render() {
    return (
      <div  className="portfolio">
        <div className="left">
          <img src={amidstTheMountains} alt="screenshot of site" />
          <h2>AmidstTheMountains | Personal</h2>
          <h3>React | Redux | Rest API | ES6 | Node | PostgreSQL | Auth0 | Stripe</h3>
          <h3>This site is designed to display my photographs that I have taken over the years and allow others to purchase them on Canvas or Metal Prints</h3>
          <div className="social">
            <a href="https://github.com/black-penguin/Personal_Project">
              <img id ="link" src={gitHub} alt ='github' />
            </a>
            <a href="https://amidstthemountains.com">
              <img id ="link" src={live} alt ='github' />
            </a>
            <a href="#">
              <img id ="link" src={video} alt ='github' />
            </a>
          </div>
        </div>
        <div className="left">
          <img src={rooMinder} alt="screenshot of site" />
          <h2>RooMinder | Group</h2>
          <h3>React | Node | PostgreSQL | Auth0 | Flight Stats Api | Twilio | Nodemailer | 4 Google Apis</h3>
          <h3>This site is designed to allow users to enter in a flight number, date, and location, and it will give them the directions to the airport and notifications on when to leave</h3>
          <div className="social">
            <a href="https://github.com/FriendFlight/FriendFlight">
              <img id ="link" src={gitHub} alt ='github' />
            </a>
            <a href="https://roomind.me">
              <img id ="link" src={live} alt ='github' />
            </a>
            <a href="#">
              <img id ="link" src={video} alt ='github' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
