import React from "react";

function ButtonSky({ text, width, onClick }) {
  return (
    <button
      className={`px-4 py-1 text-sm bg-blue-100 rounded-tl-2xl text-blue-800 ml-4 w-40`}
      onClick={() => onClick}
    >
      {text}
    </button>
  );
}

export default ButtonSky;
