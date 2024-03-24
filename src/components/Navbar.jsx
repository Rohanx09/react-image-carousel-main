import React from 'react'

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title"> website </Link>
      <ul>
        <li>
            <Link to="/"> About </Link>
        </li>
        <li>
            <Link to="/"> Home </Link>
        </li>
        <li>
            <Link to="/"> Electronic </Link>
        </li>
        <li>
            <Link to="/"> Music </Link>
        </li>
        <li>
            <Link to="/"> Game </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
