'use client';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const CalEmbed = dynamic(() => import('@calcom/embed-react'), { ssr: false });

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between">
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
          <Button asChild size="sm">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <CalEmbed calLink="lazytanuki/30min" />
        </Suspense>
      </main>
    </div>
  );
}
