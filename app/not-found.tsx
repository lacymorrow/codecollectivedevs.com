import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
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
            <h1 className="text-6xl font-bold text-zinc-900">404</h1>
            <h2 className="text-2xl font-semibold text-zinc-800">Page not found</h2>
            <p className="text-zinc-600">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back
            </Button>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-zinc-200 bg-white py-8">
        <div className="container mx-auto px-4 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Code Collective. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
