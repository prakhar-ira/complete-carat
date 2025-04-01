import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Diamonds | Carat",
  description:
    "Design your perfect engagement ring with Carat. Choose from a wide selection of natural and lab-grown diamonds, customize your ring settings, and create a unique piece that tells your love story.",
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
      <body className="min-h-screen bg-black text-white">{children}</body>
    </html>
  );
}
