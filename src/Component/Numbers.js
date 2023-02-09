import React from "react";

function Numbers() {
  const numbers = [
    { num: "15000+", title: "Successful Trades" },
    {
      num: "6200+",
      title: "Happy Customers",
    },
    {
      num: "360+",
      title: "Awards Won",
    },
    {
      num: "17+",
      title: "Years Of Experience",
    },
  ];
  return (
    <>
      <div className="bg-white p-6 flex">
        {numbers.map((number) => {
          return (
            <div className="flex flex-col justify-between items-center w-full">
              <p className="text-xl font-bold">{number.num}</p>
              <p className="text-sm">{number.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Numbers;
