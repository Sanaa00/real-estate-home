import React from "react";
import logo from "../images/logo.png";
import ButtobBlue from "./ButtobBlue";
function Footer() {
  const icons = [
    { id: 1, icon: "A" },
    { id: 2, icon: "B" },
    { id: 3, icon: "C" },
    { id: 4, icon: "D" },
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
    <div className="bg-gray-100 pt-20 flex justify-between text-sm p-6">
      <div className="flex flex-col justify-between">
        <img src={logo} alt="logo" className="h-10 w-10" />
        <p className="mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="mt-3">
          <input
            placeholder="Type Your Email "
            className="w-full rounded-tl-xl py-1 px-2 relative overflow-hidden"
          />
          <div className=" absolute right-0 bottom-0">
            <ButtobBlue text="Send" />
          </div>
        </div>
        <div className="flex mt-3">
          {icons.map((icon) => {
            return (
              <div
                key={icon.id}
                className="rounded-full h-10 w-10 bg-blue-500 flex justify-center items-center mr-2"
              >
                {icon.icon}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-between">
        {Company.map((text) => {
          return <p key={text.id}>{text.text}</p>;
        })}
      </div>
      <div className="flex flex-col justify-between">
        {support.map((supp) => {
          return <p key={supp.id}>{supp.text}</p>;
        })}
      </div>
      <div className="flex flex-col justify-between">
        {Countacts.map((con) => {
          return (
            <div key={con.id} className="flex">
              <p>{con.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
