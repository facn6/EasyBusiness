
import React, { Component } from "react";
import "./login.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Form} from "antd";
import Button from '../Button/button';
import Input from '../Input/input';
class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          <label id="login-label">Login</label>
        </Form.Item>
        <br></br>
       <Input  placeholder="username"/>
       <Input type="password" placeholder="password"/>
        <Form.Item>
          <Link to="/reset-password" className="reset-password-link">
            Forgot your password
          </Link>
        </Form.Item>
        <Button value="Login" />
        <Form.Item>
          <Link to="/register">Create a new account</Link>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;

   

    
    
