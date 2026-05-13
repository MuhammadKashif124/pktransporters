import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { FloatingCtas } from "@/components/sections/floating-ctas";
import { JsonLd } from "@/components/seo/json-ld";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = createMetadata({
  title: "PK Transporters | Container Transport & Logistics Company Karachi",
  description: "Pakistan-wide container transport, freight forwarding, road cargo, customs clearance, warehousing, and Karachi port logistics for commercial cargo clients.",
  keywords: ["logistics company Karachi", "container transport Karachi", "freight forwarding Pakistan", "road cargo Pakistan"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingCtas />
      </body>
    </html>
  );
}
