import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/Login/login';
class App extends Component {
  render() {
    return (
      <form >
        <LoginForm/>
      </form>
    );
  }
}

export default App;