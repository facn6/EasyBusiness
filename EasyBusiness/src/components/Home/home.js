import React, { useState } from "react";
import "./home.css";

import SearchBar from "../SearchBar/searchBar";
import Button from "../Button/button";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="searchBar">
      <SearchBar />
    </section>
  );
};

export default Home;
