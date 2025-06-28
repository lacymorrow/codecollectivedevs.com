"use client";

import { Booker } from "@calcom/atoms";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  TrendingUp,
} from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { AppleHelloEnglishEffect } from "@/components/apple-hello";
import DisplayCards from "@/components/display-card";
import SectionWithMockup from "@/components/section-with-mockup";
import { useRef, useState, useEffect } from "react";
import InteractiveCalendar from "@/components/visualize-booking";
import { Gauge } from "@/components/ui/gauge";
import { DotLoader } from "@/components/dot-loader";
import { HeroSection } from "@/components/blocks/hero-section-1";

const enterpriseCards = [
  {
    icon: <Monitor className="size-4 text-violet-300" />,
    title: "Full-Stack Apps",
    description: "Performance-driven applications",
    date: "React, Next.js, Node.js",
    iconClassName: "bg-violet-800",
    titleClassName: "text-violet-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Layers className="size-4 text-blue-300" />,
    title: "API Integrations",
    description: "Connecting enterprise systems",
    date: "Twilio, Stripe, Salesforce",
    iconClassName: "bg-blue-800",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <ShoppingCart className="size-4 text-green-300" />,
    title: "E-commerce",
    description: "Headless commerce solutions",
    date: "Swell, Shopify Plus",
    iconClassName: "bg-green-800",
    titleClassName: "text-green-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

const exampleData1 = {
  title: (
    <>
      Intelligence,
      <br />
      delivered to you.
    </>
  ),
  description: (
    <>
      Get a tailored Monday morning brief directly in
      <br />
      your inbox, crafted by your virtual personal
      <br />
      analyst, spotlighting essential watchlist stories
      <br />
      and earnings for the week ahead.
    </>
  ),
  primaryImageSrc:
    "https://www.fey.com/marketing/_next/static/media/newsletter-desktop-2_4x.e594b737.png",
  secondaryImageSrc:
    "https://www.fey.com/marketing/_next/static/media/newsletter-desktop-1_4x.9cc114e6.png",
};

const dotLoaderFrames = [
  [0, 7, 14, 21, 28, 35, 42], // Diagonal 1
  [1, 8, 15, 22, 29, 36, 43], // Diagonal 2
  [2, 9, 16, 23, 30, 37, 44], // Diagonal 3
  [3, 10, 17, 24, 31, 38, 45], // Diagonal 4 (center)
  [4, 11, 18, 25, 32, 39, 46], // Diagonal 5
  [5, 12, 19, 26, 33, 40, 47], // Diagonal 6
  [6, 13, 20, 27, 34, 41, 48], // Diagonal 7
  [48, 41, 34, 27, 20, 13, 6], // Reverse Diagonal 7
  [47, 40, 33, 26, 19, 12, 5], // Reverse Diagonal 6
  [46, 39, 32, 25, 18, 11, 4], // Reverse Diagonal 5
];

export default function LandingPage() {
  const transparencyRef = useRef<HTMLDivElement>(null);
  const [showMoreCalendar, setShowMoreCalendar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMoreCalendar(true);
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the section is visible
      },
    );

    if (transparencyRef.current) {
      observer.observe(transparencyRef.current);
    }

    return () => {
      if (transparencyRef.current) {
        observer.unobserve(transparencyRef.current);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
          <HeroSection />
        </section>

        {/* Partners Section */}
        <section className="w-full py-16 md:py-24 overflow-hidden bg-zinc-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 max-w-6xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-50 scroll-animate">
                  Powered by the AI & Development vanguard
                </h2>
                <p
                  className="text-zinc-400 max-w-2xl mx-auto scroll-animate"
                  style={{ animationDelay: "0.1s" }}
                >
                  We leverage the best tools and platforms to deliver
                  exceptional results for our clients.
                </p>
              </div>

              <div
                className="group scroll-animate"
                style={{ animationDelay: "0.2s" }}
              >
                {/* First Marquee - Left to Right */}
                <div className="relative">
                  <div className="flex overflow-hidden">
                    <div className="flex animate-marquee-left group-hover:pause whitespace-nowrap">
                      {Array.from({ length: 3 }).map((_, setIndex) => (
                        <div key={setIndex} className="flex space-x-8 mr-8">
                          {[
                            { name: "Claude AI", src: "/logos/claude.png" },
                            { name: "Gemini", src: "/logos/gemini.png" },
                            { name: "OpenAI", src: "/logos/openai.png" },
                            { name: "Windsurf", src: "/logos/windsurf.png" },
                            { name: "Cursor", src: "/logos/cursor.png" },
                            { name: "VS Code", src: "/logos/vscode.png" },
                            { name: "Bolt", src: "/logos/bolt.png" },
                            { name: "GitHub", src: "/logos/github.png" },
                            { name: "Figma", src: "/logos/figma.png" },
                          ].map((logo) => (
                            <div
                              key={logo.name}
                              className="group/item relative flex-shrink-0"
                            >
                              <div className="w-16 h-16 bg-zinc-800 rounded-lg shadow-sm border border-zinc-700 flex items-center justify-center hover:shadow-lg hover:border-violet-500 transition-all duration-300">
                                <Image
                                  src={logo.src || "/placeholder.svg"}
                                  alt={logo.name}
                                  width={40}
                                  height={40}
                                  className="opacity-70 group-hover/item:opacity-100 transition-opacity"
                                />
                              </div>
                              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 z-20">
                                <span className="text-xs text-zinc-200 bg-zinc-700 px-2 py-1 rounded shadow-lg border border-zinc-600 whitespace-nowrap">
                                  {logo.name}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none z-10"></div>
                  <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none z-10"></div>
                </div>

                {/* Second Marquee - Right to Left */}
                <div className="relative mt-8">
                  <div className="flex overflow-hidden">
                    <div className="flex animate-marquee-right group-hover:pause whitespace-nowrap">
                      {Array.from({ length: 4 }).map((_, setIndex) => (
                        <div key={setIndex} className="flex space-x-8 mr-8">
                          {[
                            { name: "React", src: "/logos/react.png" },
                            { name: "Next.js", src: "/logos/nextjs.png" },
                            {
                              name: "TypeScript",
                              src: "/logos/typescript.png",
                            },
                            { name: "Tailwind", src: "/logos/tailwind.png" },
                            { name: "Vercel", src: "/logos/vercel.png" },
                            { name: "Stripe", src: "/logos/stripe.png" },
                            { name: "AWS", src: "/logos/aws.png" },
                            { name: "Supabase", src: "/logos/supabase.png" },
                            { name: "Node.js", src: "/logos/nodejs.png" },
                          ].map((logo) => (
                            <div
                              key={logo.name}
                              className="group/item relative flex-shrink-0"
                            >
                              <div className="w-16 h-16 bg-zinc-800 rounded-lg shadow-sm border border-zinc-700 flex items-center justify-center hover:shadow-lg hover:border-violet-500 transition-all duration-300">
                                <Image
                                  src={logo.src || "/placeholder.svg"}
                                  alt={logo.name}
                                  width={40}
                                  height={40}
                                  className="opacity-70 group-hover/item:opacity-100 transition-opacity"
                                />
                              </div>
                              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 z-20">
                                <span className="text-xs text-zinc-200 bg-zinc-700 px-2 py-1 rounded shadow-lg border border-zinc-600 whitespace-nowrap">
                                  {logo.name}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none z-10"></div>
                  <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none z-10"></div>
                </div>
              </div>

              {/* Development Standards */}
              <div
                className="space-y-6 pt-8 border-t border-zinc-800 scroll-animate"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="text-lg font-semibold text-zinc-50">
                  Our Development Standards
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm font-medium text-zinc-300">
                      TypeScript First
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">⚡</span>
                    </div>
                    <span className="text-sm font-medium text-zinc-300">
                      Performance Optimized
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">🛡️</span>
                    </div>
                    <span className="text-sm font-medium text-zinc-300">
                      Security Focused
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Build with AI Section */}
        <SectionWithMockup
          title={exampleData1.title}
          description={exampleData1.description}
          primaryImageSrc={exampleData1.primaryImageSrc}
          secondaryImageSrc={exampleData1.secondaryImageSrc}
          reverseLayout={false}
        />

        {/* Performance Analytics Section */}
        <section
          id="page-speed"
          className="w-full py-20 md:py-32 bg-gradient-to-br from-zinc-50 to-zinc-100"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center space-y-6 mb-20">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-zinc-200 scroll-animate">
                <BarChart className="h-4 w-4 text-violet-600" />
                <span className="text-sm font-medium text-zinc-700">
                  Performance Analytics
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 scroll-animate">
                We don't just build fast websites
              </h2>
              <p
                className="text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto scroll-animate"
                style={{ animationDelay: "0.1s" }}
              >
                We engineer performance from the ground up. Every line of code,
                every asset, every interaction is optimized for lightning-fast
                user experiences that convert.
              </p>
            </div>

            {/* Main Performance Dashboard */}
            <div className="max-w-6xl mx-auto mb-16">
              <div
                className="bg-white rounded-3xl shadow-xl border border-zinc-200 p-8 md:p-12 scroll-animate"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                  {/* Left: Main Performance Score */}
                  <div className="text-center lg:text-left space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-zinc-900">
                        Lighthouse Performance
                      </h3>
                      <p className="text-zinc-600 leading-relaxed">
                        We consistently deliver websites that score 95+ on
                        Google's Core Web Vitals, ensuring your site loads in
                        under 1 second.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                      <div className="bg-green-50 p-3 rounded-2xl">
                        <Zap className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-zinc-500">
                          Average Load Time
                        </div>
                        <div className="text-2xl font-bold text-zinc-900">
                          0.8s
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center: Large Performance Gauge */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <Gauge size={200} primary={"success"} value={96} />
                    </div>
                  </div>

                  {/* Right: Key Metrics */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-zinc-700">
                          First Contentful Paint
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          0.9s
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-zinc-700">
                          Largest Contentful Paint
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          1.2s
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-zinc-700">
                          Cumulative Layout Shift
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          0.05
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-zinc-700">
                          Time to Interactive
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          1.8s
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-100">
                      <div className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">
                        Performance Grade
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        A+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <div
                className="bg-white rounded-2xl shadow-lg border border-zinc-200 p-6 text-center scroll-animate"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex justify-center mb-4">
                  <Gauge size={120} primary={"info"} value={98} />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 mb-2">
                  Accessibility
                </h4>
                <p className="text-sm text-zinc-600 mb-3">
                  WCAG 2.1 AA compliant with screen reader optimization
                </p>
                <div className="text-2xl font-bold text-blue-600">98/100</div>
              </div>

              <div
                className="bg-white rounded-2xl shadow-lg border border-zinc-200 p-6 text-center scroll-animate"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex justify-center mb-4">
                  <Gauge size={120} primary={"success"} value={94} />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 mb-2">SEO</h4>
                <p className="text-sm text-zinc-600 mb-3">
                  Structured data, meta optimization, and crawlability
                </p>
                <div className="text-2xl font-bold text-green-600">94/100</div>
              </div>

              <div
                className="bg-white rounded-2xl shadow-lg border border-zinc-200 p-6 text-center scroll-animate"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex justify-center mb-4">
                  <Gauge size={120} primary={"warning"} value={92} />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 mb-2">
                  Best Practices
                </h4>
                <p className="text-sm text-zinc-600 mb-3">
                  Security headers, HTTPS, and modern web standards
                </p>
                <div className="text-2xl font-bold text-orange-600">92/100</div>
              </div>
            </div>

            {/* Bottom Section: What This Means */}
            <div
              className="max-w-4xl mx-auto text-center space-y-8 scroll-animate"
              style={{ animationDelay: "0.6s" }}
            >
              <h3 className="text-3xl font-bold text-zinc-900">
                What these numbers mean for your business
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 mb-2">
                        Higher Conversion Rates
                      </h4>
                      <p className="text-sm text-zinc-600">
                        Fast websites convert 2.5x better. Every 100ms
                        improvement increases conversions by 8%.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <Search className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 mb-2">
                        Better Search Rankings
                      </h4>
                      <p className="text-sm text-zinc-600">
                        Google uses Core Web Vitals as a ranking factor. Fast
                        sites rank higher and get more traffic.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 mb-2">
                        Improved User Experience
                      </h4>
                      <p className="text-sm text-zinc-600">
                        Users expect pages to load in under 2 seconds. We
                        consistently deliver sub-second experiences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                      <Shield className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 mb-2">
                        Enterprise Security
                      </h4>
                      <p className="text-sm text-zinc-600">
                        Modern security headers, CSP policies, and best
                        practices protect your users and data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-6xl text-center">
              <div className="space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl scroll-animate">
                  Built for modern enterprises
                </h2>
                <p
                  className="text-xl text-zinc-600 scroll-animate"
                  style={{ animationDelay: "0.1s" }}
                >
                  From API integrations to full-stack platforms, we deliver
                  solutions that power business growth.
                </p>
              </div>
              <div className="flex justify-center">
                <DisplayCards cards={enterpriseCards} />
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section id="enterprise" className="w-full py-20 md:py-32 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8 text-center">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Badge
                      variant="secondary"
                      className="bg-zinc-200 text-zinc-700 scroll-animate"
                    >
                      Enterprise Ready
                    </Badge>
                  </div>
                  <h2
                    className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl scroll-animate"
                    style={{ animationDelay: "0.1s" }}
                  >
                    Built for enterprise scale and security
                  </h2>
                  <p
                    className="text-xl text-zinc-600 leading-relaxed scroll-animate"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Our solutions meet the highest standards for security,
                    compliance, and performance that enterprise organizations
                    require.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 text-left max-w-2xl mx-auto">
                  <div
                    className="flex gap-3 scroll-animate"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">
                        SOC 2 Compliant
                      </h3>
                      <p className="text-sm text-zinc-600">
                        Enterprise-grade security and compliance standards
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex gap-3 scroll-animate"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">
                        99.9% Uptime
                      </h3>
                      <p className="text-sm text-zinc-600">
                        Guaranteed availability with comprehensive monitoring
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex gap-3 scroll-animate"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">
                        Dedicated Support
                      </h3>
                      <p className="text-sm text-zinc-600">
                        24/7 technical support with dedicated account management
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex gap-3 scroll-animate"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GaugeIcon className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">
                        Performance SLA
                      </h3>
                      <p className="text-sm text-zinc-600">
                        Sub-second response times with global CDN
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <AnimatedBackground
                className="rounded-2xl border border-zinc-200 bg-white shadow-xl scroll-animate"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="p-8 text-center">
                  <div className="text-2xl font-bold text-zinc-900 mb-2">
                    Enterprise Dashboard
                  </div>
                  <div className="text-zinc-600">
                    Real-time monitoring and analytics
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 rounded-lg p-3">
                      <div className="font-semibold text-green-600">99.9%</div>
                      <div className="text-zinc-600">Uptime</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <div className="font-semibold text-blue-600">
                        &lt; 100ms
                      </div>
                      <div className="text-zinc-600">Response</div>
                    </div>
                  </div>
                </div>
              </AnimatedBackground>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl scroll-animate">
                Trusted by industry leaders
              </h2>
              <p
                className="text-xl text-zinc-600 scroll-animate"
                style={{ animationDelay: "0.1s" }}
              >
                See how we've helped companies scale their digital
                infrastructure and drive growth.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Link href="/case-studies/techflow">
                <Card className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group scroll-animate">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-t-lg"></div>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Twilio Integration Platform
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                      Built a comprehensive communication platform handling 1M+
                      messages daily with real-time analytics and
                      enterprise-grade reliability.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/case-studies/artisan">
                <Card
                  className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group scroll-animate"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 rounded-t-lg"></div>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Swell E-commerce Platform
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                      Headless commerce solution processing $2M+ in transactions
                      monthly with advanced inventory management and
                      multi-channel support.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/case-studies/datasync">
                <Card
                  className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group scroll-animate"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-100 rounded-t-lg"></div>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Analytics Dashboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                      Real-time data visualization platform processing 100GB+
                      daily with advanced machine learning insights and
                      predictive analytics.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl scroll-animate">
                Transparent, scalable pricing
              </h2>
              <p
                className="text-xl text-zinc-600 scroll-animate"
                style={{ animationDelay: "0.1s" }}
              >
                From startups to enterprise, we have a solution that scales with
                your business needs.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 scroll-animate">
                <CardHeader className="pb-8">
                  <CardTitle className="text-xl text-zinc-900">
                    Starter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">
                      $4,999
                    </span>
                    <span className="text-zinc-500">per project</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-transparent" variant="outline">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              <Card
                className="border-2 border-zinc-900 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative scroll-animate"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-zinc-900 text-white">Most Popular</Badge>
                </div>
                <CardHeader className="pb-8 pt-8">
                  <CardTitle className="text-xl text-zinc-900">
                    Professional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">
                      $12,999
                    </span>
                    <span className="text-zinc-500">per project</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-zinc-900 hover:bg-zinc-800">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              <Card
                className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 scroll-animate"
                style={{ animationDelay: "0.2s" }}
              >
                <CardHeader className="pb-8">
                  <CardTitle className="text-xl text-zinc-900">
                    Enterprise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">
                      Custom
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 mt-1">
                    Starting at $25,000
                  </p>
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
        <section className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <div className="space-y-4">
                <div className="flex justify-center scroll-animate">
                  <AppleHelloEnglishEffect
                    className="h-24 text-zinc-900"
                    speed={3}
                  />
                </div>
                <p
                  className="text-xl text-zinc-600 scroll-animate"
                  style={{ animationDelay: "0.1s" }}
                >
                  Let's build something extraordinary together.
                </p>
              </div>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate"
                style={{ animationDelay: "0.2s" }}
              >
                <Button
                  size="lg"
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 transition-transform hover:scale-105"
                >
                  Start your project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 bg-transparent transition-transform hover:scale-105"
                >
                  Schedule a call
                </Button>
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
              Enterprise web development solutions that scale with your
              business. Led by Lacy Morrow.
            </p>
          </div>
          <div className="mt-8 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Code Collective. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
