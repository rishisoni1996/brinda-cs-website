import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultMetaTitle,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.seo.defaultMetaDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.founder.name }],
  creator: siteConfig.founder.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.brand.name,
    title: siteConfig.seo.defaultMetaTitle,
    description: siteConfig.seo.defaultMetaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultMetaTitle,
    description: siteConfig.seo.defaultMetaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Legal Services",
};

export const viewport: Viewport = {
  themeColor: "#1a2a52",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-paper text-ink">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
