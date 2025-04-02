"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import DiamondBuilder from "../components/DiamondBuilder";

interface DiamondBuilderContextProps {
  isOpen: boolean;
  openDiamondBuilder: () => void;
  closeDiamondBuilder: () => void;
}

const DiamondBuilderContext = createContext<DiamondBuilderContextProps | undefined>(undefined);

export const DiamondBuilderProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDiamondBuilder = () => setIsOpen(true);
  const closeDiamondBuilder = () => setIsOpen(false);

  return (
    <DiamondBuilderContext.Provider value={{ isOpen, openDiamondBuilder, closeDiamondBuilder }}>
      {children}
      {isOpen && <DiamondBuilder onClose={closeDiamondBuilder} />}
    </DiamondBuilderContext.Provider>
  );
};

export const useDiamondBuilder = () => {
  const context = useContext(DiamondBuilderContext);
  if (context === undefined) {
    throw new Error("useDiamondBuilder must be used within a DiamondBuilderProvider");
  }
  return context;
}; 