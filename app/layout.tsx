import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AtomIcon, Menu, X } from "lucide-react";
import { HeroHeader } from "@/components/blocks/hero-header";
import { QueryProvider } from "@/components/providers/query-provider";

const siteUrl = "https://codecollective.dev";
const siteName = "Code Collective";
const description = "Elite web development agency specializing in high-performance applications, API integrations, and enterprise solutions. Led by Lacy Morrow, we deliver scalable digital solutions that drive business growth.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Elite Web Development Agency`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "web development",
    "software development",
    "API integration",
    "enterprise solutions",
    "React development",
    "Next.js development",
    "TypeScript development",
    "full-stack development",
    "performance optimization",
    "SEO optimization",
    "e-commerce development",
    "SaaS development",
    "digital transformation",
    "Lacy Morrow",
    "software consultant",
    "web applications",
    "custom software",
    "Twilio integration",
    "Stripe integration",
    "headless commerce",
    "Swell commerce",
    "progressive web apps",
    "mobile-first design",
    "accessibility",
    "WCAG compliance",
    "performance audits",
    "Lighthouse optimization",
    "Core Web Vitals",
  ],
  authors: [{ name: "Lacy Morrow", url: "https://lacymorrow.com" }],
  creator: "Lacy Morrow",
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${siteName} - Elite Web Development Agency`,
    description,
    siteName,
    images: [
      {
        url: "/code-collective-hero.png",
        width: 1200,
        height: 630,
        alt: `${siteName} - Elite Web Development Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Elite Web Development Agency`,
    description,
    images: ["/code-collective-hero.png"],
    creator: "@lacymorrow",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
  classification: "Business",
  other: {
    'application-name': siteName,
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/code-collective-logo.png`,
          width: 512,
          height: 512,
        },
        description,
        founder: {
          "@type": "Person",
          name: "Lacy Morrow",
          url: "https://lacymorrow.com",
          jobTitle: "Founder & Lead Developer",
          worksFor: {
            "@type": "Organization",
            name: siteName,
          },
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Business",
          email: "hello@codecollective.dev",
          availableLanguage: "English",
        },
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
        serviceType: [
          "Web Development",
          "Software Development",
          "API Integration",
          "Performance Optimization",
          "SEO Optimization",
          "E-commerce Development",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "API Development",
          "Performance Optimization",
          "SEO",
          "E-commerce",
          "Enterprise Solutions",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: `${siteName} - Elite Web Development Agency`,
        description,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        datePublished: "2024-01-01T00:00:00+00:00",
        dateModified: new Date().toISOString(),
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service`,
        name: "Web Development Services",
        description: "Elite web development services including full-stack applications, API integrations, and enterprise solutions",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        serviceType: "Web Development",
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full-Stack Development",
                description: "Complete web application development using modern technologies",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "API Integration",
                description: "Custom API development and third-party integrations",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Performance Optimization",
                description: "Website performance audits and optimization for better user experience",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={cn("min-h-screen bg-background antialiased")}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
