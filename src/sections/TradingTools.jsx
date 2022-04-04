import React from "react";
import SecondaryButton from "../components/buttons/SecondaryButton";
import tradingTools from "../images/illustrations/tradingtools.png";
import { Fade } from "react-reveal";

export default function TradingTools() {
  return (
    <section className="px-6">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
          <div className="grid md:grid-cols-2">
            <div className="lg:row-start-1 flex items-center justify-center">
              <div className="max-w-md space-y-4">
                <h1 className="text-2xl font-bold leading-normal">
                  Advanced Trading{" "}
                  <span className="text-blue-gradient">Tools</span>
                </h1>
                <div className="space-y-2">
                  <h3 className="font-bold">
                    Professional Access, Non-stop Availability
                  </h3>
                  <p className="text-gray">
                    We provide premium access to crypto trading for both
                    individuals and institutions through high liquidity,
                    reliable order execution and constant uptime.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">A Range of Powerful Apis</h3>
                  <p className="text-gray">
                    Set up your own trading interface or deploy your algorithmic
                    strategy with our high-performance FIX and HTTP APIs.
                    Connect to our WebSocket for real-time data streaming.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Customer Support</h3>
                  <p className="text-gray">
                    Premium 24/7 support available to all customers worldwide by
                    phone or email. Dedicated account managers for partners.
                  </p>
                </div>
                <div className="flex">
                  <SecondaryButton>Get Started</SecondaryButton>
                  <a href="#">
                    <button className="py-4 px-10 text-primary underline">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="row-start-1 mb-8">
              <Fade up>
                <img src={tradingTools} alt="tradingTools" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
