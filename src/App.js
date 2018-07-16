import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    problems: [
      {name: "api", amount: "0"},
      {name: "acl", amount: "5"},
      {name: "translations", amount: "99"}
    ],
    counter: 0
  } 

  switchProblemHandler = () => {
    let increment = this.state.counter + 1;
    if (increment  >= this.state.problems.length)  {
      increment = 0;
    }
    this.setState({counter: increment});
  }

  render() {
    return (
      <div className="App">
       <h1>It's not my problem! ¯\_(ツ)_/¯</h1>
       <button onClick={this.switchProblemHandler}>Switch Problems</button>
       <Person name={this.state.problems[this.state.counter].name} amount={this.state.problems[this.state.counter].amount}/>


      </div>
    );
  }
}

export default App;
