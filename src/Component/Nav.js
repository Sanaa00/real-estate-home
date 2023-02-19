import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import Contact from "../Pages/Contact";

function Nav() {
  const home = useRef(null);
  const contact = useRef(null);
  const about = useRef(null);
  const service = useRef(null);
  const scrollToSections = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="flex justify-between items-center h-16 ">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <ul className="flex justify-between w-2/3 bg-white text-gray-800 text-sm font-semibold rounded-tl-xl px-8 py-3 ">
          <li>
            <NavLink
              to="/home"
              end
              onClick={() => scrollToSections(home)}
              className={({ isActive }) =>
                isActive ? "bg-blue-500 py-1 px-3 rounded-tl-xl text-white" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              onClick={() => scrollToSections(service)}
              className={({ isActive }) =>
                isActive ? "bg-blue-500 py-1 px-3 rounded-tl-xl text-white" : ""
              }
            >
              Service
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={() => scrollToSections(about)}
              className={({ isActive }) =>
                isActive ? "bg-blue-500 py-1 px-3 rounded-tl-xl text-white" : ""
              }
            >
              About us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={() => scrollToSections(contact)}
              className={({ isActive }) =>
                isActive ? "bg-blue-500 py-1 px-3 rounded-tl-xl text-white" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="bg-blue-500 text-gray-50 px-4 py-1 text-sm rounded-tl-lg">
          Sign in
        </button>
      </nav>
      <section ref={home}>
        <Home />
      </section>
      <section ref={about}>
        <About />
      </section>
      <section ref={service}>
        <Service />
      </section>
      <section ref={contact}>
        <Contact />
      </section>
    </>
  );
}

export default Nav;
