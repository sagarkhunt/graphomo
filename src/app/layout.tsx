import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#f9fbf5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Graphomo — Creative Logo Design & Brand Identity Studio",
    template: "%s | Graphomo Studio",
  },
  description:
    "Graphomo is a premium independent logo design and brand identity studio. We engineer custom logos, visual identity systems, and brand guidelines that bring your vision to life.",
  keywords: [
    "Logo Designer",
    "Custom Logo Design",
    "Brand Identity Studio",
    "Luxury Branding",
    "Minimal Logo",
    "Startup Branding",
    "Business Logo Design",
    "Graphomo",
    "Typography Logo",
    "Brand Guidelines"
  ],
  authors: [{ name: "Sagar Khunt", url: "https://graphomo.com" }],
  creator: "Graphomo Studio",
  metadataBase: new URL("https://graphomo.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://graphomo.com",
    siteName: "Graphomo Studio",
    title: "Graphomo — Creative Logo Design & Brand Identity Studio",
    description:
      "Bringing Your Vision To Life. Bespoke logo design and timeless visual branding for ambitious companies.",
    images: [
      {
        url: "/brand/graphomo-main-logo.png",
        width: 1200,
        height: 630,
        alt: "Graphomo — Bringing Your Vision To Life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphomo — Creative Logo Design & Brand Identity Studio",
    description: "Bringing Your Vision To Life through custom logo marks and visual identity systems.",
    images: ["/brand/graphomo-main-logo.png"],
  },
  icons: {
    icon: "/brand/graphomo-submark.png",
    shortcut: "/brand/graphomo-submark.png",
    apple: "/brand/graphomo-submark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased selection:bg-[#f3cc0c] selection:text-[#111215]">
      <body className="min-h-full flex flex-col bg-[#f9fbf5] text-[#141416]">
        <Header />
        <main className="flex-1 pt-20 sm:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
