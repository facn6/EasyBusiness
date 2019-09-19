import React from "react";
import { Icon } from "antd";
import "./preLogMenu.css";

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
            <p key="Login">
              <Icon type="login" /> Login
            </p>

            <p key="Register">
              <Icon type="user-add" /> Register
            </p>

            <p key="ContactUs">
              <Icon type="mail" /> Contact Us
            </p>
          </form>
        </div>
      </section>
    );
  }
}

export default PreLogMenu;
