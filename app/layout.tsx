import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { QueryProvider } from '@/components/providers/query-provider';

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Strong, visible grayscale vignette overlay, always on top of backgrounds */}
        <div className="pointer-events-none absolute inset-0 z-50 w-full h-full" style={{
          background: 'linear-gradient(90deg, rgba(0,16,32,0.25) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,16,32,0.25) 100%)'
        }} />
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
        </div>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
