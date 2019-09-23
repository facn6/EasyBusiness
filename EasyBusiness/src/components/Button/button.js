import React from "react";
import "./button.css";

const Button = props => {
  return (
    <button type="submit" id="btn" href={props.href}>
      {props.value}
    </button>
  );
};
export default Button;
