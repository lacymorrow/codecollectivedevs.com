import CardSwap, { Card } from '@/components/react-bits/CardSwap';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, MessageSquare, ShoppingCart } from 'lucide-react';

export default function CaseStudies() {
  return (
    <div className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl scroll-animate">
                Trusted by industry leaders
              </h2>
              <p
                className="text-xl text-zinc-600 scroll-animate"
                style={{ animationDelay: '0.1s' }}
              >
                See how we've helped companies scale their digital infrastructure and drive growth.
              </p>
            </div>

            {/* Key highlights */}
            <div className="space-y-6">
              <div className="flex gap-4 scroll-animate" style={{ animationDelay: '0.2s' }}>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 text-lg mb-2">
                    Communication Platforms
                  </h3>
                  <p className="text-zinc-600">
                    Scalable messaging solutions processing millions of messages daily with
                    enterprise-grade reliability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 scroll-animate" style={{ animationDelay: '0.3s' }}>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 text-lg mb-2">E-commerce Solutions</h3>
                  <p className="text-zinc-600">
                    Headless commerce platforms driving millions in revenue with modern, performant
                    storefronts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 scroll-animate" style={{ animationDelay: '0.4s' }}>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 text-lg mb-2">Analytics Dashboards</h3>
                  <p className="text-zinc-600">
                    Real-time data visualization platforms processing massive datasets with machine
                    learning insights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CardSwap Component */}
          <div className="flex justify-center lg:justify-end">
            <div
              style={{
                height: '650px',
                position: 'relative',
                maxWidth: '600px',
                width: '100%',
              }}
            >
              <CardSwap cardDistance={60} verticalDistance={70} delay={6000} pauseOnHover={true}>
                {/* TechFlow - Twilio Communication Platform */}
                <Card>
                  <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 p-8 space-y-6 h-full">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900">TechFlow Solutions</h3>
                        <p className="text-zinc-600 text-sm">Communication Platform</p>
                      </div>
                    </div>

                    <p className="text-zinc-700 leading-relaxed">
                      Built a scalable Twilio-powered communication platform handling over 1 million
                      messages daily while reducing operational costs by 40%.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-blue-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-600">1M+</div>
                        <div className="text-xs text-zinc-600">Messages/day</div>
                      </div>
                      <div className="text-center bg-green-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-600">40%</div>
                        <div className="text-xs text-zinc-600">Cost reduction</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Twilio
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        React
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Node.js
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        AWS
                      </Badge>
                    </div>

                    <Link href="/case-studies/techflow" className="block">
                      <Button variant="outline" className="w-full group">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>

                {/* Artisan - E-commerce Platform */}
                <Card>
                  <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 p-8 space-y-6 h-full">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                        <ShoppingCart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900">Artisan Marketplace</h3>
                        <p className="text-zinc-600 text-sm">E-commerce Platform</p>
                      </div>
                    </div>

                    <p className="text-zinc-700 leading-relaxed">
                      Modern headless e-commerce platform using Swell that processes $2M+ in monthly
                      transactions and increased sales by 60%.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-green-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-600">$2M+</div>
                        <div className="text-xs text-zinc-600">Monthly GMV</div>
                      </div>
                      <div className="text-center bg-blue-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-600">60%</div>
                        <div className="text-xs text-zinc-600">Sales increase</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Swell
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Stripe
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Vercel
                      </Badge>
                    </div>

                    <Link href="/case-studies/artisan" className="block">
                      <Button variant="outline" className="w-full group">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>

                {/* DataSync - Analytics Dashboard */}
                <Card>
                  <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 p-8 space-y-6 h-full">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900">DataSync Corp</h3>
                        <p className="text-zinc-600 text-sm">Analytics Platform</p>
                      </div>
                    </div>

                    <p className="text-zinc-700 leading-relaxed">
                      Enterprise analytics platform processing 100GB+ of data daily, delivering
                      real-time insights 10x faster than previous solutions.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-purple-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-purple-600">100GB+</div>
                        <div className="text-xs text-zinc-600">Daily data</div>
                      </div>
                      <div className="text-center bg-blue-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-600">10x</div>
                        <div className="text-xs text-zinc-600">Faster insights</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        React
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        D3.js
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        PostgreSQL
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Redis
                      </Badge>
                    </div>

                    <Link href="/case-studies/datasync" className="block">
                      <Button variant="outline" className="w-full group">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
