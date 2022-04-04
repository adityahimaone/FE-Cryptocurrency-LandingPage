import React from "react";
import { BsArrowUp } from "react-icons/bs";

export default function BackToTop() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <button
          className="border border-gray rounded-lg bg-neutral-200 py-4 px-6 text-md text-gray"
          onClick={handleClick}
        >
          Back To Top
          <BsArrowUp className="inline-block ml-2" />
        </button>
      </div>
    </section>
  );
}
