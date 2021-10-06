// import { render } from '@testing-library/react';
import { render } from '@testing-library/react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
