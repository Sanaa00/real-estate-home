import React, { useState } from "react";
import ButtobBlue from "./ButtobBlue";

function FeatureListed() {
  const features = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Modern Bungalow",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$10000",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
      title: "Modern Bungalow",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$10000",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Modern Bungalow",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      price: "$10000",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Modern Bungalow",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$10000",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Modern Bungalow",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      price: "$10000",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Modern Bungalow",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      price: "$10000",
    },
  ];

  const [card, setCard] = useState(3);
  const moreCard = () => {
    setCard((prev) => prev + 3);
  };
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center pt-20">
      <p className="text-lg">OUR HOUSE</p>
      <p className="text-2xl font-bold mt-3">Featured Listings</p>
      <div className=" grid grid-cols-3  items-center justify-center">
        {features.slice(0, card).map((feature) => {
          return (
            <div key={feature.id} className="bg-white p-4 m-6 flex flex-col">
              <img
                src={feature.img}
                alt="feature"
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                {" "}
                <p className="font-bold text-lg mt-3">{feature.title}</p>
                <p className="text-sm mt-2">{feature.content}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="w-1/2 font-bold">{feature.price}</p>
                  <ButtobBlue
                    text="Buy Now"
                    width="1/2"
                    onClick={() => moreCard}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className={`px-4 py-1 text-sm bg-blue-100 rounded-tl-2xl text-blue-800 ml-4 w-40`}
        onClick={() => moreCard()}
      >
        SeeMore
      </button>
    </div>
  );
}

export default FeatureListed;
