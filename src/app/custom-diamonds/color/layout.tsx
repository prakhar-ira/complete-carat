import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond Color Scale & Grading Guide | Complete Carat",
  description: "Understand the diamond color grading scale from D to Z. Learn how color affects price and appearance in GIA-certified diamonds. Find the ideal color grade for your engagement ring.",
  keywords: "diamond color scale, GIA-certified diamond color, D color diamond, E color diamond, F color diamond, G color diamond",
  openGraph: {
    title: "Diamond Color Scale & Grading Guide | Complete Carat",
    description: "Learn about diamond color grades from D (colorless) to Z (light yellow). Find the perfect balance of quality and value.",
    url: "https://www.completecarat.com/custom-diamonds/color",
    images: [
      {
        url: "/color-og.png",
        width: 1200,
        height: 630,
        alt: "Diamond Color Grading Guide",
      }
    ],
  },
};

export default function ColorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 