import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[transparent] mt-[24px]">
      <div className="container mx-auto py-8 px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-20 h-12">
            <img
              src="/logo.png"
              alt="Carat Logo"
              className="w-full h-full object-contain brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
