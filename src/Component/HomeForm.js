import React from "react";
import ButtobBlue from "./ButtobBlue";

function HomeForm() {
  const homeForm = [
    {
      type: "text",

      title: "Enter your keywords",
      placeholder: "Keywords",
      img: "",
    },
    {
      type: "selector",
      title: "All state",
      placeholder: "States",
      img: "",
    },
    {
      type: "selector",
      title: "All Cities",
      placeholder: "City",
      img: "",
    },
    {
      type: "selector",
      title: "All Offers",
      placeholder: "Offer",
      img: "",
    },
    {
      type: "selector",
      title: "All Listing Types",
      placeholder: "Listing",
      img: "",
    },
    {
      type: "selector",
      title: "All Bedrooms",
      placeholder: "Bedrooms",
      img: "",
    },
    {
      type: "selector",
      title: "  ",
      placeholder: "Price Range",
      img: "",
      option: ["A", "B", "C"],
    },
  ];
  return (
    <div className="bg-white p-4 grid mt-20">
      <div className="grid  grid-cols-4 grid-rows-2 justify-between items-end gap-5 ">
        {homeForm.map((form) => {
          return (
            <div>
              <p className="text-sm font-semibold">{form.title}</p>
              {form?.type === "text" ? (
                <input
                  placeholder={`${form.placeholder}  `}
                  className="bg-gray-100 rounded-tl-xl px-4 py-1 text-sm mt-2 w-full"
                />
              ) : (
                "Selector zyad bka"
              )}
            </div>
          );
        })}
        <ButtobBlue props={"Search Properites"} />
      </div>
    </div>
  );
}

export default HomeForm;
