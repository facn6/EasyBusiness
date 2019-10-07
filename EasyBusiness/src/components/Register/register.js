import React, { useState, Component, useEffect } from "react";
import "./register.css";
import validate from "../../functions/validate";

import { Link } from "react-router-dom";

import Input from "../Input/input";
import Button from "../Button/button";

const RegisterForm = () => {
  //Hooks, each var will be changed when the users trypes something in the input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirm: "",
    phone: ""
  });

  const addNewUser = e => {
    // Prevents the default behavaior of the browser of refreshing the page when clicking submit
    e.preventDefault();

    // Checking if there is any errors in the inputs then updating

    setErrors(validate({ username, password, confirm, phone }))
console.log("pass" , password);
console.log("confirm" ,confirm);
          if(password !== confirm){
              setErrors({confirm:"password not match"});
              return false;
          }else if(phone.length<10){
            setErrors({phone:"phone number shuld be at least 10 numbers"});
            return false;  
          }else{
            return fetch("/register", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                username: username,
                password: password,
                username_phone_number: phone
              })
            })
              .then(function(response) {
                window.location.pathname = "/login";
              })
              .catch(function(error) {
                console.log(error);
              });
            }
    
  };

  return (
    <form className="register-form" onSubmit={addNewUser}>
      <div>
        <label id="register-label">Register</label>
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
        <Input
          type="password"
          setInput={setConfirm}
          Input={confirm}
          placeholder="Confirm Password"
        />
      </div>
      {errors.confirm && <p class="error">{errors.confirm}</p>}
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
        <Button type="submit" htmlType="submit" value="Register" onSubmit="addNewUser()">
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
