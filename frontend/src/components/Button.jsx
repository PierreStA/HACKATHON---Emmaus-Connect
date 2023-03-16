import React from "react";

export default function Button({ children, onClick = {} }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple transition ease-in-out duration-150"
    >
      {children}
    </button>
  );
}
