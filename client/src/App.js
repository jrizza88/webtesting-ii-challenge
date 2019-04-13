import React, { Component } from 'react';
import Display from './baseball/Display/Display';
import Dashboard from './baseball/Dashboard/Dashboard';
import './App.css';

class App extends Component {
  state = {
    strike: 0,
    balls: 0
  };
  render() {
    return (
      <div className="App">
      <h2>Baseball Scoreboard</h2>
      <Display {...this.state}/>
      <Dashboard
        strike={this.strike}
        ball={this.balls}
        foul={this.foul} 
        hit={this.hit}
       />
      </div>
    );
  }

  hit = () => {
    this.setState({ strike: 0, balls: 0})
  }

  strike = () => {
    if (this.state.strike >= 2 ) {
      this.setState({
        strike: 0,
        balls: 0
      });
    } else {
      this.setState({
        strike: this.state.strike + 1
      })
    }
  }

  balls = () => {
    if(this.state.balls >= 3) {
      this.setState({
        strike: 0,
        balls: 0
      })
    } else {
      this.setState({
        balls: this.state.balls + 1
      })
    }
  }

  foul = () => {
      if (this.state.strike < 2 ) {
        this.setState({
          strike: this.state.strike + 1
        });
      } 
  }

}
export default App;
