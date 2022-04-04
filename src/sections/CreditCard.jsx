import React from "react";
import SecondaryButton from "../components/buttons/SecondaryButton";
import creditCard from "../images/illustrations/credit-card.png";
import { Fade } from "react-reveal";
import { BsCheckCircleFill } from "react-icons/bs";

export default function CreditCard() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Fade up>
            <img src={creditCard} alt="creditCard" />
          </Fade>
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-bold">
              Introducing the <span className=" text-blue-gradient">NEFA</span>
              <br /> Credit Card
            </h1>
            <p>
              Subject to cardholder and rewards terms which will be available at
              application.
            </p>
            <ul>
              <li>
                <BsCheckCircleFill className="inline text-primary mr-2" />
                Up to 3% back on purchases
              </li>
              <li>
                <BsCheckCircleFill className="inline text-primary mr-2" />
                Earn rewards in bitcoin or any crypto on NEFA
              </li>
              <li>
                <BsCheckCircleFill className="inline text-primary mr-2" />
                No annual fee
              </li>
            </ul>
            <SecondaryButton>Join the waitlist</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
