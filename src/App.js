import React, { Component } from 'react';
import render from 'dom-serializer';
import './App.css';

class App extends React.Component {
  render() {
    const name = 'Bob doe';
    return (
      <div className='App'>
        <h1>Hello From {name}</h1>
      </div>
    );
  }
}

export default App;
