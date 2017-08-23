import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>Contact</li>
          <li>Portfolio</li>
          <li>Skills</li>
          <li>About</li>
          <li>Home</li>
        </ul>
      </div>
    );
  }
}
