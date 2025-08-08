import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "../styles/globals.css"

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FinTrack Dashboard",
  description: "A modern dashboard for tracking finances",
  icons: {
    icon: "/logo.svg",
  },  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
