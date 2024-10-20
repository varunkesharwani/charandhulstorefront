import dynamic from "next/dynamic";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

// Lazy load Footer and TopHeader for performance
const Footer = dynamic(() => import("@modules/layout/templates/footer"), { ssr: false });
const Nav = dynamic(() => import("@modules/layout/templates/nav"));
const TopHeader = dynamic(() => import("@modules/layout/templates/topnav"), { ssr: false });

// BASE_URL for metadata
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Lazy loaded TopHeader and Nav */}
      <TopHeader />
      <Nav />

      {/* Main content of the page */}
      {children}

      {/* Lazy load Footer */}
      <Footer />

      {/* Analytics, make sure this is async */}
      <Analytics />
    </div>
  );
}
