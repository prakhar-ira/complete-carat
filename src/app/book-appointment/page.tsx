import Header from "modules/components/Header";
import DiamondBuilder from "../../components/DiamondBuilder";
import React from "react";

export default function DiamondBuilderPage(): React.ReactElement {
  return (
    <main className="relative min-h-screen">
       <Header />
      <DiamondBuilder />
    </main>
  );
}
