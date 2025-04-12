import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Header from "./components/Header";
import Footer from "./components/Footer";

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

const quranFont = localFont({
  src: "./fonts/Amiri-Regular.ttf",
  variable: "--font-quran",
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
        className={`${cairoRegular.variable} ${cairoBold.variable} ${quranFont.variable} antialiased`}
      >
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
