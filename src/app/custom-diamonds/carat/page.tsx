"use client";

import Header from "../../../components/Header";
import React from "react";

export default function DiamondCarat(): React.ReactElement {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Header />
        <div className="container mx-auto px-4 pt-16">
          <h1 className="text-4xl font-bold mb-8">Diamond Carat Weight Guide</h1>
          <p className="mb-6">
            Learn about diamond carat weight and how it affects the appearance and price of your diamond.
          </p>
          {/* Content for carat information would go here */}
        </div>
      </div>
    </main>
  );
} 