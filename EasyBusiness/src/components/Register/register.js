import React, { useState } from "react";
import "./register.css";

import { Link } from "react-router-dom";

import Input from "../Input/input";
import Button from "../Button/button";

const RegisterForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form className="register-form">
      <div>
        <label id="register-label">Register</label>
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
        <Input
          type="password"
          setInput={setConfirm}
          Input={confirm}
          placeholder="Confirm Password"
        />
      </div>
      <div>
        <Input
          type="text"
          setInput={setPhone}
          Input={phone}
          placeholder="Phone Number"
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit" value="Register">
          Register
        </Button>
      </div>
      <div>
        <Link to="/login" className="login-link">
          Already have an account
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
