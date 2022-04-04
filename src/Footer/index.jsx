import React from "react";
import Logo from "../images/logo.svg";
import { BsArrowRight } from "react-icons/bs";
import PrimaryButton from "../components/buttons/PrimaryButton";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto border-y border-lightgray py-8">
        <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-x-6">
          <div className="">
            <img src={Logo} alt="LogoFooter" />
          </div>
          <div className="grid md:col-span-2 xl:col-span-3 md:grid-cols-3 gap-x-4">
            <ul className="xl:border-r border-lightgray flex flex-col items-start xl:items-center space-y-4 py-4">
              <li>
                <a href="#" className="text-gray">
                  Buy Crypto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray">
                  Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray">
                  Watchlist
                </a>
              </li>
              <li>
                <a href="#" className="text-gray">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray">
                  NFT
                </a>
              </li>
            </ul>
            <ul className="xl:border-r border-lightgray flex flex-col items-start xl:items-center space-y-4 py-4">
              <li>
                <a href="#" className="text-gray">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray">
                  Abous Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray">
                  Security
                </a>
              </li>
            </ul>
            <ul className="xl:border-r border-lightgray flex flex-col items-start xl:items-center space-y-4 py-4">
              <li>
                <a href="#" className="text-gray">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray">
                  System Status
                </a>
              </li>
              <li>
                <a href="#" className="text-gray">
                  Area of Avaibility
                </a>
              </li>
              <li>
                <a href="#" className="text-gray">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 xl:col-span-1 space-y-4">
            <h4 className="text-lg text-gray">Newsletter</h4>
            <p>Never miss anything crypto when you're on the go</p>
            <div className="flex gap-4 my-4">
              <div>
                <input
                  type="email"
                  className="border border-lightgray rounded-xl p-4 outline-none focus:border-primary w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <PrimaryButton className="!px-5 aspect-square !rounded-md">
                  <BsArrowRight color="white" />
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center text-lg text-gray py-4">
        <h1>© Copyright 2022 NEFA LLC. All rights reserved</h1>
      </div>
    </footer>
  );
}
