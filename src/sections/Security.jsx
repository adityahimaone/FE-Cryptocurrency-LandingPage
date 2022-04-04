import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

import banks from "../images/illustrations/banks.png";
import { Fade } from "react-reveal";

export default function Security() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div>
          <img src={banks} alt="banks" />
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-md">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">
                Industry-leading security from day one
              </h1>
              <div className="space-y-1">
                <h3 className="font-bold">
                  <BsCheckCircleFill className="inline text-primary mr-2" />
                  Safety, security and compliance
                </h3>
                <p className="text-gray">
                  NEFA is a licensed New York trust company that undergoes
                  regular bank exams and is subject to the cybersecurity audits
                  conducted by the New York Department of Financial Services.
                  Learn more about our commitment to security.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold">
                  {" "}
                  <BsCheckCircleFill className="inline text-primary mr-2" />
                  Hardware security keys
                </h3>
                <p className="text-gray">
                  NEFA is a licensed New York trust company that undergoes
                  regular bank exams and is subject to the cybersecurity audits
                  conducted by the New York Department of Financial Services.
                  Learn more about our commitment to security.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold">
                  {" "}
                  <BsCheckCircleFill className="inline text-primary mr-2" />
                  SOC Certifications
                </h3>
                <p className="text-gray">
                  NEFA is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the
                  world's first cryptocurrency exchange and custodian to
                  complete these exams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
