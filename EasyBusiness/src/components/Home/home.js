import React, { useState } from "react";
import "./home.css";
import SearchBar from "../SearchBar/searchBar";
import Button from "../Button/button";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <form>
    <section class="searchBar">
      <SearchBar />
      <div class="add-button">
      <Button value="+" />
      </div>
    </section>
    </form>
  );
};

export default Home;
