"use client";

import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full my-20 pt-12">
      <div className="container mx-auto px-4">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-[60px] mb-6 md:mb-[12px]">
          <div className="flex-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xl h-auto flex flex-col items-center">
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
                <h3 className="text-white text-xl font-medium">
                  Ethically Sourced Diamonds
                </h3>
              </div>
              <p className="text-white text-base font-normal leading-relaxed mt-4 w-full max-w-xl mx-auto drop-shadow-[0px_10px_10px_0px_rgba(0,0,0,0.04)] [text-shadow:_0_0_5px_#FDF0D5]">
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
              <div className="w-full max-w-xl h-auto flex flex-col items-center">
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
                <h3 className="text-white text-xl font-medium">
                  Expertly Cut for Maximum Brilliance
                </h3>
              </div>
              <p className="text-white text-base font-normal leading-relaxed mt-4 w-full max-w-xl mx-auto drop-shadow-[0px_10px_10px_0px_rgba(0,0,0,0.04)] [text-shadow:_0_0_5px_#FDF0D5]">
                Each engagement ring features a precision ideal-cut diamond with
                perfect proportions, maximizing brilliance, fire and
                scintillation. Our master cutters create stones with superior
                light performance for a truly unforgettable sparkle.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-[60px]">
          {/* All Inclusive Column */}
          <div className="flex-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xl h-auto flex flex-col items-center">
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
                <h3 className="text-white text-xl font-medium">
                  Custom Engagement Ring Design
                </h3>
              </div>
              <p className="text-white text-base font-normal leading-relaxed mt-4 w-full max-w-xl mx-auto drop-shadow-[0px_10px_10px_0px_rgba(0,0,0,0.04)] [text-shadow:_0_0_5px_#FDF0D5]">
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
              <div className="w-full max-w-xl h-auto flex flex-col items-center">
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
                <h3 className="text-white text-xl font-medium">
                  Lifetime Warranty & Authenticity Guarantee
                </h3>
              </div>
              <p className="text-white text-base font-normal leading-relaxed mt-4 w-full max-w-xl mx-auto drop-shadow-[0px_10px_10px_0px_rgba(0,0,0,0.04)] [text-shadow:_0_0_2px_#FDF0D5]">
                Every handcrafted diamond ring includes a lifetime craftsmanship
                warranty and certified diamond authenticity documentation. GIA/IGI
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
