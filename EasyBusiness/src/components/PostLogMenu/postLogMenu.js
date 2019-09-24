import React from "react";
import { Icon } from "antd";
import "./postLogMenu.css";
import { Link } from "react-router-dom";

const PostLogMenu = () => {
  return (
    <section class="menubar">
      <form class="menu2">
        <Link to="/home">Home</Link> |<Link to="/inventory">Inventory</Link> |
        <Link to="/suppliers">Suppliers</Link> |
        <Link to="/customers">Customers</Link> |<Link to="/deals">Deals</Link> |
        <Link to="/login" key="Logout">
          <Icon className="icon" type="logout" />
        </Link>
      </form>
    </section>
  );
};

export default PostLogMenu;
