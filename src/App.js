import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
    { name: 'Max', age: 28},
    { name: 'Erika', age: 32}
    ]
  }

  switchNameHandler = () => {
    // alert('Was clicked!');
    // this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28},
        { name: 'Erika', age: 30}
        ] });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I like cheese</Person>
      </div>
    );
  }
}

export default App;
