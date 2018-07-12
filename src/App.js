import React, { Component } from 'react';
import './App.css';
import UserMenu from './Components/UserMenu/UserMenu';
import Audit from './Components/Audit/Audit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="user-menu">
          <UserMenu />
        </div>
        <Audit />
      </div>
    );
  }
}

export default App;
