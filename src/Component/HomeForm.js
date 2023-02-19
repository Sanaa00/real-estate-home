import React from "react";
import ButtobBlue from "./ButtobBlue";
import Selector from "./Selector";

function HomeForm() {
  const homeForm = [
    {
      id: 1,
      type: "text",
      title: "Enter your keywords",
      placeholder: "Keywords",
      img: "",
    },
    {
      id: 2,
      type: "selector",
      title: "All state",
      placeholder: "States",
      img: "",
    },
    {
      id: 3,
      type: "selector",
      title: "All Cities",
      placeholder: "City",
      img: "",
    },
    {
      id: 4,
      type: "selector",
      title: "All Offers",
      placeholder: "Offer",
      img: "",
    },
    {
      id: 5,
      type: "selector",
      title: "All Listing Types",
      placeholder: "Listing",
      img: "",
    },
    {
      id: 6,
      type: "selector",
      title: "All Bedrooms",
      placeholder: "Bedrooms",
      img: "",
    },
    {
      id: 7,
      type: "selector",
      title: "  ",
      placeholder: "Price Range",
      img: "",
      option: ["A", "B", "C"],
    },
  ];
  return (
    <div className="bg-white p-4 grid mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 justify-between items-end gap-5 ">
        {homeForm.map((form) => {
          return (
            <div key={form.id}>
              <p className="text-sm font-semibold">{form.title}</p>
              {form?.type === "text" ? (
                <input
                  placeholder={`${form.placeholder}  `}
                  className="bg-gray-100 rounded-tl-xl px-4 py-1 text-sm mt-2 w-full"
                />
              ) : (
                <Selector />
              )}
            </div>
          );
        })}
        <ButtobBlue text={"Search Properites"} />
      </div>
    </div>
  );
}

export default HomeForm;
