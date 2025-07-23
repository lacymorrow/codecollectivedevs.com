'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white">
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/code-collective-logo.png"
                alt="Code Collective"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-semibold tracking-tight text-zinc-900">
                Code Collective
              </span>
            </Link>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-md text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-red-600">500</h1>
              <h2 className="text-2xl font-semibold text-zinc-800">Something went wrong</h2>
              <p className="text-zinc-600">
                We're experiencing some technical difficulties. Please try again.
              </p>
              {process.env.NODE_ENV === 'development' && (
                <details className="mt-4 text-left">
                  <summary className="cursor-pointer text-sm font-medium text-zinc-700">
                    Error Details
                  </summary>
                  <pre className="mt-2 text-xs text-red-600 overflow-auto">{error.message}</pre>
                </details>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={reset}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Try again
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go home
                </Link>
              </Button>
            </div>
          </div>
        </main>

        <footer className="w-full border-t border-zinc-200 bg-white py-8">
          <div className="container mx-auto px-4 text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Code Collective. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
