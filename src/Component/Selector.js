import React from "react";
import Select from "react-select";

function Selector() {
  const options = [
    { value: "Buy", label: "Buy" },
    { value: "Rent", label: "Rent" },
    { value: "Sell", label: "Sell" },
  ];
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#f3f4f6",
      border: state.isFocused ? 0 : 0,
      borderRadius: (50, 0, 0, 0),
    }),
  };

  return (
    <div>
      <Select options={options} styles={customStyles} />
    </div>
  );
}

export default Selector;
