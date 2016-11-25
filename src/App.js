import React, { Component } from 'react';
import Login from './Login';
import FormGroup from './FormGroup';
import './App.css';

class App extends Component {
  render() {
    return (
      <Login>
        <FormGroup />
      </Login>
    );
  }
}

export default App;
