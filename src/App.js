import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import render from 'dom-serializer';
import './App.css';

class App extends React.Component {
  render() {
    const name = 'Bob doe';
    return (
      <div className='App'>
        <Navbar />
      </div>
    );
  }
}

export default App;
