import { Playfair_Display } from "next/font/google";
import { Cabin } from "next/font/google";
import { Metadata } from "next";
import "styles/globals.css";
import Head from "next/head";
import { GoogleTagManager } from '@next/third-parties/google';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000";
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair_display",
});
const cabin = Cabin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cabin",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <GoogleTagManager gtmId="GTM-PWGQ6326" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TEXCCJ1GF6"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TEXCCJ1GF6');
            `,
        }}
      />
      <script
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
            fbq('init', '1202160144347700');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img height="1" width="1" style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1202160144347700&ev=PageView&noscript=1"
        />
      </noscript>
      <body className={playfair_display.variable + " " + cabin.variable}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWGQ6326"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <main className="relative font-cabin ">{props.children}</main>
      </body>
    </html>
  );
}
