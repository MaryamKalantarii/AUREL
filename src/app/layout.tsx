import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

// 1. تنظیم فونت Serif لوکس برای تیترهای بزرگ
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-serif",
  display: "swap",
});

// 2. تنظیم فونت Sans مینیمال برای متون ریز و جزییات
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AUREL — Objects of Light",
  description: "A luxury jewelry brand featuring sculptural and cinematic designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-[#111111] text-[#F7F5F0] antialiased selection:bg-[#F7F5F0] selection:text-[#111111]">
        {children}
      </body>
    </html>
  );
}