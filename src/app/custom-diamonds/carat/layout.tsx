import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond Carat Weight Guide | Complete Carat",
  description: "Learn about diamond carat weight and how it affects price and appearance. Select the perfect carat size for your engagement ring with our interactive carat selection tools.",
  keywords: "diamond carat weight guide, select diamond carat weight, diamond size guide, 1 carat diamond, 2 carat diamond",
  openGraph: {
    title: "Diamond Carat Weight Guide | Complete Carat",
    description: "Understand how carat weight affects a diamond's appearance and price. Use our interactive tools to select the perfect size.",
    url: "https://www.completecarat.com/custom-diamonds/carat",
    images: [
      {
        url: "/carat-og.png",
        width: 1200,
        height: 630,
        alt: "Diamond Carat Weight Guide",
      }
    ],
  },
};

export default function CaratLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 