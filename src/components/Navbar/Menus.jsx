import React from "react";
import Dropdown from "./Dropdown";

export default function Menus() {
  return (
    <>
      <div className="w-full">
        <a href="/" className="hover:text-primary py-2 block">
          Cryptocurrency
        </a>
      </div>
      <div className="w-full">
        <a href="/" className="hover:text-primary py-2 block">
          Exchanges
        </a>
      </div>
      <div className="w-full">
        <a href="/" className="hover:text-primary py-2 block">
          Watchlist
        </a>
      </div>
      <div className="w-full">
        <a href="/" className="hover:text-primary py-2 block">
          NFT
        </a>
      </div>
      <div className="w-full">
        <a href="/" className="hover:text-primary py-2 block">
          Portofolios
        </a>
      </div>
      <Dropdown>
        <div className="w-full">
          <a href="/" className="hover:text-primary py-2 block">
            Portofolios
          </a>
        </div>
        <div className="w-full">
          <a href="/" className="hover:text-primary py-2 block">
            Portofoliosx
          </a>
        </div>
      </Dropdown>
    </>
  );
}
