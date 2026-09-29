import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Preloader from "../components/Preloader";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shapes & Shades Interior Design | Premium Aesthetics in Al Ain",
  description: "Elevating your living spaces with bespoke interior design and premium aesthetics. Based in Al Ain, Abu Dhabi, UAE.",
  keywords: ["Interior Design", "Bespoke Interiors", "Shapes and Shades", "Al Ain Interior Design", "Abu Dhabi Interiors", "UAE", "Premium Aesthetics", "Home Decor", "Commercial Design", "Shapes and Shades LLC SPC"],
  openGraph: {
    title: "Shapes & Shades Interior Design",
    description: "Elevating your living spaces with bespoke interior design and premium aesthetics. Based in Al Ain.",
    url: "https://shapesandshades.ae/",
    siteName: "Shapes & Shades Interior Design",
    images: [
      {
        url: "https://shapesandshades.ae/logo-shapes-shade.png",
        width: 1200,
        height: 630,
        alt: "Shapes & Shades Interior Design Logo",
      }
    ],
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://shapesandshades.ae/",
  },
  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Al Ain",
    "geo.position": "24.199165;55.763479",
    "ICBM": "24.199165, 55.763479"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignBusiness",
  "name": "Shapes and Shades Interior Design LLC SPC",
  "image": "https://shapesandshades.ae/logo-shapes-shade.png",
  "@id": "https://shapesandshades.ae/",
  "url": "https://shapesandshades.ae/",
  "telephone": "+971545784247",
  "email": "Sales@shapesandshades.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Industrial Area",
    "addressLocality": "Al Ain",
    "addressRegion": "Abu Dhabi",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.1991651,
    "longitude": 55.763479
  },
  "sameAs": [
    "https://www.instagram.com/shapes_n_shades_interiors",
    "https://www.facebook.com/share/1CTPYv18Xd/",
    "https://snapchat.com/t/2mm3iKk8",
    "https://www.tiktok.com/@shapes.and.shades0"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
