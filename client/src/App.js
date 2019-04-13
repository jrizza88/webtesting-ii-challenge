import React, { Component } from 'react';
import Display from './baseball/Display/Display';
import Dashboard from './baseball/Dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>Baseball Scoreboard</h2>
      <Display />
      <Dashboard />
      </div>
    );
  }
}

export default App;
