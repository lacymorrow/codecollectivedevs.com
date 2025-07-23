'use client';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GetStartedModal } from '@/components/GetStartedModal';

export default function ArtisanCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Structured Data for Case Study */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Artisan Storefront Case Study',
            description:
              'How we built a modern e-commerce storefront for Artisan using headless commerce',
            image: '/artisan-storefront.png',
            author: {
              '@type': 'Organization',
              name: 'Code Collective',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Code Collective',
              logo: {
                '@type': 'ImageObject',
                url: '/code-collective-logo.png',
              },
            },
            datePublished: '2023-01-01',
            dateModified: new Date().toISOString(),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://codecollectivedevs.com/case-studies/artisan',
            },
          }),
        }}
      />

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
              <span className="text-zinc-900">Artisan Marketplace</span>
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
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                        Artisan Marketplace
                      </h1>
                      <p className="text-zinc-600">Headless E-commerce Platform</p>
                    </div>
                  </div>
                  <p className="text-xl text-zinc-600 leading-relaxed">
                    How we built a modern headless e-commerce platform using Swell that processes
                    over $2M in monthly transactions and increased sales by 60% in the first
                    quarter.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$2M+</div>
                    <div className="text-sm text-zinc-600">Monthly GMV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">60%</div>
                    <div className="text-sm text-zinc-600">Sales increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2.3s</div>
                    <div className="text-sm text-zinc-600">Page load time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">15k</div>
                    <div className="text-sm text-zinc-600">Active customers</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Swell</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/artisan-storefront.png"
                  alt="Artisan Marketplace Storefront"
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
                    Artisan Marketplace was running on a legacy e-commerce platform that was
                    limiting their growth potential. Their existing system had several critical
                    issues:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Slow page load times (8+ seconds) causing high bounce rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Limited customization options for the storefront design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Poor mobile experience with low conversion rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Difficulty managing inventory across multiple sales channels</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Our Solution</h2>
                <div className="space-y-4 text-zinc-600 leading-relaxed">
                  <p>
                    We implemented a modern headless e-commerce solution using Swell as the backend
                    and a custom Next.js frontend optimized for performance and user experience:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Lightning-fast storefront with 2.3s average page load times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Fully custom design system with advanced product filtering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Mobile-first responsive design with 98/100 mobile score</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Integrated inventory management across all sales channels</span>
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
                  Measurable Results
                </h2>
                <p className="text-zinc-600 max-w-2xl mx-auto">
                  The new platform delivered exceptional results across all key performance
                  indicators within 90 days.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-green-600">60%</div>
                  <div className="text-sm font-medium text-zinc-900">Revenue Increase</div>
                  <div className="text-xs text-zinc-600">First quarter post-launch</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-blue-600">4.2%</div>
                  <div className="text-sm font-medium text-zinc-900">Conversion Rate</div>
                  <div className="text-xs text-zinc-600">Up from 1.8% previously</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-purple-600">70%</div>
                  <div className="text-sm font-medium text-zinc-900">Faster Load Times</div>
                  <div className="text-xs text-zinc-600">From 8s to 2.3s average</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-orange-600">150%</div>
                  <div className="text-sm font-medium text-zinc-900">Customer Growth</div>
                  <div className="text-xs text-zinc-600">15k active customers</div>
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
                      "The new platform exceeded all our expectations. We&apos;ve seen incredible
                      growth and our customers love the experience."
                    </blockquote>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Image
                      src="/client-2.png"
                      alt="Marcus Rodriguez"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div className="text-center">
                      <div className="font-semibold text-zinc-900">Marcus Rodriguez</div>
                      <div className="text-sm text-zinc-600">Founder, Artisan Marketplace</div>
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
                Ready to transform your e-commerce platform?
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help you build a modern, high-performing e-commerce
                solution.
              </p>
              <Suspense
                fallback={
                  <Button size="lg" disabled>
                    Start Your Project
                  </Button>
                }
              >
                <GetStartedModal
                  trigger={
                    <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">
                      Start Your Project
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
