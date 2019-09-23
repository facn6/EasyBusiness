import React, { useState } from "react";
import "./resetPassword.css";

import { Link } from "react-router-dom";

import Input from "../Input/input";
import Button from "../Button/button";

const ResetForm = () => {
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form className="reset-form">
      <div>
        <label id="reset-label">Reset Password</label>
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
          type="text"
          setInput={setPhone}
          Input={phone}
          placeholder="Phone Number"
        />
      </div>
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
