import React from "react";
import Select from "react-select";

function Selector({ options }) {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#f3f4f6",
      border: state.isFocused ? 0 : 0,
      borderTopLeftRadius: "15px",
    }),
  };

  return (
    <div className="">
      <Select options={options} styles={customStyles} />
    </div>
  );
}

export default Selector;
