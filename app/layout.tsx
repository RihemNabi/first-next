"use client";

import "./globals.css";
import "./i18n"; // active i18next pour toute l'app
import { Geist, Geist_Mono } from "next/font/google";
import SessionWrapper from "../components/SessionWrapper";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SessionWrapper>{children}</SessionWrapper>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
