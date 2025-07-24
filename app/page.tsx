'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
} from 'lucide-react';
import { HeroSection } from '@/components/blocks/hero-section-1';
import { GetStartedModal } from '@/components/GetStartedModal';
import { ScheduleCallModal } from '@/components/ScheduleCallModal';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Image
                src="/code-collective-logo.png"
                alt="Code Collective"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold text-zinc-900">Code Collective</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#pricing" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Pricing
              </a>
              <a href="#footer" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                About
              </a>
              <GetStartedModal
                trigger={
                  <Button size="sm" className="bg-zinc-900 hover:bg-zinc-800">
                    Get Started
                  </Button>
                }
              />
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white">
          <HeroSection />
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
                  <p className="text-sm text-zinc-600 mt-2">Perfect for small businesses</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">$4,999</span>
                    <span className="text-zinc-500">per project</span>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>5-page custom website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Mobile responsive design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Basic SEO optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>2 weeks delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>30 days of support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <GetStartedModal
                    trigger={
                  <Button className="w-full bg-transparent" variant="outline">
                    Get Started
                  </Button>
                    }
                  />
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
                  <p className="text-sm text-zinc-600 mt-2">For growing companies</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">$12,999</span>
                    <span className="text-zinc-500">per project</span>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>10-page custom website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Custom animations & interactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Advanced SEO & performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>CMS integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>3 weeks delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>90 days of support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <GetStartedModal
                    trigger={
                  <Button className="w-full bg-zinc-900 hover:bg-zinc-800">Get Started</Button>
                    }
                  />
                </CardFooter>
              </Card>

              <Card
                className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 scroll-animate"
                style={{ animationDelay: '0.2s' }}
              >
                <CardHeader className="pb-8">
                  <CardTitle className="text-xl text-zinc-900">Enterprise</CardTitle>
                  <p className="text-sm text-zinc-600 mt-2">For large organizations</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">Custom</span>
                  </div>
                  <p className="text-sm text-zinc-500 mt-1">Starting at $25,000</p>
                  <ul className="space-y-3 text-sm mt-4">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Unlimited pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Custom web applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>API integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Dedicated team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>SLA guarantee</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <ScheduleCallModal
                    trigger={
                  <Button className="w-full bg-transparent" variant="outline">
                    Contact Sales
                  </Button>
                    }
                  />
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
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 scroll-animate">
                  Ready to launch your next project?
                </h2>
                <p
                  className="text-xl text-zinc-600 scroll-animate"
                  style={{ animationDelay: '0.1s' }}
                >
                  Join 100+ companies who chose quality over quantity. No retainers, no surprises, just results.
                </p>
              </div>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate"
                style={{ animationDelay: '0.2s' }}
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
                <ScheduleCallModal
                  trigger={
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 bg-transparent transition-transform hover:scale-105"
                >
                  Book a 15-min call
                </Button>
                  }
                />
              </div>
              <p className="text-sm text-zinc-500 mt-8">
                No spam, no sales pitch. Just a conversation about your project.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="w-full border-t border-zinc-200 bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
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
              <p className="text-zinc-600 max-w-md mb-4">
                Enterprise web development solutions that scale with your business. Led by Lacy
                Morrow.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/lacymorrow" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/lacymorrow" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-zinc-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#pricing" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <GetStartedModal
                    trigger={
                      <button className="text-zinc-600 hover:text-zinc-900 transition-colors text-left">
                        Get Started
                      </button>
                    }
                  />
                </li>
                <li>
                  <ScheduleCallModal
                    trigger={
                      <button className="text-zinc-600 hover:text-zinc-900 transition-colors text-left">
                        Schedule a Call
                      </button>
                    }
                  />
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-zinc-900 mb-4">Contact</h3>
              <ul className="space-y-2 text-zinc-600">
                <li>
                  <a href="mailto:hello@codecollectivedevs.com" className="hover:text-zinc-900 transition-colors">
                    hello@codecollectivedevs.com
                  </a>
                </li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Code Collective. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
