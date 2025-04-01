"use client";

import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mb-32">
      <div className="container mx-auto px-4">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-[60px] mb-[12px]">
          <div className="flex-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-[649.5px] h-[105px] flex flex-col items-center">
                <div className="w-[60px] h-[60px] flex items-center justify-center mb-3">
                  <div className="w-[40px] h-[40px] flex items-center justify-center">
                    <Image
                      src="/partner_exchange.svg"
                      alt="Partner Exchange"
                      width={36}
                      height={30}
                      className="text-[#FDF0D5]"
                    />
                  </div>
                </div>
                <h3 className="text-white text-xl">
                  Ethically Sourced Diamonds
                </h3>
              </div>
              <p className="text-white text-base leading-relaxed mt-4 max-w-[634.45px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.04),0px_20px_25px_0px_rgba(0,0,0,0.1)]">
                Our GIA-certified natural and lab-grown diamonds are responsibly
                mined, 100% conflict-free, and fully traceable. We ensure
                ethical diamond sourcing without compromising the exceptional
                quality that conscious couples deserve.
              </p>
            </div>
          </div>

          {/* Nearby Location Column */}
          <div className="flex-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-[649.5px] h-[105px] flex flex-col items-center">
                <div className="w-[60px] h-[60px] flex items-center justify-center mb-3">
                  <div className="w-[40px] h-[40px] flex items-center justify-center">
                    <Image
                      src="/nearby.svg"
                      alt="Nearby Location"
                      width={33}
                      height={33}
                      className="text-[#FDF0D5]"
                    />
                  </div>
                </div>
                <h3 className="text-white text-xl">
                  Expertly Cut for Maximum Brilliance
                </h3>
              </div>
              <p className="text-white text-base leading-relaxed mt-4 max-w-[628.19px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.04),0px_20px_25px_0px_rgba(0,0,0,0.1)]">
                Each engagement ring features a precision ideal-cut diamond with
                perfect proportions, maximizing brilliance, fire and
                scintillation. Our master cutters create stones with superior
                light performance for a truly unforgettable sparkle.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-[60px]">
          {/* All Inclusive Column */}
          <div className="flex-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-[649.5px] h-[105px] flex flex-col items-center">
                <div className="w-[60px] h-[60px] flex items-center justify-center mb-3">
                  <div className="w-[40px] h-[40px] flex items-center justify-center">
                    <Image
                      src="/all_inclusive.svg"
                      alt="All Inclusive"
                      width={40}
                      height={18}
                      className="text-[#FDF0D5]"
                    />
                  </div>
                </div>
                <h3 className="text-white text-xl">
                  Custom Engagement Ring Design
                </h3>
              </div>
              <p className="text-white text-base leading-relaxed mt-4 max-w-[642.73px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.04),0px_20px_25px_0px_rgba(0,0,0,0.1)]">
                Design a bespoke diamond ring that tells your unique love story.
                Choose from popular diamond shapes, various carat weights, and
                premium metals including platinum and gold to create a
                personalized, one-of-a-kind engagement ring.
              </p>
            </div>
          </div>

          {/* Secure Payment Column */}
          <div className="flex-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-[649.5px] h-[105px] flex flex-col items-center">
                <div className="w-[60px] h-[60px] flex items-center justify-center mb-3">
                  <div className="w-[40px] h-[40px] flex items-center justify-center">
                    <Image
                      src="/local_police.svg"
                      alt="Secure Payment"
                      width={26}
                      height={33}
                      className="text-[#FDF0D5]"
                    />
                  </div>
                </div>
                <h3 className="text-white text-xl">
                  Lifetime Warranty & Authenticity Guarantee
                </h3>
              </div>
              <p className="text-white text-base leading-relaxed mt-4 max-w-[607.39px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.04),0px_20px_25px_0px_rgba(0,0,0,0.1)]">
                Every handcrafted diamond ring includes a lifetime craftsmanship
                warranty and certified diamond authenticity documentation. GIA
                certification ensures lasting value and investment-grade diamond
                quality for generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
