import React, { Component } from "react";
import "./register.css";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";

class RegisterForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="register-form">
        <Form.Item>
          <label id="register-label">Register</label>
        </Form.Item>
        <br></br>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("confirm password", {
            rules: [
              { required: true, message: "Please confirm your password!" }
            ]
          })(
            <Input
              prefix={
                <Icon type="reload" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              type="password"
              placeholder="Confirm Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("phone number", {
            rules: [
              { required: true, message: "Please insert your phone number" }
            ]
          })(
            <Input
              prefix={
                <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              type="basic"
              placeholder="Phone Number"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button id="register-button" type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
        <Form.Item>
          <Link to="/login">Already have an account </Link>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegisterForm = Form.create({ name: "normal_login" })(RegisterForm);

export default WrappedRegisterForm;
