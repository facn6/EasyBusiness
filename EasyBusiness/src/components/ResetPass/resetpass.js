import React, { Component } from "react";
import "./resetpass.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button } from "antd";

class ResetForm extends Component {
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
      <Form onSubmit={this.handleSubmit} className="reset-form">
        <Form.Item>
          <label id="reset-label">Reset Password</label>
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
          <Button type="primary" htmlType="submit" id="reset-button">
            Reset
          </Button>
        </Form.Item>
        <Form.Item>
          <Link to="/register">Create a new account</Link>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedResetForm = Form.create({ name: "normal_login" })(ResetForm);

export default WrappedResetForm;
