import React, { Component } from 'react';
import './Contact.css';
import gitHub from '../jpg/GitHub-Mark-Light-120px-plus.png';
import linkedin from '../jpg/linkedin.svg';
import email from '../jpg/mail.svg';
import resume from '../jpg/paper.svg';


export default class Contact extends Component {
  render() {
    return (
      <div  className="contact">
        <h1>Lets get in touch!</h1>
        <div>
          <a href="https://github.com/black-penguin">
            <img src={gitHub} alt ='github' />
            <h3>Github</h3>
          </a>
          <a href="https:/www.linkedin.com/in/austin-wheelwright">
            <img src={linkedin} alt ='linkedin' />
            <h3>Linkedin</h3>
          </a>
          <a href="https://drive.google.com/file/d/0B6BHNYAJlMa9RUpXenpnZWFwcGM/view?usp=sharing">
            <img src={resume} alt ='resume' />
            <h3>Resume</h3>
          </a>
          <a href="mailto:austin@austinwheelwright.com">
            <img src={email} alt ='email' />
            <h3>austin@austinwheelwright.com</h3>
          </a>
        </div>
      </div>
    );
    // <a href="mailto:austin@amidstthemountains.com">austin@amidstthemountains.com</a>
  }
}
