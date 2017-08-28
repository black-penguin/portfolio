import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div  className="contact">
        <h1>Lets get in touch!</h1>
        <a href="mailto:austin@amidstthemountains.com">austin@amidstthemountains.com</a>
      </div>
    );
  }
}
