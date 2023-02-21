import React from "react";
import { IoHome } from "react-icons/io5";
import ButtobBlue from "./ButtobBlue";
function ServiceCards() {
  const services = [
    {
      id: 1,
      title: "Buy",
      heading: "Buy A Home",
      url: "",
      icon: <IoHome className="h-12 w-12 text-blue-400" />,
      content:
        "A large list of offers of buying a home on our website with the parameters that suit you.",
      text: "Buy",
    },
    {
      id: 2,
      title: "Sell",
      heading: "Sell A Home",
      url: "",
      icon: <IoHome className="h-12 w-12 text-blue-400" />,
      content:
        "The opportunity to sell your home at a bargain price and, if necessary, as quickly as possible.",
      text: "Sell",
    },
    {
      id: 3,
      title: "Rent",
      heading: "Rent A Home",
      icon: <IoHome className="h-12 w-12 text-blue-400" />,
      content:
        "The ability to rent home of any type, as well as for any rental period. form one day to a year.",
      text: "Rent",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  justify-between bg-gray-100">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="bg-white p-4 flex flex-col items-center w-full shadow-sm hover:shadow-lg"
            >
              <p className="text-lg font-bold">{service.title}</p>
              {service.icon}
              <p className="w-full text-sm my-4">{service.content}</p>
              <ButtobBlue text={service.text} width="full" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ServiceCards;
