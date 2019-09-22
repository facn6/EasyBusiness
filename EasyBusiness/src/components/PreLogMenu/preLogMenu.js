import React from "react";
import { Icon } from "antd";
import "./preLogMenu.css";
import { Link } from "react-router-dom";

class PreLogMenu extends React.Component {
  state = {
    current: "Login"
  };

  render() {
    return (
      <section class="menubar">
        <div>
          <form
            class="menu"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
          >
            <Link to="/login" key="Login">
              <Icon type="login" /> Login
            </Link>

            <Link to="/register" key="Register">
              <Icon type="user-add" /> Register
            </Link>
          </form>
        </div>
      </section>
    );
  }
}

export default PreLogMenu;
