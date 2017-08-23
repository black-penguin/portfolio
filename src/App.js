import React, { Component } from 'react';
import './reset.css';
import './App.css';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

export default class App extends Component {
  render() {
    return (
      <div  className="app">
        <Nav />
        <div className="info">
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </div>
    );
  }
}
