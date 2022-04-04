import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Logo from "../../images/logo.svg";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

export default function Navbar() {
  return (
    <div className="sticky top-0 container mx-auto py-8 flex items-center justify-between">
      <div className="flex items-center mr-6">
        <img src={Logo} className="mr-6" alt="Logo" />
        <nav className="flex">
          <a href="" className="mx-6 hover:text-primary">
            Cyrptocurrency
          </a>
          <a href="" className="mx-6 hover:text-primary">
            Exchanges
          </a>
          <a href="" className="mx-6 hover:text-primary">
            Watchlist
          </a>
          <a href="" className="mx-6 hover:text-primary">
            NFT
          </a>
          <a href="" className="mx-6 hover:text-primary">
            Portofolios
          </a>
          <a href="" className="mx-6 hover:text-primary">
            Product
            <BsChevronDown className="ml-2 inline" />
          </a>
        </nav>
      </div>
      <div>
        <div className="flex space-x-4">
          <SecondaryButton>Sign Up</SecondaryButton>
          <PrimaryButton>Login</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
