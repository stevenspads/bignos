import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bignos — Sicilian Bignolati & Bakery",
  description: "Bignos serves fresh Sicilian sausage bread and bakery favorites in a warm local cafe-style experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased bg-amber-50`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
