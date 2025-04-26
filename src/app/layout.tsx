import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const oldStyleNow = localFont({
  src: "../../public/fonts/old-style-now-audrey-chow.otf",
  variable: "--old-style-now",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alvin's Journal",
  description: "In search of something useful",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oldStyleNow.variable}  antialiased`}>{children}</body>
    </html>
  );
}
