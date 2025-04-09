import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import ChatWithUs from "@/components/home/ChatWithUs";

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
  description: "Trusted provider of individual winches, hoists, and lifting equipment. Index Elevator and Index Elevators are your go-to lifting partners.",
  applicationName: "Index Elevators",
  icons: "/index-logo.png",
  robots: "index, follow",
  openGraph: {
    title: "Index Elevators - Lifting & Hoisting Solutions",
    description: "Your trusted partner for reliable lifting and hoisting equipment.",

    url: "https://www.indexelevators.in",
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
    "alternateName": "Index Elevator",
    "url": "https://www.indexelevators.in",
    "description": "Providing top-quality lifting and hoisting solutions including EOT cranes, jib cranes, power winches, and more.",
    "founder": "Gurvinder Singh",
    "logo": "https://www.indexelevators.in/index-logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/indexelevators",
      "https://www.facebook.com/indexelevators"
    ]
  };
  return (
    <html lang="en">
      <head>
      <meta name="image" content="/index-logo.png" />
      <meta name="apple-mobile-web-app-title" content="Index Elevators" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ChatWithUs/>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
