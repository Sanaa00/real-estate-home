import React from "react";
import logo from "../images/logo.png";
import ButtobBlue from "./ButtobBlue";
import linkedin from "../images/linkedin.png";
import behance from "../images/behance.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
function Footer() {
  const icons = [
    { id: 1, icon: linkedin },
    { id: 2, icon: behance },
    { id: 3, icon: facebook },
    { id: 4, icon: twitter },
  ];
  const Company = [
    { id: 1, text: "Why Findhome?" },
    { id: 2, text: "Partner with us" },
    { id: 3, text: "About us" },
    { id: 4, icontext: "FAQ" },
  ];
  const support = [
    { id: 1, text: "Consultation call" },
    { id: 2, text: "Support center" },
    { id: 3, text: "Feedback" },
    { id: 4, icontext: "Appoinment" },
  ];
  const Countacts = [
    { id: 1, text: "1 Grafton Street,Dublin, Ireland University.", icon: "" },
    { id: 2, text: "+255 872 051 9340", icon: "" },
    { id: 3, text: "example@gmail.com", icon: "" },
  ];
  return (
    <div className="bg-gray-100 pt-20 flex flex-col justify-between  text-sm p-6">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col justify-between pr-4">
          <img src={logo} alt="logo" className="h-10 w-10" />
          <p className="mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mt-3 overflow-hidden relative ">
            <input
              placeholder="Type Your Email "
              className="w-full rounded-tl-xl py-1 px-2 relative "
            />
            <div className=" absolute right-0 bottom-0">
              <ButtobBlue text="Send" />
            </div>
          </div>
          <div className="flex mt-3">
            {icons.map((icon) => {
              return (
                <img
                  src={icon.icon}
                  alt="social"
                  key={icon.id}
                  className="rounded-full h-10 w-10 bg-blue-500 flex justify-center items-center mr-2"
                />
              );
            })}
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col justify-between">
          <p className="font-bold">Company</p>
          {Company.map((text) => {
            return <p key={text.id}>{text.text}</p>;
          })}
        </div>
        <div className="mt-4 md:mt-0 flex flex-col justify-between">
          <p className="font-bold">Support</p>
          {support.map((supp) => {
            return <p key={supp.id}>{supp.text}</p>;
          })}
        </div>
        <div className="mt-4 md:mt-0 flex flex-col justify-between">
          <p className="font-bold">Contact Us</p>
          {Countacts.map((con) => {
            return (
              <div key={con.id} className="flex">
                <p>{con.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <p className=" text-blue-400 text-center mt-5">
        Copyright - All Right Reserved
      </p>
    </div>
  );
}

export default Footer;
