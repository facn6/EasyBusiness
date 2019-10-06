import React, { useState, useEffect } from "react";
import "./home.css";
import SearchBar from "../SearchBar/searchBar";
import Button from "../Button/button";

const Home = () => {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState("");
  var result = document.querySelector(".result");
  var Arr = [
    "HTML",
    "CSS",
    "PHP",
    "Javascript",
    "Dart",
    "Python",
    "Swift",
    "Java",
    "C++",
    "Go",
    "SASS",
    "C#",
    "LESS",
    "Perl",
    "Ruby"
  ];

  useEffect(() => {
    // auto complete function
    function autoComplete(Arr, search) {
      return Arr.filter(e => e.toLowerCase().includes(search.toLowerCase()));
    }

    function getValue(search) {
      // if no value
      if (!search) {
        result.innerHTML = "";
        return;
      }

      // search goes here
      var data = autoComplete(Arr, search);

      // append list data
      var ress = "<ul>";
      data.forEach(e => {
        ress += "<li>" + e + "</li>";
      });
      ress += "</ul>";
      result.innerHTML = ress;
      setRes("ress");
    }
  });

  return (
    <form>
      <section className="search-bar">
        <SearchBar
          type="text"
          setInput={setSearch}
          Input={search}
          placeholder="Search"
        />
        <div className="result"> {res} </div>
      </section>
      <table className="home-table">
        <tr className="home-tr">
          <th className="home-th">Product</th>
          <th className="home-th">Price</th>
          <th className="home-th">Quantitiy</th>
        </tr>
        <tr className="home-tr">
          <td className="home-td">Eggs</td>
          <td className="home-td">1</td>
          <td className="home-td">2</td>
        </tr>
        <tr className="home-tr">
          <td className="home-td">Milk</td>
          <td className="home-td">10</td>
          <td className="home-td">2</td>
        </tr>
        <tr className="home-tr">
          <td className="home-td">Oats</td>
          <td className="home-td">4</td>
          <td className="home-td">10</td>
        </tr>
      </table>
      <section className="total"> 15 </section>
      <section className="submit">
        <Button value="Submit" />
      </section>
    </form>
  );
};

export default Home;
