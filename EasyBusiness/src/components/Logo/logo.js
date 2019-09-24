import React from "react";
import "./logo.css";
import logo from "./ebl.png";
import background from "./background.png";

const Logo = () => {
  return (
    <section className="logoSec">
      <img src={logo} alt="Logo" className="logo" />
      {/* <img src={background} alt="bg" className="bg" /> */}
    </section>
  );
};

export default Logo;
