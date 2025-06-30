import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AtomIcon, Menu, X } from "lucide-react";
import { HeroHeader } from "@/components/blocks/hero-header";
import { QueryProvider } from "@/components/providers/query-provider";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <HeroHeader /> */}
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
