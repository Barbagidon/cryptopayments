import { Suspense } from 'react'
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import FacebookPixelEvents from "@/components/Pixel/pixel"



const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cryptopayments",
  metadataBase: new URL(process.env.CMS_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
        className={interTight.className}
      >
        <GoogleAnalytics gaId="GTM-TXV3QWJX" />
        <GoogleTagManager gtmId="G-Q39QTE2DD1" />
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
