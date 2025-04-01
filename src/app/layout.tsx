import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carat - Design Your Perfect Diamond",
  description: "Create your unique diamond with Carat",
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
