import React from "react";
import SecondaryButton from "../components/buttons/SecondaryButton";
import globeImage from "../images/illustrations/globe.png";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { BsChevronDown } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="relative bg-primary pt-[140px] bg-opacity-5 pb-28 overflow-hidden">
      {/* <span className="absolute bg-purple-400 -left-28 -top-28 rounded-full opacity-[20%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" /> */}
      {/* <span className="absolute bg-gradient-to-br from-primary to-secondarys -right-28 -bottom-28 rounded-full opacity-[15%] blur-3xl  delay-700 duration-1000 aspect-square h-[550px] -z-10" /> */}
      <div className="container mx-auto grid grid-cols-2">
        <div className="flex items-center">
          <div>
            <p className="text-primary">SIGN UP TODAY</p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold max-w-xl leading-normal my-4">
              <span className="break-words">The World's </span>
              <span className="break-words">Fastest Growing </span>
              <span>Cycrpto Web App</span>
            </h1>
            <p className=" text-gray max-w-lg">
              Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
              bank transfers or your credit/debit card.
            </p>
            <div className="flex justify-start my-8 space-x-4">
              <PrimaryButton>Get Started</PrimaryButton>
              <SecondaryButton>
                Download App
                <BsChevronDown className="ml-2 inline" />
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div>
          <img src={globeImage} alt="GlobalLogo" />
        </div>
      </div>
    </section>
  );
}
