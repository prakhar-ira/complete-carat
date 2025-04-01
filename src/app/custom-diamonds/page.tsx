"use client";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import React from "react";

export default function CustomDiamonds(): React.ReactElement {
  return (
    <main className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
