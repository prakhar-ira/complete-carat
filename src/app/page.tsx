// import DiamondBuilder from "../components/DiamondBuilder";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "next/image";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <main className="relative min-h-screen">
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
      <div className="relative z-10">
        <Header />
        <Hero />
        {/* <DiamondBuilder /> */}
      </div>
    </main>
  );
}
