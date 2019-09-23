import React from "react";
import { Icon } from "antd";
import "./preLogMenu.css";
import { Link } from "react-router-dom";

const PreLogMenu = () => {
  return (
    <section class="menubar">
      <form class="menu">
        <Link to="/login" key="Login">
          <Icon type="login" /> Login
        </Link>
        |
        <Link to="/register" key="Register">
          <Icon type="user-add" /> Register
        </Link>
      </form>
    </section>
  );
};

export default PreLogMenu;
