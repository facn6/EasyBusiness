import React from "react";
import "./logo.css";
import logo from "./ebl.png";
import background from "./background.png";

const Logo = () => {
  return (
    <section class="logoSec">
      <img src={logo} alt="Logo" class="logo" />
      {/* <img src={background} alt="bg" className="bg" /> */}
    </section>
  );
};

export default Logo;
