import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Diamond Selection | Choose Your Perfect Diamond | Complete Carat",
  description: "Select your diamond specifications - carat weight, color, shape, clarity. Custom engagement rings with GIA-certified diamonds. Use our interactive diamond builder.",
  keywords: "diamond search by color, carat, clarity, and shape, custom engagement rings, select diamond carat weight, GIA-certified diamond color",
  openGraph: {
    title: "Custom Diamond Selection | Complete Carat",
    description: "Select your diamond specifications and design your perfect engagement ring with our interactive diamond builder.",
    url: "https://www.completecarat.com/custom-diamonds",
    images: [
      {
        url: "/custom-diamond-og.png",
        width: 1200,
        height: 630,
        alt: "Custom Diamond Selection Tool",
      }
    ],
  },
};

export default function CustomDiamondsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 