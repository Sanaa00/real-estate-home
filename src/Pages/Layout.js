import React, { useRef } from "react";
import Footer from "../Component/Footer";
import Nav from "../Component/Nav";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";

function Layout() {
  //   const home = useRef(null);
  //   const contact = useRef(null);
  //   const about = useRef(null);
  //   const service = useRef(null);
  return (
    <div>
      <Nav />
      {/* <section ref={home}>
        <Home />
      </section>
      <section ref={about}>
        {" "}
        <About />
      </section>
      <section ref={service}>
        {" "}
        <Service />
      </section>
      <section ref={contact}>
        <Contact />
      </section> */}
      <Footer />
    </div>
  );
}

export default Layout;
