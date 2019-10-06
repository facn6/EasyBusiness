import React from "react";
import "./searchBar.css";
import { Icon } from "antd";

import Input from "../Input/input";

const SearchBar = props => {
  return (
    <section className="searchSection">
      <div>
        <Input
          type={props.type}
          setInput={props.setInput}
          Input={props.input}
          placeholder={props.placeholder}
        />
      </div>
      <div id="searchIcon">
        <Icon type="search" />
      </div>
    </section>
  );
};

export default SearchBar;
