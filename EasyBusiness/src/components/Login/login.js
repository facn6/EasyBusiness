import React, { useState } from "react";
import "./login.css";
import validate from "../../functions/validate";

import { Link } from "react-router-dom";

import Input from "../Input/input";
import Button from "../Button/button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  const CheckUser = e => {
    e.preventDefault();
    setErrors(validate({ username, password }));

    // return fetch(`/home?username=${username}&password=${password}`, {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(function(response) {
    //     window.location.pathname = "/home";
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  };

  return (
    <form className="login-form" onSubmit={CheckUser}>
      <div>
        <label id="login-label">Login</label>
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
          type="password"
          setInput={setPassword}
          Input={password}
          placeholder="Password"
        />
      </div>
      {errors.password && <p class="error">{errors.password}</p>}
      <div>
        <Link to="/reset-password" className="reset-link">
          Forgot your password?
        </Link>
      </div>
      <div>
        <Button type="submit" htmlType="submit" value="Login"></Button>
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
