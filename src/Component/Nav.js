import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import Contact from "../Pages/Contact";
import { TfiMenu } from "react-icons/tfi";
import { IoIosClose } from "react-icons/io";
import ButtobBlue from "./ButtobBlue";
import useOffset from "../hooks/getOffset";
// import TfiMenu from "react-icons";
function Nav() {
  const home = useRef(null);
  const contact = useRef(null);
  const about = useRef(null);
  const service = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const onNavbarHandler = () => setShowMenu(!showMenu);
  function scrollToSections(elementRef) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    }); // eslint-disable-next-line no-restricted-globals
    if (innerWidth < 640) {
      onNavbarHandler();
    }
  }

  const offset = useOffset();

  let menu;
  if (showMenu) {
    menu = (
      <div className="flex sm:hidden flex-col  fixed bg-gray-100  w-4/5 h-full top-0 z-40 right-0 shadow-md ">
        <div className=" flex flex-row-reverse items-center py-4 px-3 shadow-md ">
          <IoIosClose
            className="w-14 h-14"
            fill="#3b82f6"
            onClick={onNavbarHandler}
          />
        </div>

        <div className=" items-center text-blue-500 font-semibold">
          <div className=" shadow-sm py-4 bg-spi text-nily text-bold w-full flex  justify-center mb-2 focus:text-sawz">
            <NavLink onClick={() => scrollToSections(home)} to="/home">
              Home
            </NavLink>
          </div>
          <div className=" shadow-sm py-4  bg-spi text-nily text-bold w-full flex  justify-center mb-2 focus:text-sawz">
            <NavLink onClick={() => scrollToSections(about)} to="/about">
              About
            </NavLink>
          </div>
          <div className=" shadow-sm py-4 bg-spi text-nily text-bold w-full flex  justify-center  mb-2 focus:text-sawz">
            <NavLink onClick={() => scrollToSections(service)} to="/service">
              Service
            </NavLink>
          </div>
          <div className="shadow-sm py-4 bg-spi text-nily text-bold w-full flex  justify-center mb-2 focus:text-sawz ">
            <NavLink onClick={() => scrollToSections(contact)} to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <nav className="px-6 sm:px-10 md:px-16 lg:px-32 flex justify-between items-center h-20 pt-5 fixed top-0 left-0 bg-gray-100 p-6 w-full ">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <div className="flex  sm:hidden">
          {" "}
          <TfiMenu
            className="w-8 h-8"
            fill="#3b82f6"
            onClick={onNavbarHandler}
          />{" "}
          {menu}
        </div>

        <ul className="hidden  sm:flex justify-between w-2/3 bg-white text-gray-800 text-sm font-semibold rounded-tl-xl px-8 py-3 ">
          <li>
            <NavLink
              to="/home"
              end
              onClick={() => scrollToSections(home)}
              className={({ isActive }) =>
                offset < about?.current?.offsetTop
                  ? "bg-blue-500 py-1 px-3 rounded-tl-xl text-white  mx-1"
                  : " mx-1 hover:text-blue-500"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={() => scrollToSections(about)}
              className={({ isActive }) =>
                offset >= about?.current?.offsetTop &&
                offset < service?.current?.offsetTop
                  ? "bg-blue-500 py-1 px-3 rounded-tl-xl text-white mx-1"
                  : "mx-1 hover:text-blue-500"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/service"
              onClick={() => scrollToSections(service)}
              className={() =>
                offset >= service?.current?.offsetTop &&
                offset < contact?.current?.offsetTop
                  ? "bg-blue-500 py-1 px-3 rounded-tl-xl text-white mx-1"
                  : "mx-1 hover:text-blue-500"
              }
            >
              Service
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={() => scrollToSections(contact)}
              className={({ isActive }) =>
                offset >= contact?.current?.offsetTop
                  ? "bg-blue-500 py-1 px-3 rounded-tl-xl text-white mx-1"
                  : "mx-1 hover:text-blue-500"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="hidden sm:flex">
          <ButtobBlue text="Sign in" />
        </div>
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
