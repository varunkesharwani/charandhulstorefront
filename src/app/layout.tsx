import { Playfair_Display } from "next/font/google"
import { Cabin } from "next/font/google"
import { Metadata } from "next"
import "styles/globals.css"
import Head from "next/head"
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
      <Head>

        <meta name="ahrefs-site-verification" content="db5d224af879d6b9700c1939a1b8abbcd971b1dcfa6559d21b2ff63b4fa06e79" />
      </Head>
      <body className={playfair_display.variable + " " + cabin.variable}>
        <main className="relative font-cabin ">{props.children}</main>
      </body>
    </html>
  )
}
