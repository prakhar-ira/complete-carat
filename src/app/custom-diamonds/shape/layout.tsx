import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond Shapes & Cuts Guide | Round, Princess, Cushion & More | Complete Carat",
  description: "Explore different diamond shapes for your engagement ring. Compare round, princess, cushion, emerald, oval, and marquise cuts. Learn how each shape affects brilliance and price.",
  keywords: "diamond shapes, round cut diamond, princess cut diamond, cushion cut diamond, emerald cut, oval diamond, marquise cut",
  openGraph: {
    title: "Diamond Shapes & Cuts Guide | Complete Carat",
    description: "Explore different diamond shapes and cuts for your engagement ring. Find the perfect shape to match your style and preferences.",
    url: "https://www.completecarat.com/custom-diamonds/shape",
    images: [
      {
        url: "/shape-og.png",
        width: 1200,
        height: 630,
        alt: "Diamond Shapes & Cuts Guide",
      }
    ],
  },
};

export default function ShapeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 