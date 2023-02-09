import React from "react";
import logo from "../images/logo.png";

function Nav() {
  return (
    <>
      <nav className="flex justify-between items-center h-16">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <ul className="flex justify-between w-2/3 bg-white text-gray-800 text-sm font-semibold rounded-tl-xl px-8 py-3 ">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            {" "}
            <a href="service">Service</a>
          </li>

          <li>
            <a href="about"> About us</a>
          </li>
          <li>
            <a href="FQA">FQA</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
        <button className="bg-blue-500 text-gray-50 px-4 py-1 text-sm rounded-tl-lg">
          Sign in
        </button>
      </nav>
    </>
  );
}

export default Nav;
