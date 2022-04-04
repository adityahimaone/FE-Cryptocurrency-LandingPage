import React from "react";
import signupImage from "../images/illustrations/signup.png";
import walletImage from "../images/illustrations/wallet.png";
import okayImage from "../images/illustrations/okay.png";
import arrow from "../images/arrow.svg";
import { Fade } from "react-reveal";

export default function GetStarted() {
  return (
    <section className="px-6">
      <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
        <div className="container mx-auto ">
          <div className="py-6">
            <h1 className="text-center text-2xl font-bold leading-normal">
              Get started in juts a few minutes
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap:20">
            <div className="text-center relative px-4">
              <div className="relative">
                <img
                  src={signupImage}
                  alt="signupImage"
                  className="mb-4 mx-auto"
                />
                <img
                  src={arrow}
                  alt="arrow"
                  className="hidden md:block absolute top-1/2 -right-32"
                />
              </div>
              <h3 className="text-lg font-bold">Sign Up</h3>
              <p className="text-gray">
                Buy Bitcoin or Ethereum, then securely store it in your Wallet
                or send it on easily to friends
              </p>
            </div>
            <div className="text-center relative px-4">
              <div className="relative">
                <img
                  src={walletImage}
                  alt="signupImage"
                  className="mb-4 mx-auto"
                />
                <img
                  src={arrow}
                  alt="arrow"
                  className="hidden md:block absolute top-1/2 -right-32"
                />
              </div>
              <h3 className="text-lg font-bold">Fund</h3>
              <p className="text-gray">
                Choose your preferred payment method such as bank transfer or
                credit card to top up your NEFA Wallet
              </p>
            </div>
            <div className="text-center relative px-4">
              <div className="relative">
                <img
                  src={okayImage}
                  alt="signupImage"
                  className="mb-4 mx-auto"
                />
              </div>
              <h3 className="text-lg font-bold">Buy Crypto</h3>
              <p className="text-gray">
                Sign up for your free NEFA Wallet on web, iOS or Android and
                follow our easy process to set up your profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
