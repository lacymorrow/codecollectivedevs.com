import type { Metadata, Viewport } from 'next';
import './globals.css';
import React from 'react';
import { QueryProvider } from '@/components/providers/query-provider';
import { GoogleAnalytics } from '@/components/analytics';
import { BASE_URL } from '@/lib/base-url';

const siteName = 'Code Collective';
const siteUrl = BASE_URL;
const description =
  'Expert web development agency specializing in modern, high-performance applications. We deliver enterprise-grade solutions with 95+ Lighthouse scores, perfect SEO, and exceptional user experiences.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Expert Web Development Agency`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    'web development agency',
    'react development',
    'next.js development',
    'enterprise web applications',
    'full-stack development',
    'API integrations',
    'e-commerce development',
    'performance optimization',
    'SEO optimization',
    'web accessibility',
    'custom software development',
    'digital transformation',
    'typescript development',
    'headless commerce',
    'progressive web apps',
  ],
  authors: [{ name: 'Lacy Morrow', url: siteUrl }],
  creator: 'Code Collective',
  publisher: 'Code Collective',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: `${siteName} - Expert Web Development Agency`,
    description,
    images: [
      {
        url: '/code-collective-hero.png',
        width: 1200,
        height: 630,
        alt: 'Code Collective - Expert Web Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Expert Web Development Agency`,
    description,
    images: ['/code-collective-hero.png'],
    creator: '@codecollective',
  },
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
  classification: 'business',
  other: {
    'theme-color': '#ffffff',
    'color-scheme': 'light',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': siteName,
    'application-name': siteName,
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/mstile-144x144.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteName,
              description: description,
              url: siteUrl,
              logo: `${siteUrl}/code-collective-logo.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['English'],
              },
              sameAs: [
                'https://github.com/codecollectivedevs',
                'https://linkedin.com/company/codecollectivedevs',
              ],
              foundingDate: '2023',
              founder: {
                '@type': 'Person',
                name: 'Lacy Morrow',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              areaServed: 'Worldwide',
              serviceType: [
                'Web Development',
                'Software Development',
                'API Integration',
                'E-commerce Development',
                'Performance Optimization',
              ],
            }),
          }}
        />
      </head>
      <body className="relative">
        {/* Strong, visible grayscale vignette overlay, always on top of backgrounds */}
        <div
          className="pointer-events-none absolute inset-0 z-50 w-full h-full"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,16,32,0.25) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,16,32,0.25) 100%)',
          }}
        />
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
        </div>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
