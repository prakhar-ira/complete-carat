"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import Footer from "./Footer";
import Image from "next/image";
import { useDiamondBuilder } from "../context/DiamondBuilderContext";

const AboutUsModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-[95%] sm:w-[90%] max-w-5xl bg-white rounded-lg shadow-2xl mx-auto my-4 text-black max-h-[90vh] md:max-h-[95vh] lg:max-h-[85vh] xl:max-h-[75vh] flex flex-col"
        style={{ transform: "translateX(0)" }}
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        {/* Close button */}
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
          aria-label="Close"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 4L12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.button>

        <div className="flex flex-col items-center overflow-y-auto max-h-[calc(90vh-2rem)] md:max-h-[calc(95vh-2rem)] lg:max-h-[calc(85vh-2rem)] xl:max-h-[calc(75vh-2rem)] w-full">
          {/* Hero Section */}
          <motion.div
            className="w-full flex flex-col items-center gap-4 mb-6 mt-12 sm:mt-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-center">
              ABOUT COMPLETE CARAT
            </h1>
          </motion.div>

          {/* Content Sections */}
          <div className="w-full px-4 sm:px-6 md:px-10 flex flex-col gap-4 sm:gap-6 pb-6 sm:pb-10">
            {/* Philosophy Section */}
            <motion.div
              className="border border-[#E4E4E4] p-4 sm:p-6 flex flex-col md:flex-row gap-4 items-center rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <div className="p-3 sm:p-4 flex-shrink-0">
                <Image
                  src="/about-us/volunteer-activism.svg"
                  alt="Our Philosophy"
                  width={40}
                  height={40}
                  className="sm:w-12 sm:h-12"
                />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
                  Our Philosophy: Crafting Symbols of Love
                </h2>
                <p className="text-sm sm:text-base md:text-lg font-regular">
                  Welcome to Complete Carat, where our fervent commitment to
                  excellence shapes every diamond ring we create. These
                  aren&apos;t mere pieces of jewelry; they are emblems of love
                  and commitment, crafted with unparalleled precision and
                  quality. At Complete Carat, we stand apart in the world of
                  fine jewelry, with each ring reflecting our ethos: excellence
                  without compromise.
                </p>
              </div>
            </motion.div>

            {/* Why We Stand Out Section */}
            <motion.div
              className="border border-[#E4E4E4] p-4 sm:p-6 flex flex-col md:flex-row gap-4 items-center rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <div className="p-3 sm:p-4 flex-shrink-0">
                <Image
                  src="/about-us/workspace-premium.svg"
                  alt="Why We Stand Out"
                  width={40}
                  height={40}
                  className="sm:w-12 sm:h-12"
                />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
                  Why Complete Carat Stands Out
                </h2>
                <p className="text-sm sm:text-base md:text-lg whitespace-pre-line font-regular">
                  Our expansive facility is a symphony of advanced technology
                  and masterful artisans. We oversee every aspect of ring
                  creation, from initial design to final polish, ensuring your
                  dream ring materializes with extraordinary craftsmanship.
                  Founder Involvement: The soul of Complete Carat lies in our
                  founders&apos; unwavering dedication. Their hands-on approach
                  in every phase, from casting to setting, infuses each ring
                  with a level of quality and personal touch rarely seen in the
                  industry. In-House Production Excellence: We take immense
                  pride in our policy of no outsourcing. Every element of your
                  ring is meticulously crafted within our premises, guaranteeing
                  consistency and flawlessness. This approach not only enhances
                  quality but ensures each piece truly embodies the spirit of
                  Complete Carat.
                </p>
              </div>
            </motion.div>

            {/* Our Selection Section */}
            <motion.div
              className="border border-[#E4E4E4] p-4 sm:p-6 flex flex-col md:flex-row gap-4 items-center rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div className="p-3 sm:p-4 flex-shrink-0">
                <Image
                  src="/about-us/settings-heart.svg"
                  alt="Our Selection"
                  width={40}
                  height={40}
                  className="sm:w-12 sm:h-12"
                />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
                  Our Exquisite Selection
                </h2>
                <p className="text-sm sm:text-base md:text-lg font-regular">
                  Diamonds for every preference, diverse diamond shapes and
                  style that speaks volumes. At Complete Carat, each ring is not
                  just a product but a masterpiece, a testament to our passion
                  and precision. We&apos;re devoted to crafting exceptional
                  jewelry that celebrates your unique love story. Trust us to
                  deliver not just a ring, but a timeless symbol of your bond.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ReturnPolicyModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center min-h-screen py-4">
        <motion.div
          className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl mx-auto text-black"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
            duration: 0.3,
          }}
        >
          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            aria-label="Close"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 4L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>

          <div className="overflow-y-auto max-h-[80vh] py-12">
            {/* Title Section */}
            <motion.div
              className="mb-8 px-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                RETURN POLICY
              </h1>
              <p className="text-base sm:text-md md:text-md whitespace-pre-line">
                At Complete Carat, we believe that your satisfaction goes beyond
                the purchase. We&apos;re dedicated to making sure you feel
                confident and happy with your jewellery every step of the way.
                If for any reason you&apos;re not completely satisfied, we offer
                a 10-Day Money-Back Guarantee. You can return or exchange any
                items within 10 days of delivery, with no hassle and at no cost
                to you. If you have any questions or concerns, we&apos;re here
                to assist you! To ensure that your return is processed smoothly,
                please ensure the item is in new, unworn condition and includes
                all original packaging, certificates, and documentation. A
                receipt or proof of purchase will also be required.
              </p>
            </motion.div>

            {/* How to return items section */}
            <div className="px-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
                  How to return items
                </h2>
              </motion.div>

              {/* Step 1 */}
              <motion.div
                className="border border-[#E4E4E4] p-4 sm:p-6 flex flex-row gap-4 items-start rounded-md mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-extralight">1</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">
                    Start Your Return
                  </h3>
                  <p className="text-base sm:text-lg">
                    Contact us at info@completecarat.com with your order number,
                    and we&apos;ll guide you through the return process
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="border border-[#E4E4E4] p-4 sm:p-6 flex flex-row gap-4 items-start rounded-md mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-extralight">2</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">
                    Prepare the Item for Return
                  </h3>
                  <p className="text-base sm:text-lg">
                    Once your return is initiated, we&apos;ll send you a
                    pre-paid, insured shipping label along with simple
                    instructions for how to return the item. Please package the
                    jewelry securely in its original box, including all grading
                    reports, appraisals, and accessories. For your security,
                    please avoid writing &quot;Complete Carat&quot; on the
                    exterior of the return box.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="border border-[#E4E4E4] p-4 sm:p-6 flex flex-row gap-4 items-start rounded-md mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-extralight">3</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">
                    Ship the Item Back
                  </h3>
                  <p className="text-base sm:text-lg">
                    Use the provided return shipping label to send the item back
                    to us. We highly recommend shipping with insurance for your
                    peace of mind, as we are not responsible for any lost or
                    stolen items that are returned without the provided label.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                className="border border-[#E4E4E4] p-4 sm:p-6 flex flex-row gap-4 items-start rounded-md mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-extralight">4</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">
                    After We Receive Your Return
                  </h3>
                  <p className="text-base sm:text-lg whitespace-pre-line">
                    Once we receive your returned item, it will be inspected and
                    processed within 48 business hours. You will receive a
                    notification when it has been passed to our Quality
                    Assurance team. Please note: If the item has been altered by
                    a third-party jeweller, the return eligibility or warranty
                    may be voided. It typically takes up to 10 business days to
                    complete the return process. We will notify you via email
                    once your refund is processed or if additional information
                    is required. We take great care to ensure that your order
                    arrives in perfect condition. However, if your item is
                    damaged, defective, or incorrect, please reach out to us
                    immediately after receipt. We&apos;ll work quickly to
                    resolve the issue to your satisfaction.
                  </p>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div
                className="border border-[#E4E4E4] p-4 sm:p-6 flex flex-row gap-4 items-start rounded-md mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.4 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-extralight">5</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">
                    Once the Return is Inspected and Approved
                  </h3>
                  <p className="text-base sm:text-lg">
                    We will issue a refund to your original payment method
                    within 10 business days. Please note that your bank or
                    credit card company may take additional time to process the
                    refund. If you haven&apos;t received your refund after 10
                    business days, please reach out to us at
                    info@completecarat.com for assistance. For the quickest way
                    to get the item you truly want, we recommend returning the
                    original item and placing a new order for the replacement.
                    If you need assistance with the process, our team is here to
                    help!
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Important Information */}
            <div className="px-6 mb-6">
              <motion.div
                className="border border-[#E4E4E4] p-4 sm:p-6 flex flex-row gap-4 items-start rounded-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">
                    Important Information
                  </h3>
                  <p className="text-base sm:text-lg whitespace-pre-line">
                    Complete Carat reserves the right to modify this return
                    policy at any time without prior notice. We encourage you to
                    review our policy before completing your purchase. If you
                    have any questions or need assistance, our friendly Customer
                    Service team is always here to help—just reach out to us!
                    Thank you for choosing Complete Carat. We truly appreciate
                    your trust in us and are committed to delivering a shopping
                    experience that exceeds your expectations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollComplete, setIsScrollComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);
  const { openDiamondBuilder } = useDiamondBuilder();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical mobile breakpoint
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Listen for custom events from Header component
  useEffect(() => {
    const handleShowAboutUs = () => {
      setShowAboutUs(true);
    };

    const handleShowReturnPolicy = () => {
      setShowReturnPolicy(true);
    };

    window.addEventListener("showAboutUs", handleShowAboutUs);
    window.addEventListener("showReturnPolicy", handleShowReturnPolicy);

    return () => {
      window.removeEventListener("showAboutUs", handleShowAboutUs);
      window.removeEventListener("showReturnPolicy", handleShowReturnPolicy);
    };
  }, []);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (showAboutUs || showReturnPolicy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showAboutUs, showReturnPolicy]);

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
    openDiamondBuilder();
  };

  console.log(isMobile, "isMobile");
  return (
    <div
      ref={containerRef}
      className={`${isMobile ? "h-[120px]" : "h-[180vh]"} relative`}
    >
      {/* Background Image - Hidden on mobile */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0">
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
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
            className="flex flex-col items-center space-y-3 sm:space-y-5"
          >
            {/* Header with stars and lines */}
            <div className="w-screen flex items-center justify-center space-x-1 px-0 relative -mx-4">
              <div className="h-px bg-white flex-1"></div>
              <div className="w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/star.svg"
                  alt="Star"
                  width={14}
                  height={14}
                  className="invert-0 w-[10px] h-[10px] sm:w-[14px] sm:h-[14px]"
                  style={{ color: "white" }}
                />
              </div>
              <div className="text-center px-1 w-auto max-w-[75%] sm:max-w-[65%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] overflow-visible">
                <h1 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[48px] font-['SF_Pro_Display'] font-thin text-center uppercase tracking-wide bg-gradient-to-r from-white to-[#FDF0D5] text-transparent bg-clip-text [text-shadow:_-4.8px_-1.6px_12.8px_#E7CDB9,_4.8px_1.6px_12.8px_#FDF0D580] leading-tight sm:leading-tight md:whitespace-nowrap">
                  DESIGN YOUR FINE JEWELRY
                </h1>
              </div>
              <div className="w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/star.svg"
                  alt="Star"
                  width={14}
                  height={14}
                  className="invert-0 w-[10px] h-[10px] sm:w-[14px] sm:h-[14px]"
                  style={{ color: "white" }}
                />
              </div>
              <div className="h-px bg-white flex-1"></div>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#FDF0D5] text-base sm:text-lg md:text-xl text-center font-light max-w-2xl leading-relaxed px-4"
              style={{
                textShadow:
                  "0 10px 30px rgba(253, 240, 213, 0.4), 0 5px 15px rgba(231, 205, 185, 0.6)",
              }}
            >
              Craft your dream with our experts– a bespoke experience tailored
              to your engagement ring needs
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mt-8 sm:mt-12"
          >
            <button
              onClick={handleBookAppointment}
              className="cursor-pointer bg-white text-[#01648E] border border-[#FEF7E9]/30 rounded-none py-2.5 sm:py-3 px-4 sm:px-4 flex items-center justify-center hover:bg-[#F9F9F0] transition-all duration-300 group whitespace-nowrap relative hover:pr-10 sm:hover:pr-12"
              style={{
                boxShadow:
                  "0px 0px 15px 2px rgba(253, 240, 213, 0.5), 0px 0px 8px 0px rgba(231, 205, 185, 0.3)",
              }}
            >
              <span className="text-base sm:text-lg uppercase tracking-wide">
                TALK TO OUR EXPERTS
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute right-2 sm:right-3 flex translate-x-4 group-hover:translate-x-0 text-[#01648E]">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 -ml-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Button Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mt-8 sm:mt-12"
          >
            <div className="w-[240px] sm:w-[270px] h-[40px] flex items-center space-x-1 sm:space-x-2">
              <span className="text-[#FDF0D5] text-xs sm:text-sm">
                See Our Work
              </span>
              <span className="text-[#FDF0D5] text-xs sm:text-sm">|</span>
              <div className="flex space-x-1 sm:space-x-2">
                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/completecarat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white hover:border-[#FDF0D5] hover:bg-[#FDF0D5]/20 transition-colors duration-200 ease-out"
                >
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </a>
                {/* Google Icon */}
                <a
                  href="https://www.google.com/maps/place/Complete+Carat/@40.7574844,-73.9828387,17z/data=!4m8!3m7!1s0x883b4b7804cad1dd:0x70ee511590d1d9dc!8m2!3d40.7574804!4d-73.9802638!9m1!1b1!16s%2Fg%2F11vsw3l9jh?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white hover:border-[#FDF0D5] hover:bg-[#FDF0D5]/20 transition-colors duration-200 ease-out"
                >
                  <Image
                    src="/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </a>
                {/* Trustpilot Icon */}
                <a
                  href="https://www.trustpilot.com/review/completecarat.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white hover:border-[#FDF0D5] hover:bg-[#FDF0D5]/20 transition-colors duration-200 ease-out"
                >
                  <Image
                    src="/trustpilot.svg"
                    alt="Trustpilot"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer with scroll-based visibility */}
      {!isMobile ? (
        <motion.div
          style={{
            opacity: footerOpacity,
            y: footerY,
          }}
          className="w-full mt-60 mb-32"
        >
          <Footer />
        </motion.div>
      ) : (
        <div className="w-full mt-60 mb-32">
          <Footer />
        </div>
      )}

      {/* About Us Modal with AnimatePresence for exit animations */}
      <AnimatePresence>
        {showAboutUs && <AboutUsModal onClose={() => setShowAboutUs(false)} />}
      </AnimatePresence>

      {/* Return Policy Modal with AnimatePresence for exit animations */}
      <AnimatePresence>
        {showReturnPolicy && (
          <ReturnPolicyModal onClose={() => setShowReturnPolicy(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
