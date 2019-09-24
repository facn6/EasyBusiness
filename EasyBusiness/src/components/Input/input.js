import React from "react";
import "./input.css";

const Input = props => {
  return (
    <input
      type={props.type}
      value={props.Input}
      onInput={e => props.setInput(e.target.value)}
      placeholder={props.placeholder}
    />
  );
};
export default Input;
