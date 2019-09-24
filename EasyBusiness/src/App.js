import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/Login/login";
import PreLogMenu from "./components/PreLogMenu/preLogMenu";
import RegisterForm from "./components/Register/register";
import ResetForm from "./components/ResetPassword/resetPassword";
import logo from "./ebl.png";
import background from "./background.png";

const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;

class App extends Component {
  render() {
    return (
      <Router>
        <body>
          <section id="menuSection">
            <PreLogMenu />
          </section>
          <section class="blue">
            <img src={logo} alt="Logo" className="logo" />
            <img src={background} alt="bg" className="bg" />
          </section>
          <section className="main-section">
            <Route path="/login" component={LoginForm} />
          </section>
          <section className="main-section">
            <Route path="/register" component={RegisterForm} />
          </section>
          <section className="main-section">
            <Route path="/reset-password" component={ResetForm} />
          </section>
        </body>
        <footer> Easy Business | Internal Project With React JS </footer>
      </Router>
    );
  }
}

export default App;
