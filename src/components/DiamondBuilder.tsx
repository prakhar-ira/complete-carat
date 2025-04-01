"use client";

import React, { useState } from "react";

import Image from "next/image";
import Modal from "./Modal";
import emailjs from "@emailjs/browser";

interface FormSectionProps {
  number: number;
  title: string;
  children?: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({
  number,
  title,
  children,
}) => {
  return (
    <div className="border border-[#E3ECF0] rounded-xl p-3">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-[#01648E] text-xl font-semibold mr-2.5">
            {number}
          </span>
          <h3 className="text-[#45565E] font-light uppercase">{title}</h3>
        </div>
        <div className="text-[#01648E]">
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {children}
    </div>
  );
};

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-xs uppercase text-[#445158]">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-[#E3ECF0] rounded-lg p-3 text-[#445158] text-sm"
      />
    </div>
  );
};

interface OptionProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  image?: string;
}

const Option: React.FC<OptionProps> = ({
  label,
  isSelected,
  onClick,
  image,
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-2.5 rounded-lg border transition-all duration-200 ${
        isSelected
          ? "border-[#01648E] bg-[#01648E]/10 ring-2 ring-[#01648E]/20"
          : "border-[#E3ECF0] hover:border-[#01648E]/50 hover:bg-[#01648E]/5"
      }`}
    >
      {image ? (
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={image}
            alt={label}
            width={40}
            height={40}
            className="object-contain"
          />
          <span
            className={`text-sm font-medium ${
              isSelected ? "text-[#01648E]" : "text-[#445158]"
            }`}
          >
            {label}
          </span>
        </div>
      ) : (
        <span
          className={`text-sm font-medium ${
            isSelected ? "text-[#01648E]" : "text-[#445158]"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
};

const DiamondBuilder: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    shape: "",
    carat: "0",
    color: "",
    clarity: "",
    additionalComments: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptionClick = (field: string, value: string) => {
    setFormData((prev) => {
      // Type assertion to allow string indexing
      const typedPrev = prev as { [key: string]: string };
      return {
        ...prev,
        [field]: typedPrev[field] === value ? "" : value,
      };
    });
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      isValidEmail(formData.email)
    );
  };

  const shapes = [
    "Round",
    "Princess",
    "Cushion",
    "Oval",
    "Pear",
    "Emerald",
    "Heart",
    "Radiant",
  ];
  const colors = ["D", "E", "F", "G", "H", "I", "J"];
  const clarities = ["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2"];

  const handleSubmit = async () => {
    if (isFormValid()) {
      try {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          shape: formData.shape,
          carat: formData.carat,
          color: formData.color,
          clarity: formData.clarity,
          message: formData.additionalComments || "None",
        };

        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );

        // Show success modal instead of immediate redirect
        setIsModalOpen(true);
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send form data. Please try again.");
      }
    }
  };

  const handleProceedToSchedule = () => {
    window.open(process.env.NEXT_PUBLIC_CALENDLY_URL!, "_blank");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
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

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-12 px-8">
        <div className="bg-white p-8 shadow-md rounded-sm">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="mb-3">
              <svg
                width="36"
                height="34"
                viewBox="0 0 36 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.6666 11.3334L27.9999 1.33337H7.99992L1.33325 11.3334M34.6666 11.3334L17.9999 33M34.6666 11.3334H1.33325M17.9999 33L1.33325 11.3334M17.9999 33L11.3333 11.3334L16.3333 1.33337M17.9999 33L24.6666 11.3334L19.6666 1.33337"
                  stroke="url(#paint0_linear_23_11)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_23_11"
                    x1="17.9999"
                    y1="1.33337"
                    x2="17.9999"
                    y2="33"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0D3A4D" />
                    <stop offset="1" stopColor="#01648E" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-3xl font-light text-[#01648E] tracking-widest text-center uppercase">
              BUILD YOUR CUSTOM ENGAGEMENT RING
            </h2>
            <p className="text-[#848484] text-center mt-3 tracking-[0.07em]">
              Let&apos;s start building your dream ring together!
            </p>
          </div>

          {/* Form Sections in Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Section 1 - Personal Information */}
              <FormSection number={1} title="Tell us about yourself">
                <div className="grid grid-cols-1 gap-6 p-3">
                  <InputField
                    label="Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                  <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email ID"
                  />
                  <div className="flex flex-col">
                    <label className="mb-2 text-xs text-[#445158]">
                      <span className="uppercase">Phone Number</span>&nbsp;
                      <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your 10-digit phone number with country code"
                      className="border border-[#E3ECF0] rounded-lg p-3 text-[#445158] text-sm"
                    />
                  </div>
                </div>
              </FormSection>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Section 2 - Diamond Preferences */}
              <FormSection number={2} title="What are you looking for?">
                <div className="space-y-6 p-3">
                  {/* Shape Selection */}
                  <div>
                    <label className="block text-xs uppercase text-[#445158] mb-3">
                      Shape
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {shapes.map((shape) => (
                        <Option
                          key={shape}
                          label={shape}
                          isSelected={formData.shape === shape}
                          onClick={() => handleOptionClick("shape", shape)}
                          image={`/diamonds/${shape.toLowerCase()}.svg`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Carat Selection */}
                  <div>
                    <label className="block text-xs uppercase text-[#445158] mb-3">
                      Carat
                    </label>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#445158]">
                          {formData.carat} Carat
                        </span>
                        <span className="text-sm text-[#445158]">10 Carat</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={formData.carat}
                        onChange={(e) =>
                          handleOptionClick("carat", e.target.value)
                        }
                        className="w-full h-2 bg-[#E3ECF0] rounded-lg appearance-none cursor-pointer accent-[#01648E]"
                      />
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div>
                    <label className="block text-xs uppercase text-[#445158] mb-3">
                      Color
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {colors.map((color) => (
                        <Option
                          key={color}
                          label={color}
                          isSelected={formData.color === color}
                          onClick={() => handleOptionClick("color", color)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Clarity Selection */}
                  <div>
                    <label className="block text-xs uppercase text-[#445158] mb-3">
                      Clarity
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {clarities.map((clarity) => (
                        <Option
                          key={clarity}
                          label={clarity}
                          isSelected={formData.clarity === clarity}
                          onClick={() => handleOptionClick("clarity", clarity)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Additional Comments */}
                  <div>
                    <label className="block text-xs uppercase text-[#445158] mb-3">
                      Additional Comments
                    </label>
                    <textarea
                      name="additionalComments"
                      value={formData.additionalComments}
                      onChange={handleInputChange}
                      placeholder="Tell us what you're looking for..."
                      className="w-full h-20 border border-[#E3ECF0] rounded-lg p-3 text-[#445158] text-sm resize-none"
                    />
                  </div>
                </div>
              </FormSection>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 mb-4">
            <p className="text-[#848484] text-sm text-center mb-2">
              Our expert will reach out to you via phone in next 24-48 hours
            </p>
            <button
              onClick={handleSubmit}
              disabled={!isFormValid()}
              className={`w-full p-4 rounded-lg text-center transition-all duration-200 ${
                isFormValid()
                  ? "bg-[#01648E] hover:bg-[#01648E]/90 cursor-pointer"
                  : "bg-[#D9E1E5] cursor-not-allowed"
              }`}
            >
              <span
                className={`font-medium ${
                  isFormValid() ? "text-[#FDF0D5]" : "text-[#AAAAAA]"
                }`}
              >
                BOOK CONSULTATION
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProceed={handleProceedToSchedule}
      />
    </div>
  );
};

export default DiamondBuilder;
