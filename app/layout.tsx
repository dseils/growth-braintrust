import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
