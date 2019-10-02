import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/Login/login";
import PreLogMenu from "./components/PreLogMenu/preLogMenu";
import PostLogMenu from "./components/PostLogMenu/postLogMenu";
import RegisterForm from "./components/Register/register";
import InventoryForm from "./components/Inventory/inventory";
import SuppliersForm from './components/Suppliers/supplier';
import CustomersForm from './components/Customers/customers';
import ResetForm from "./components/ResetPassword/resetPassword";
import Logo from "./components/Logo/logo";
import Home from "./components/Home/home";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <body>
          <section className="pre-log">
            <Route exact path="/" component={() => <Redirect to="/login" />} />
          </section>
          <section className="pre-log">
            <Route path="/login" component={PreLogMenu} />
            <Route path="/login" component={Logo} />
            <Route path="/login" component={LoginForm} />
          </section>
          <section className="pre-log">
            <Route path="/register" component={PreLogMenu} />
            <Route path="/register" component={Logo} />
            <Route path="/register" component={RegisterForm} />
          </section>
          <section className="pre-log">
            <Route path="/reset-password" component={PreLogMenu} />
            <Route path="/reset-password" component={Logo} />
            <Route path="/reset-password" component={ResetForm} />
          </section>
          <section className="post-log">
            <Route path="/home" component={PostLogMenu} />
            <Route path="/home" component={Home} />
          </section>
          <section className="post-log">
            <Route path="/inventory" component={PostLogMenu} />
            <Route path="/inventory" component={InventoryForm} />

          </section>
          <section className="post-log">
            <Route path="/suppliers" component={PostLogMenu} />
            <Route path="/suppliers" component={SuppliersForm} />

          </section>
          <section className="post-log">
            <Route path="/customers" component={PostLogMenu} />
            <Route path="/customers" component={CustomersForm} />

          </section>
          <section className="post-log">
            <Route path="/deals" component={PostLogMenu} />
          </section>
        </body>
        <footer>
          Easy Business | Internal Founders & Coders Project With React JS |
          Dana Falah | Ghassan Gharzuzy
        </footer>
      </Router>
    );
  }
}

export default App;
