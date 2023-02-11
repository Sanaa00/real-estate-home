import React from "react";

function ButtobBlue({ text, width }) {
  return (
    <button
      className={`px-4 py-1 bg-blue-500 text-sm rounded-tl-2xl text-white  w-${width}`}
    >
      {text}
    </button>
  );
}

export default ButtobBlue;
