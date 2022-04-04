import React from "react";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <main className="overflow-hidden">{children}</main>
    </div>
  );
}
