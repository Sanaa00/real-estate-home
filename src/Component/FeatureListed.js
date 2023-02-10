import React from "react";
import ButtobBlue from "./ButtobBlue";

function FeatureListed() {
  const features = [
    {
      id: 1,
      img: "",
      title: "Modern Bungalow",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna risus, eget tincidunt justo euismod ut. Sed ullamcorper nulla eget neque gravida egestas. Suspendisse libero quam, venenatis in massa id, eleifend tempus orci. Nullam in maximus sapien.",
      price: "$10000",
    },
    {
      id: 2,
      img: "",
      title: "Modern Bungalow",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna risus, eget tincidunt justo euismod ut. Sed ullamcorper nulla eget neque gravida egestas. Suspendisse libero quam, venenatis in massa id, eleifend tempus orci. Nullam in maximus sapien.",
      price: "$10000",
    },
    {
      id: 3,
      img: "",
      title: "Modern Bungalow",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna risus, .",
      price: "$10000",
    },
    {
      id: 4,
      img: "",
      title: "Modern Bungalow",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna risus,",
      price: "$10000",
    },
    {
      id: 5,
      img: "",
      title: "Modern Bungalow",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna risus, eget tincidunt justo euismod ut. Sed ullamcorper nulla eget neque gravida egestas. Suspendisse libero quam",
      price: "$10000",
    },
    {
      id: 6,
      img: "",
      title: "Modern Bungalow",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna risus, eget tincidunt justo euismod ut. Sed ullamcorper nulla eget neque gravida egestas. Suspendisse libero quam.",
      price: "$10000",
    },
  ];

  return (
    <div className="bg-gray-100 grid grid-cols-3">
      {features.slice(0, 3).map((feature) => {
        return (
          <div key={feature.id} className="bg-white p-6 m-6 flex flex-col">
            <img
              src={feature.img}
              alt="feature"
              className="w-full h-32 object-contain"
            />
            <p className="font-bold text-lg">{feature.title}</p>
            <p className="text-sm">{feature.content}</p>
            <div className="flex justify-between items-center">
              <p className="w-1/2">{feature.price}</p>
              <ButtobBlue text="Buy Now" width="1/2" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeatureListed;
