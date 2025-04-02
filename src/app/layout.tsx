import { DiamondBuilderProvider } from "../context/DiamondBuilderContext";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Carat | Custom Diamond Selection & Engagement Rings",
  description: "Design your perfect engagement ring - select diamond carat weight, color, shape, and clarity with our interactive diamond builder. Book a consultation with our diamond experts. GIA-certified diamonds.",
  keywords: "custom diamond selection, diamond engagement rings, book diamond consultation, custom engagement ring builder, diamond carat weight guide, diamond color scale, GIA-certified diamond",
  openGraph: {
    title: "Complete Carat | Custom Diamond Selection & Engagement Rings",
    description: "Design your perfect engagement ring - select diamond carat weight, color, shape, and clarity with our interactive diamond builder.",
    url: "https://www.completecarat.com",
    siteName: "Complete Carat",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Complete Carat - Custom Diamond Builder",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Carat | Custom Diamond Selection",
    description: "Design your perfect engagement ring - select diamond specs and book consultations with our experts.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <DiamondBuilderProvider>
          {children}
        </DiamondBuilderProvider>
      </body>
    </html>
  );
}
