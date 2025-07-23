import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Monitor,
  Layers,
  ShoppingCart,
  GaugeIcon,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Search,
  BarChart,
} from 'lucide-react';
import { HeroSection } from '@/components/blocks/hero-section-1';
import CaseStudies from '@/components/blocks/case-studies';
import { GetStartedModal } from '@/components/GetStartedModal';
import { ScheduleCallModal } from '@/components/ScheduleCallModal';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Expert Web Development Agency - Code Collective',
  description:
    'Transform your business with enterprise-grade web applications. We deliver 95+ Lighthouse scores, perfect SEO, and exceptional user experiences. Led by expert developer Lacy Morrow.',
  openGraph: {
    title: 'Expert Web Development Agency - Code Collective',
    description:
      'Transform your business with enterprise-grade web applications. We deliver 95+ Lighthouse scores, perfect SEO, and exceptional user experiences.',
    type: 'website',
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
    title: 'Expert Web Development Agency - Code Collective',
    description:
      'Transform your business with enterprise-grade web applications. We deliver 95+ Lighthouse scores, perfect SEO, and exceptional user experiences.',
    images: ['/code-collective-hero.png'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Web Development',
            provider: {
              '@type': 'Organization',
              name: 'Code Collective',
              founder: 'Lacy Morrow',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Web Development Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Full-Stack Application Development',
                    description: 'Custom React, Next.js, and Node.js applications',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'API Integration Services',
                    description: 'Connect enterprise systems with third-party APIs',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'E-commerce Development',
                    description: 'Headless commerce solutions with modern frameworks',
                  },
                },
              ],
            },
          }),
        }}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white">
          <HeroSection />
        </section>

        {/* Lighthouse Performance Section */}
        <section id="lighthouse-performance" className="w-full py-20 md:py-32 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 items-center max-w-7xl mx-auto">
              {/* Left: Content */}
              <div className="space-y-8 text-center items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-zinc-200 scroll-animate">
                    <BarChart className="h-4 w-4 text-violet-600" />
                    <span className="text-sm font-medium text-zinc-700">
                      Lighthouse Performance
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 scroll-animate">
                    Performance that drives results
                  </h2>
                  <p
                    className="text-xl text-zinc-600 leading-relaxed scroll-animate"
                    style={{ animationDelay: '0.1s' }}
                  >
                    We don&apos;t just build websites—we engineer performance machines. Every site
                    we deliver achieves 95+ Lighthouse scores across performance, SEO, and
                    accessibility.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-6 mx-auto">
                  <div
                    className="flex flex-col items-center text-center gap-4 scroll-animate"
                    style={{ animationDelay: '0.2s' }}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 text-lg mb-2">
                        Sub-Second Load Times
                      </h3>
                      <p className="text-zinc-600">
                        Consistently deliver &lt;1s load times that boost conversions by 15% and
                        reduce bounce rates by 32%.
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-col items-center text-center gap-4 scroll-animate"
                    style={{ animationDelay: '0.3s' }}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 text-lg mb-2">SEO Optimization</h3>
                      <p className="text-zinc-600">
                        Perfect Core Web Vitals, structured data, and technical SEO that ranks your
                        site higher in search results.
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-col items-center text-center gap-4 scroll-animate"
                    style={{ animationDelay: '0.4s' }}
                  >
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 text-lg mb-2">
                        Accessibility First
                      </h3>
                      <p className="text-zinc-600">
                        WCAG 2.1 AA compliance ensures your site is usable by everyone, expanding
                        your reach and improving user satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section id="enterprise" className="w-full py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8 text-center">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Badge variant="secondary" className="bg-zinc-200 text-zinc-700 scroll-animate">
                      Enterprise Ready
                    </Badge>
                  </div>
                  <h2
                    className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl scroll-animate"
                    style={{ animationDelay: '0.1s' }}
                  >
                    Built for enterprise scale and security
                  </h2>
                  <p
                    className="text-xl text-zinc-600 leading-relaxed scroll-animate"
                    style={{ animationDelay: '0.2s' }}
                  >
                    Our solutions meet the highest standards for security, compliance, and
                    performance that enterprise organizations require.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 text-left max-w-2xl mx-auto">
                  <div className="flex gap-3 scroll-animate" style={{ animationDelay: '0.3s' }}>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">SOC 2 Compliant</h3>
                      <p className="text-sm text-zinc-600">
                        Enterprise-grade security and compliance standards
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 scroll-animate" style={{ animationDelay: '0.4s' }}>
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">99.9% Uptime</h3>
                      <p className="text-sm text-zinc-600">
                        Guaranteed availability with comprehensive monitoring
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 scroll-animate" style={{ animationDelay: '0.5s' }}>
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">Dedicated Support</h3>
                      <p className="text-sm text-zinc-600">
                        24/7 technical support with dedicated account management
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 scroll-animate" style={{ animationDelay: '0.6s' }}>
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GaugeIcon className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">Performance SLA</h3>
                      <p className="text-sm text-zinc-600">
                        Sub-second response times with global CDN
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="w-full py-20 md:py-32 bg-zinc-50">
          <CaseStudies />
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl scroll-animate">
                Transparent, scalable pricing
              </h2>
              <p
                className="text-xl text-zinc-600 scroll-animate"
                style={{ animationDelay: '0.1s' }}
              >
                From startups to enterprise, we have a solution that scales with your business
                needs.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 scroll-animate">
                <CardHeader className="pb-8">
                  <CardTitle className="text-xl text-zinc-900">Starter</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">$4,999</span>
                    <span className="text-zinc-500">per project</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Suspense
                    fallback={
                      <Button className="w-full" variant="outline" disabled>
                        Get Started
                      </Button>
                    }
                  >
                    <GetStartedModal
                      trigger={
                        <Button className="w-full bg-transparent" variant="outline">
                          Get Started
                        </Button>
                      }
                    />
                  </Suspense>
                </CardFooter>
              </Card>

              <Card
                className="border-2 border-zinc-900 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative scroll-animate"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-zinc-900 text-white">Most Popular</Badge>
                </div>
                <CardHeader className="pb-8 pt-8">
                  <CardTitle className="text-xl text-zinc-900">Professional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">$12,999</span>
                    <span className="text-zinc-500">per project</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-zinc-900 hover:bg-zinc-800">Get Started</Button>
                </CardFooter>
              </Card>

              <Card
                className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 scroll-animate"
                style={{ animationDelay: '0.2s' }}
              >
                <CardHeader className="pb-8">
                  <CardTitle className="text-xl text-zinc-900">Enterprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">Custom</span>
                  </div>
                  <p className="text-sm text-zinc-500 mt-1">Starting at $25,000</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-transparent" variant="outline">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <div className="space-y-4">
                <div className="flex justify-center scroll-animate">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                    Ready to get started?
                  </h2>
                </div>
                <p
                  className="text-xl text-zinc-600 scroll-animate"
                  style={{ animationDelay: '0.1s' }}
                >
                  Let&apos;s build something extraordinary together.
                </p>
              </div>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate"
                style={{ animationDelay: '0.2s' }}
              >
                <Suspense
                  fallback={
                    <Button size="lg" disabled>
                      Start your project
                    </Button>
                  }
                >
                  <GetStartedModal
                    trigger={
                      <Button
                        size="lg"
                        className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 transition-transform hover:scale-105"
                      >
                        Start your project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    }
                  />
                </Suspense>
                <Suspense
                  fallback={
                    <Button variant="outline" size="lg" disabled>
                      Schedule a call
                    </Button>
                  }
                >
                  <ScheduleCallModal
                    trigger={
                      <Button
                        variant="outline"
                        size="lg"
                        className="px-8 bg-transparent transition-transform hover:scale-105"
                      >
                        Schedule a call
                      </Button>
                    }
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200 bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
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
            <p className="text-zinc-600 max-w-md">
              Enterprise web development solutions that scale with your business. Led by Lacy
              Morrow.
            </p>
          </div>
          <div className="mt-8 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Code Collective. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
