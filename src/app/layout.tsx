import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Index Elevators | Lifting & Hoisting Solutions – EOT Cranes, Hoists, Winches",
  description: "Trusted provider of individual winches, hoists, and lifting equipments.",
  applicationName: "Index Elevators",
  icons: "/index-logo.png",
  robots: "index, follow",
  openGraph: {
    title: "Index Elevators - Lifting & Hoisting Solutions",
    description: "Your trusted partner for reliable lifting and hoisting equipment.",

    url: "https://www.indexelevators.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Index Elevators",
    "url": "https://www.indexelevators.com",
    "description": "Providing top-quality lifting and hoisting solutions including EOT cranes, jib cranes, power winches, and more.",
    "founder": "Gurvinder Singh",
    "sameAs": [
      "https://www.linkedin.com/company/indexelevators",
      "https://www.facebook.com/indexelevators"
    ]
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
