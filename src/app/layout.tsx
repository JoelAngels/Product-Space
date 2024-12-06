import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const radio = Radio_Canada({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Space",
  description: "Your go to Product Space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(radio.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
