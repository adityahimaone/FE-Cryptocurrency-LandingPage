import React from "react";
import { Children } from "react/cjs/react.production.min";

export default function PrimaryButton({ children, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className=" bg-primary text-white rounded-full py-4 px-8 mx-2"
      {...props}
    >
      {children}
    </button>
  );
}
