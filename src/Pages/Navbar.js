import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Blog">Blog</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </div>
  );
};

export default Navbar;

{
  /* <a href="/home">Home</a>
<a href="/About">About</a>
<a href="/Blog">Blog</a>
<a href="/Contact">Contact</a> */
}

{
  /* <Link to ="/home">Home</Link>
<Link to ="/About">About</Link>
<Link to ="/Blog">Blog</Link>
<Link to ="/Contact">Contact</Link> */
}
