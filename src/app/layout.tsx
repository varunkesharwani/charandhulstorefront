import { Playfair_Display } from "next/font/google"
import { Cabin } from "next/font/google"
import { Metadata } from "next"
import "styles/globals.css"
import Head from "next/head"
import { GoogleTagManager } from '@next/third-parties/google' 
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair_display",
})
const cabin = Cabin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cabin",
})
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

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
      <body className={playfair_display.variable + " " + cabin.variable}>

        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWGQ6326"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <main className="relative font-cabin ">{props.children}</main>
      </body>
    </html>
  )
}
