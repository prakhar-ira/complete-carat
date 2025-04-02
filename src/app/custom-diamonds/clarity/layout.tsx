import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond Clarity Grading Guide | FL, IF, VVS, VS, SI | Complete Carat",
  description: "Learn about diamond clarity grades from Flawless (FL) to Included (I). Understand how inclusions affect a diamond's appearance and price. Find the best clarity for your engagement ring.",
  keywords: "diamond clarity, FL diamond, IF diamond, VVS1 diamond, VVS2 diamond, VS1 diamond, VS2 diamond, SI1 diamond",
  openGraph: {
    title: "Diamond Clarity Grading Guide | Complete Carat",
    description: "Understand diamond clarity grades and how they affect appearance and value. Find the perfect clarity grade for your budget.",
    url: "https://www.completecarat.com/custom-diamonds/clarity",
    images: [
      {
        url: "/clarity-og.png",
        width: 1200,
        height: 630,
        alt: "Diamond Clarity Grading Guide",
      }
    ],
  },
};

export default function ClarityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 