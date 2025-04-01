"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Footer from "./Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollComplete, setIsScrollComplete] = useState(false);
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0px", "end 300px"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 1) {
        setIsScrollComplete(true);
      } else {
        setIsScrollComplete(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const footerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const footerY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const handleBookAppointment = () => {
    router.push("/book-appointment");
  };

  return (
    <div ref={containerRef} className="h-[180vh] relative">
      {/* Background Image - Hidden on mobile */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0">
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>

      <motion.section
        animate={{
          height: isScrollComplete ? "auto" : "115vh",
        }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-center sticky top-0"
      >
        <div className="container mx-auto px-4">
          {/* Title Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center space-y-5"
          >
            {/* Header with stars and lines */}
            <div className="w-full flex items-center justify-center space-x-1">
              <div className="h-px bg-white flex-1"></div>
              <div className="text-white text-2xl">★</div>
              <div className="text-center px-4">
                <h1 className="text-[44px] font-['SF_Pro_Display'] font-thin text-center uppercase tracking-wide bg-gradient-to-r from-white to-[#FDF0D5] text-transparent bg-clip-text [text-shadow:_-4.8px_-1.6px_12.8px_#E7CDB9,_4.8px_1.6px_12.8px_#FDF0D580] sm:leading-relaxed ">
                  DESIGN YOUR PERFECT DIAMOND
                </h1>
              </div>
              <div className="text-white text-2xl">★</div>
              <div className="h-px bg-white flex-1"></div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#FDF0D5] text-xl text-center font-light max-w-2xl leading-relaxed"
            >
              Craft your dream with our experts– a bespoke experience tailored
              to your engagement ring needs
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={handleBookAppointment}
              className="cursor-pointer bg-white text-[#01648E] border border-[#F7F0D5]/30 rounded-none py-3 px-3 flex items-center space-x-2 w-64 justify-center hover:bg-[#F9F9F0] transition-colors duration-300 cta
              ox_shadow"
            >
              <span className="text-lg font-medium">TALK TO OUR EXPERTS</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>

          {/* Button Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <div className="w-[270px] h-[40px] flex items-center space-x-2">
              <span className="text-[#FDF0D5] text-sm">Get Started</span>
              <span className="text-[#FDF0D5] text-sm">|</span>
              <div className="flex space-x-2">
                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/completecarat/"
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-[#FDF0D5] flex items-center justify-center"
                >
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </a>
                {/* Google Icon */}
                <a
                  href="https://www.google.com/maps/place/Complete+Carat/@40.7574844,-73.9828387,17z/data=!4m8!3m7!1s0x883b4b7804cad1dd:0x70ee511590d1d9dc!8m2!3d40.7574804!4d-73.9802638!9m1!1b1!16s%2Fg%2F11vsw3l9jh?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-[#F7F0D5] flex items-center justify-center"
                >
                  <Image
                    src="/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                  />
                </a>
                {/* Trustpilot Icon */}
                <a
                  href="https://www.trustpilot.com/review/completecarat.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-[#F7F0D5] flex items-center justify-center"
                >
                  <Image
                    src="/trustpilot.svg"
                    alt="Trustpilot"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer with scroll-based visibility */}
      <motion.div
        style={{
          opacity: footerOpacity,
          y: footerY,
        }}
        className="w-full mt-60"
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Hero;
