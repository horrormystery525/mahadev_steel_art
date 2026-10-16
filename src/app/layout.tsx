import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import JsonLd from "@/components/JsonLd";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://mahadevsteelart.in"),
  title: "Mahadev Steel Art | Steel Railing, Gate Grill & Fabrication in Varanasi",
  description:
    "Mahadev Steel Art at Akhari Bypass, Chunar Rd, Varanasi. Expert SS 304/202 railing, designer main gates, security window grills & structural fabrication. 5.0 Star Rated (395+ reviews). Call +91 9619360717.",
  keywords: [
    "steel railing varanasi",
    "gate grill varanasi",
    "fabrication work varanasi",
    "stainless steel railing akhari bypass",
    "mahadev steel art varanasi",
    "aluminium window manufacturer varanasi",
    "स्टील रेलिंग वाराणसी",
    "लोहे का गेट वाराणसी",
    "ss railing price per sq ft varanasi",
  ],
  authors: [{ name: "Mahadev Steel Art" }],
  openGraph: {
    title: "Mahadev Steel Art — Steel Railing, Gates & Fabrication in Varanasi",
    description:
      "Crafting high-grade stainless steel railings, heavy designer entrance gates, safety window grills and sheds. Akhari Bypass, Varanasi. 5.0 Star Rating.",
    url: "https://mahadevsteelart.in",
    siteName: "Mahadev Steel Art",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/storefront.webp",
        width: 750,
        height: 562,
        alt: "Mahadev Steel Art Varanasi Workshop and Railing Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Steel Art | Steel Railing & Fabrication in Varanasi",
    description: "Premium SS Railing, Gates, Grills & Fabrication at Akhari Bypass, Varanasi. ⭐ 5.0 Rating.",
    images: ["/images/storefront.webp"],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Varanasi, Akhari Bypass",
    "geo.position": `${COMPANY_INFO.coordinates.lat};${COMPANY_INFO.coordinates.lng}`,
    "ICBM": `${COMPANY_INFO.coordinates.lat}, ${COMPANY_INFO.coordinates.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F7F5] dark:bg-[#111113] text-[#111111] dark:text-[#F4F4F5] antialiased pb-20 md:pb-0 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-200">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyMobileCTA />
        </Providers>
      </body>
    </html>
  );
}
