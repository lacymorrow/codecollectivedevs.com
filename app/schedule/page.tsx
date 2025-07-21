'use client';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CalEmbed = dynamic(() => import('@calcom/embed-react'), { ssr: false });

export default function SchedulePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-700 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 relative">
        <h1 className="text-3xl font-bold text-center mb-6 text-zinc-900">Schedule a Call</h1>
        <CalEmbed
          calLink="lacymorrow/code-collective"
          style={{ width: '100%', height: 600, minHeight: 500, border: 0 }}
          config={{ layout: 'month_view' }}
        />
        <div className="mt-6 flex justify-center">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
