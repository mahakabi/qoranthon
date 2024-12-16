import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cairoRegular = localFont({
  src: "./fonts/Cairo-Regular.ttf",
  variable: "--font-cairo-regular",
  display: "swap",
});

const cairoBold = localFont({
  src: "./fonts/Cairo-Bold.ttf",
  variable: "--font-cairo-bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "آياتثون",
  description: "طموحنا عنان السماء",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairoRegular.variable} ${cairoBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
