import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import render from 'dom-serializer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
