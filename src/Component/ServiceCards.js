import React from "react";

function ServiceCards() {
  const services = [
    {
      title: "One",
      url: "",
      content:
        "labcd dhah dsvhgv xydyhv dcvg cdvsgc cgvdagv cgdga chhgaey gurqgfy cbnsb yrgfqy ",
      text: "sumbit",
    },
    {
      title: "Two",
      url: "",
      content:
        "labcd dhah dsvhgv xydyhv dcvg cdvsgc cgvdagv cgdga chhgaey gurqgfy cbnsb yrgfqy ",
      text: "sumbit",
    },
    {
      title: "Three",
      url: "",
      content:
        "labcd dhah dsvhgv xydyhv dcvg cdvsgc cgvdagv cgdga chhgaey gurqgfy cbnsb yrgfqy ",
      text: "sumbit",
    },
  ];
  return (
    <>
      <div className="flex justify-between ">
        {services.map((service) => {
          return (
            <div className="bg-white p-6 m-6 flex flex-col items-center ">
              <p className="text-lg font-bold">{service.title}</p>
              <img
                src=""
                alt="content"
                className="h-40 w-full object-contain mt-4"
              />
              <p className="w-full text-sm mt-4">{service.content}</p>
              <button className="w-full bg-blue-300 mt-4 shadow-sm  h-8 text-white">
                {service.text}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ServiceCards;
