import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';



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
        <GoogleTagManager gtmId="GTM-TXV3QWJX" />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '974617060920518');
            fbq('track', 'PageView');
              `,
          }}
        />
        <noscript>
          <img height="1" width="1"
            src="https://www.facebook.com/tr?id=974617060920518&ev=PageView&noscript=1"
          /></noscript>
          
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
