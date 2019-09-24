import React, { useState } from "react";
import "./login.css";

import { Link } from "react-router-dom";

import Input from "../Input/input";
import Button from "../Button/button";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="login-form">
      <div>
        <label id="login-label">Login</label>
      </div>
      <br></br>
      <div>
        <Input
          type="text"
          setInput={setUser}
          Input={user}
          placeholder="Username"
        />
      </div>
      <div>
        <Input
          type="password"
          setInput={setPassword}
          Input={password}
          placeholder="Password"
        />
      </div>
      <div>
        <Link to="/reset-password" className="reset-link">
          Forgot your password?
        </Link>
      </div>
      <div>
        <Button type="primary" htmlType="submit" value="Login"></Button>
      </div>
      <div>
        <Link to="/register" className="register-link">
          Create a new account
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
