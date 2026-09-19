import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-[#0A0A0A] text-[#F7F5F0] antialiased">
        {children}
      </body>
    </html>
  );
}