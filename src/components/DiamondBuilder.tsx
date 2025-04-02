"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Modal from "./Modal";
import emailjs from "@emailjs/browser";

interface FormSectionProps {
  number: number;
  title: string;
  children?: React.ReactNode;
  isExpanded?: boolean;
  canExpand?: boolean;
  onToggle?: () => void;
  showChevron?: boolean;
}

const FormSection: React.FC<FormSectionProps> = ({
  number,
  title,
  children,
  isExpanded = true,
  canExpand = true,
  onToggle = () => {},
  showChevron = true,
}) => {
  return (
    <div className="border border-[#E3ECF0] rounded-xl p-3">
      <div 
        className={`flex justify-between items-center ${canExpand ? 'cursor-pointer' : ''} ${isExpanded ? 'mb-4' : 'my-2'}`}
        onClick={canExpand ? onToggle : undefined}
      >
        <div className="flex items-center">
          <span className="text-[#01648E] text-xl font-semibold mr-2.5">
            {number}
          </span>
          <h3 className="text-[#536878] font-light uppercase">{title}</h3>
        </div>
        {showChevron && (
          <div className={`text-[#01648E] transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
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
        )}
      </div>
      {/* Content with collapsible animation */}
      <div 
        className={`transition-all duration-300 overflow-hidden ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
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
      <label className="mb-2 text-xs uppercase text-[#536878]">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-[#E3ECF0] rounded-lg p-2 sm:p-3 text-[#536878] text-sm"
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
      className={`cursor-pointer p-2 sm:p-2.5 rounded-lg border transition-all duration-200 ${
        isSelected
          ? "border-[#01648E] shadow-[0_2px_8px_rgba(1,100,142,0.15)] ring-2 ring-[#01648E]/20"
          : "border-[#E3ECF0] hover:border-[#01648E]/50 hover:bg-[#01648E]/5"
      }`}
    >
      {image ? (
        <div className="flex flex-col items-center space-y-1 sm:space-y-2">
          <Image
            src={image}
            alt={label}
            width={32}
            height={32}
            className="object-contain w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"
          />
          <span
            className={`text-xs sm:text-sm font-medium ${
              isSelected ? "text-[#01648E]" : "text-[#536878]"
            }`}
          >
            {label}
          </span>
        </div>
      ) : (
        <span
          className={`text-xs sm:text-sm font-medium ${
            isSelected ? "text-[#01648E]" : "text-[#536878]"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
};

interface DiamondBuilderProps {
  onClose: () => void;
}

const DiamondBuilder: React.FC<DiamondBuilderProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    shape: [] as string[],
    carat: "0",
    color: [] as string[],
    clarity: [] as string[],
    additionalComments: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSection2Expanded, setIsSection2Expanded] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Auto-expand section 2 when name and email are valid
    if ((name === 'name' || name === 'email') && !isSection2Expanded) {
      
      const hasName = name === 'name' ? value.trim() !== '' : formData.name.trim() !== '';
      const hasEmail = name === 'email' ? value.trim() !== '' : formData.email.trim() !== '';
      const validEmail = name === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : isValidEmail(formData.email);
      
      if (hasName && hasEmail && validEmail) {
        setIsSection2Expanded(true);
      }
    }
  };

  const handleOptionClick = (field: string, value: string) => {
    setFormData((prev) => {
      // For fields that support multi-select (shape, color, clarity)
      if (field === 'shape' || field === 'color' || field === 'clarity') {
        const currentValues = prev[field] as string[];
        
        // If value is already selected, remove it
        if (currentValues.includes(value)) {
          return {
            ...prev,
            [field]: currentValues.filter(item => item !== value)
          };
        } 
        // Otherwise, add it to the array
        else {
          return {
            ...prev,
            [field]: [...currentValues, value]
          };
        }
      } 
      // For single-select fields (like carat)
      else {
        return {
          ...prev,
          [field]: value
        };
      }
    });
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const toggleSection2 = () => {
    setIsSection2Expanded(!isSection2Expanded);
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

  // JSON-LD structured data for the diamond builder tool - moved after shape, colors, and clarities
  const structuredDataJson = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Diamond Engagement Ring",
    "description": "Design your perfect engagement ring - select diamond carat weight, color, shape, and clarity with our interactive diamond builder.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Diamond Shapes",
        "value": shapes.join(", ")
      },
      {
        "@type": "PropertyValue",
        "name": "Diamond Colors",
        "value": colors.join(", ") 
      },
      {
        "@type": "PropertyValue",
        "name": "Diamond Clarities",
        "value": clarities.join(", ")
      }
    ]
  };

  const handleSubmit = async () => {
    if (isFormValid()) {
      try {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          shape: formData.shape.length > 0 ? formData.shape.join(", ") : "Not specified",
          carat: formData.carat,
          color: formData.color.length > 0 ? formData.color.join(", ") : "Not specified",
          clarity: formData.clarity.length > 0 ? formData.clarity.join(", ") : "Not specified",
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

  // Using useEffect to add structured data to the DOM
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredDataJson);
    script.id = 'diamond-builder-structured-data';
    
    // Add to head
    document.head.appendChild(script);
    
    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById('diamond-builder-structured-data');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);  // Empty dependency array as structuredData doesn't change

  return (
    // Full screen fixed container with overlay - set to 90vh height
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      {/* Content container with fixed height and structure */}
      <div className="relative bg-white shadow-md rounded-sm w-full max-w-5xl mx-auto h-[90vh] flex flex-col overflow-hidden">
         {/* Add Close Button */}
         <button
           onClick={onClose}
           className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10"
           aria-label="Close"
         >
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
         </button>
        
        {/* Header */}
        <div className="flex flex-col items-center p-4 sm:p-6">
          <div className="mb-2 sm:mb-3">
            <svg
              width="30"
              height="28"
              viewBox="0 0 36 34"
              className="sm:w-[36px] sm:h-[34px]"
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#01648E] tracking-widest text-center uppercase">
            BUILD YOUR CUSTOM ENGAGEMENT RING
          </h2>
          <p className="text-sm sm:text-base text-[#7d8c98] text-center mt-2 sm:mt-3 tracking-[0.07em] font-regular">
            Let&apos;s start building your dream ring together!
          </p>
        </div>

        {/* Scrollable Content Container */}
        <div className="flex-grow overflow-y-auto px-4 sm:px-6 md:px-8 pb-4 sm:pb-6">
          <div className="space-y-4 sm:space-y-6">
            {/* Section 1 - Personal Information */}
            <FormSection 
              number={1} 
              title="Tell us about yourself"
              showChevron={false}
            >
              <div className="grid grid-cols-1 gap-4 sm:gap-6 p-2 sm:p-3">
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
                  <label className="mb-1 sm:mb-2 text-xs text-[#536878]">
                    <span className="uppercase">Phone Number</span>&nbsp;
                    <span className="text-[#94a3b8]">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your 10-digit phone number with country code"
                    className="border border-[#E3ECF0] rounded-lg p-2 sm:p-3 text-[#536878] text-sm"
                  />
                </div>
              </div>
            </FormSection>

            {/* Section 2 - Diamond Preferences - Acts as an accordion */}
            <FormSection 
              number={2} 
              title="What are you looking for?"
              isExpanded={isSection2Expanded}
              canExpand={true}
              onToggle={toggleSection2}
            >
              <div className="space-y-4 sm:space-y-6 p-2 sm:p-3">
                {/* Shape Selection */}
                <div>
                  <label className="block text-xs uppercase text-[#536878] mb-2 sm:mb-3">
                    Shape
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                    {shapes.map((shape) => (
                      <Option
                        key={shape}
                        label={shape}
                        isSelected={formData.shape.includes(shape)}
                        onClick={() => handleOptionClick("shape", shape)}
                        image={`/diamonds/${shape.toLowerCase()}.svg`}
                      />
                    ))}
                  </div>
                </div>

                {/* Carat Selection */}
                <div>
                  <label className="block text-xs uppercase text-[#536878] mb-2 sm:mb-3">
                    Carat
                  </label>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-[#536878]">
                        {formData.carat} Carat
                      </span>
                      <span className="text-xs sm:text-sm text-[#536878]">10 Carat</span>
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
                  <label className="block text-xs uppercase text-[#536878] mb-2 sm:mb-3">
                    Color
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {colors.map((color) => (
                      <Option
                        key={color}
                        label={color}
                        isSelected={formData.color.includes(color)}
                        onClick={() => handleOptionClick("color", color)}
                      />
                    ))}
                  </div>
                </div>

                {/* Clarity Selection */}
                <div>
                  <label className="block text-xs uppercase text-[#536878] mb-2 sm:mb-3">
                    Clarity
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {clarities.map((clarity) => (
                      <Option
                        key={clarity}
                        label={clarity}
                        isSelected={formData.clarity.includes(clarity)}
                        onClick={() => handleOptionClick("clarity", clarity)}
                      />
                    ))}
                  </div>
                </div>

                {/* Additional Comments */}
                <div>
                  <label className="block text-xs uppercase text-[#536878] mb-2 sm:mb-3">
                    Additional Comments
                  </label>
                  <textarea
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleInputChange}
                    placeholder="Tell us what you're looking for..."
                    className="w-full h-16 sm:h-20 border border-[#E3ECF0] rounded-lg p-2 sm:p-3 text-[#536878] text-sm resize-none"
                  />
                </div>
              </div>
            </FormSection>
          </div>
        </div>

        {/* Bottom CTA - Fixed at the bottom */}
        <div className="p-4 sm:p-6 border-t border-[#E3ECF0] bg-white">
          <p className="text-xs sm:text-sm text-[#7d8c98] text-center mb-2">
            Our expert will reach out to you via phone in next 24-48 hours
          </p>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`w-full p-3 sm:p-4 rounded-lg text-center transition-all duration-200 ${
              isFormValid()
                ? "bg-[#01648E] hover:bg-[#01648E]/90 cursor-pointer"
                : "bg-[#e2e8f0] cursor-not-allowed"
            }`}
          >
            <span
              className={`text-sm sm:text-base font-regular ${
                isFormValid() ? "text-[#FDF0D5]" : "text-[#94a3b8]"
              }`}
            >
              BOOK CONSULTATION
            </span>
          </button>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProceed={handleProceedToSchedule}
      />
    </div>
  );
};

export default DiamondBuilder;
