'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GetStartedModal } from '@/components/GetStartedModal';

export default function DataSyncCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
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
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#solutions"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/#case-studies"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              Pricing
            </Link>
          </nav>
          <Suspense
            fallback={
              <Button size="sm" disabled>
                Get Started
              </Button>
            }
          >
            <GetStartedModal
              trigger={
                <Button size="sm" className="bg-zinc-900 hover:bg-zinc-800 text-white">
                  Get Started
                </Button>
              }
            />
          </Suspense>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="w-full py-6 border-b border-zinc-100">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Link href="/" className="hover:text-zinc-900 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/#case-studies" className="hover:text-zinc-900 transition-colors">
                Case Studies
              </Link>
              <span>/</span>
              <span className="text-zinc-900">DataSync Corp</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                        DataSync Corp
                      </h1>
                      <p className="text-zinc-600">Real-time Analytics Dashboard</p>
                    </div>
                  </div>
                  <p className="text-xl text-zinc-600 leading-relaxed">
                    How we built an enterprise analytics platform that processes 100GB+ of data
                    daily, delivering real-time insights 10x faster than their previous solution.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">100GB+</div>
                    <div className="text-sm text-zinc-600">Daily data</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">10x</div>
                    <div className="text-sm text-zinc-600">Faster insights</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Real-time</div>
                    <div className="text-sm text-zinc-600">Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">500+</div>
                    <div className="text-sm text-zinc-600">Daily users</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">D3.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">WebSocket</Badge>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/datasync-dashboard.png"
                  alt="DataSync Analytics Dashboard"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl border border-zinc-200"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="w-full py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">The Challenge</h2>
                <div className="space-y-4 text-zinc-600 leading-relaxed">
                  <p>
                    DataSync Corp was struggling with their legacy reporting system that couldn't
                    keep up with their growing data needs. The existing solution had critical
                    limitations:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Reports took 2-3 hours to generate, making real-time decisions impossible
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Limited to 10GB daily data processing capacity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Static dashboards with no interactive capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No predictive analytics or machine learning insights</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Our Solution</h2>
                <div className="space-y-4 text-zinc-600 leading-relaxed">
                  <p>
                    We built a real-time data synchronization dashboard using Next.js, WebSockets,
                    and a high-performance database cluster. Our solution provided:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Sub-second data updates across all connected clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Customizable dashboard with real-time charts and alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>99.9% uptime with automated failover and recovery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Secure data handling with end-to-end encryption</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="w-full py-16">
          <div className="container px-4 md:px-6">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                  Key Performance Metrics
                </h2>
                <p className="text-zinc-600 max-w-2xl mx-auto">
                  The new platform handles massive data loads with exceptional reliability and
                  performance.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-green-600">1M+</div>
                  <div className="text-sm font-medium text-zinc-900">Data Points Daily</div>
                  <div className="text-xs text-zinc-600">Processed in real-time</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-blue-600">&lt;500ms</div>
                  <div className="text-sm font-medium text-zinc-900">Update Latency</div>
                  <div className="text-xs text-zinc-600">Across all clients</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm font-medium text-zinc-900">Uptime</div>
                  <div className="text-xs text-zinc-600">Guaranteed by SLA</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-orange-600">10k</div>
                  <div className="text-sm font-medium text-zinc-900">Active Users</div>
                  <div className="text-xs text-zinc-600">Monitoring data feeds</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="w-full py-16 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <Card className="border-0 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="text-center">
                    <blockquote className="text-2xl font-bold text-zinc-900 mb-4">
                      "Code Collective delivered a flawless solution that has become
                      mission-critical for our operations. Their expertise is unmatched."
                    </blockquote>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Image
                      src="/client-3.png"
                      alt="Elena Petrova"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div className="text-center">
                      <div className="font-semibold text-zinc-900">Elena Petrova</div>
                      <div className="text-sm text-zinc-600">CTO, DataSync</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 bg-zinc-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">
                Need a high-performance data solution?
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">
                Let&apos;s talk about how we can build a custom dashboard to meet your data needs.
              </p>
              <Suspense
                fallback={
                  <Button size="lg" disabled>
                    Get a Custom Quote
                  </Button>
                }
              >
                <GetStartedModal
                  trigger={
                    <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">
                      Get a Custom Quote
                    </Button>
                  }
                />
              </Suspense>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200 bg-white py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-3">
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
            </div>
            <p className="text-zinc-600 text-sm">
              Enterprise web development solutions that scale with your business.
            </p>
          </div>
          <div className="mt-6 border-t border-zinc-200 pt-4 text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Code Collective. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
