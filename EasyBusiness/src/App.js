
import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/Login/login';
class App extends Component {
  render() {
    return (
      <div>
        <PreLogMenu />
      <form >
        <LoginForm/>
      </form>
      </div>

    );
  }
}

export default App;
