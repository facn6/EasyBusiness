import React, { useState } from "react";
import "./searchBar.css";
import { Icon } from "antd";

import Input from "../Input/input";

const SearchBar = props => {
  const [search, setSearch] = useState("");
  return (
    <section className="searchSection">
      <div>
        <Input
          type="text"
          setInput={setSearch}
          Input={search}
          placeholder="Search"
        />
      </div>
      <div id="searchIcon">
        <Icon type="search" />
      </div>
    </section>
  );
};

export default SearchBar;
