import React from "react";
import { Menu, Icon } from "antd";
import "./preLogMenu.css";

class PreLogMenu extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <section class="MenuSection">
        <Menu
          id="menu"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item id="menuItem" key="Login">
            <Icon type="login" />
            Login
          </Menu.Item>
          <Menu.Item id="menuItem" key="Register">
            <Icon type="user-add" />
            Register
          </Menu.Item>
          <Menu.Item id="menuItem" key="ContactUs">
            <Icon type="mail" />
            Contact Us
          </Menu.Item>
        </Menu>
      </section>
    );
  }
}

export default PreLogMenu;
