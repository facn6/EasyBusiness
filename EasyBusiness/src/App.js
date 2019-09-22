import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/Login/login";
import PreLogMenu from "./components/PreLogMenu/preLogMenu";
import RegisterForm from "./components/Register/register";

const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;

class App extends Component {
  render() {
    return (
      <Router>
        <body className="App">
          <PreLogMenu />
          <section className="login-section">
            <Route path="/login" component={LoginForm} />
          </section>
          <section className="register-section">
            <Route path="/register" component={RegisterForm} />
          </section>
        </body>
      </Router>
    );
  }
}

export default App;
