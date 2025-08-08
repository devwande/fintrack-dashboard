import type { Metadata } from "next";
import { Geist, Geist_Mono, Timmana } from "next/font/google";

import "../styles/globals.css"

const timmana = Timmana({
  variable: "--font-timmana",
  subsets: ["latin"],
  display: "swap",
  style: "normal",  
  weight: ["400"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinTrack",
  description: "Fintrack - Your Personal Finance Tracker",
  icons: {
    icon: '/logo.svg',
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
        className={`${timmana.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
