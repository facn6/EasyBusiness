import React, { useState } from "react";
import "./resetPassword.css";

import { Link } from "react-router-dom";

import Input from "../Input/input";
import Button from "../Button/button";

import validate from "../../functions/validate";

const ResetForm = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    phone: ""
  });

  const CheckUser = e => {
    e.preventDefault();

    setErrors(validate({ username, phone }));
  };

  return (
    <form className="reset-form" onSubmit={CheckUser}>
      <div>
        <label id="reset-label">Reset Password</label>
      </div>
      <br></br>
      <div>
        <Input
          type="text"
          setInput={setUsername}
          Input={username}
          placeholder="Username"
        />
      </div>
      {errors.username && <p class="error">{errors.username}</p>}
      <div>
        <Input
          type="text"
          setInput={setPhone}
          Input={phone}
          placeholder="Phone Number"
        />
      </div>
      {errors.phone && <p class="error">{errors.phone}</p>}
      <div>
        <Button type="primary" htmlType="submit" value="Reset"></Button>
      </div>
      <div>
        <Link to="/register" className="register-link">
          Create a new account
        </Link>
      </div>
    </form>
  );
};

export default ResetForm;
