import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { TopHeader } from "@modules/layout/templates/topnav"


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <div style={{
        backgroundColor: '#cbdfbd', // Light blue background
        color: '#000',
        padding: '4px 0',
        fontSize: '12px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1000,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}>
        We are currently facing issues while ordering from iPhone. Please continue with Android, Mac, or Windows, or{' '}
        <a
          href="https://wa.me/917004608819"
          style={{
            color: '#0066CC', // Darker blue for the link
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          click here
        </a>{' '}
        to continue order on WhatsApp .
      </div>
      <TopHeader />
      <Nav />
      {props.children}

      <Footer />

    </div>
  )
}