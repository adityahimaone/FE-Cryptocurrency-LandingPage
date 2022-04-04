import React from "react";
import partner1 from "../images/partners/partner1.png";
import partner2 from "../images/partners/partner2.png";
import partner3 from "../images/partners/partner3.png";
import partner4 from "../images/partners/partner4.png";
import { Fade } from "react-reveal";

export default function Partner() {
  return (
    <section className="px-6">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
          <div className="flex justify-center mb-4">
            <div className="text-center">
              <h3 className="text-xl font-bold">Trusted Partners Worldwide</h3>
              <p className="text-gray">
                We're partners with countless major organisations around the
                globe
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6 mx-4">
            <Fade up>
              <img src={partner1} className="basis-1/2" alt="partner1" />
            </Fade>
            <Fade up delay={200}>
              <img src={partner2} className="basis-1/2" alt="partner2" />
            </Fade>
            <Fade up delay={400}>
              <img src={partner3} className="basis-1/2" alt="partner3" />
            </Fade>
            <Fade up delay={600}>
              <img src={partner4} className="basis-1/2" alt="partner4" />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
