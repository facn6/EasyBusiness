import React from "react";
import "./input.css";
import { OmitProps } from "antd/lib/transfer/renderListBody";

const Input = props => {
  return (
    <input
      className="inputt"
      type={props.type}
      value={props.Input}
      onInput={e => props.setInput(e.target.value)}
      placeholder={props.placeholder}
    />
  );
};
export default Input;
