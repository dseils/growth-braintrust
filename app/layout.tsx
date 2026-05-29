import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Ultimate Business Growth Braintrust | Donald Seils",
  description: "Get strategic advice from 11 world-class business experts without the $50K mastermind price tag. 90-minute Board Meeting Intensive sessions with tech founder Donald Seils.",
  keywords: "business strategy, business consulting, strategic advisory, Alex Hormozi, Chris Voss, business growth, scaling, entrepreneurship",
  openGraph: {
    title: "The Ultimate Business Growth Braintrust",
    description: "Strategic advice from 11 world-class business experts in a 90-minute intensive session",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
