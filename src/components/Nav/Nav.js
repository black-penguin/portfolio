import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    );
  }
}
