// import DiamondBuilder from "../components/DiamondBuilder";
import Header from "../components/Header";
import Hero from "../components/Hero";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <main className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        {/* <DiamondBuilder /> */}
      </div>
    </main>
  );
}
