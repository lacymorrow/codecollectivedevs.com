'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GetStartedModal } from '@/components/GetStartedModal';

export default function TechFlowCaseStudy() {
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
          <GetStartedModal
            trigger={
              <Button size="sm" className="bg-zinc-900 hover:bg-zinc-800 text-white">
                Get Started
              </Button>
            }
          />
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
              <span className="text-zinc-900">TechFlow Solutions</span>
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
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">T</span>
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                        TechFlow Solutions
                      </h1>
                      <p className="text-zinc-600">Enterprise Communication Platform</p>
                    </div>
                  </div>
                  <p className="text-xl text-zinc-600 leading-relaxed">
                    How we built a scalable Twilio-powered communication platform that handles over
                    1 million messages daily while reducing operational costs by 40%.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">1M+</div>
                    <div className="text-sm text-zinc-600">Messages/day</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-sm text-zinc-600">Cost reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">99.9%</div>
                    <div className="text-sm text-zinc-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">50ms</div>
                    <div className="text-sm text-zinc-600">Avg response</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Twilio</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/techflow-dashboard.png"
                  alt="TechFlow Communication Dashboard"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl border border-zinc-200"
                />
              </div>
            </div>
            <div className="mt-12">
              <Image
                src="/techflow-hero.png"
                alt="TechFlow Communication Dashboard"
                width={1200}
                height={600}
                className="rounded-xl shadow-2xl border border-zinc-200"
              />
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
                    TechFlow Solutions was struggling with their legacy communication system that
                    couldn't handle their growing customer base. Their existing solution was:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Low message processing capacity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>High infrastructure costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Lack of real-time analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Slow message processing times</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Our Solution</h2>
                <div className="space-y-4 text-zinc-600 leading-relaxed">
                  <p>
                    We designed and built a modern, scalable communication platform using Twilio's
                    enterprise APIs combined with a custom-built management dashboard:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Scalable microservices architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Real-time analytics dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Cost-optimized infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Fast message processing with high uptime</span>
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
                  Results & Impact
                </h2>
                <p className="text-zinc-600 max-w-2xl mx-auto">
                  The new platform delivered significant improvements across all key metrics within
                  the first quarter.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-blue-600">10x</div>
                  <div className="text-sm font-medium text-zinc-900">Message Volume</div>
                  <div className="text-xs text-zinc-600">From 100k to 1M+ daily</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-green-600">40%</div>
                  <div className="text-sm font-medium text-zinc-900">Cost Reduction</div>
                  <div className="text-xs text-zinc-600">$120k annual savings</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-purple-600">60x</div>
                  <div className="text-sm font-medium text-zinc-900">Faster Processing</div>
                  <div className="text-xs text-zinc-600">From 3s to 50ms average</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-orange-600">99.9%</div>
                  <div className="text-sm font-medium text-zinc-900">Uptime</div>
                  <div className="text-xs text-zinc-600">Enterprise SLA compliance</div>
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
                    <div className="text-2xl font-bold text-zinc-900 mb-4">
                      "The transformation has been incredible. We went from constant firefighting to
                      having a platform that just works."
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Image
                      src="/client-1.png"
                      alt="Sarah Chen"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div className="text-center">
                      <div className="font-semibold text-zinc-900">Sarah Chen</div>
                      <div className="text-sm text-zinc-600">CTO, TechFlow Solutions</div>
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
                Ready to scale your communication platform?
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">
                Let's discuss how we can help you build a solution that handles your growing
                business needs.
              </p>
              <GetStartedModal
                trigger={
                  <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">
                    Start Your Project
                  </Button>
                }
              />
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
