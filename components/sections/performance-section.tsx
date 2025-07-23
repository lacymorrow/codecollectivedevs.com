import { BarChart, Zap, Search, Users } from "lucide-react";
import AppleActivityCard from "@/components/kokonutui/apple-activity-card";

export default function PerformanceSection() {
  return (
    <section
      id="lighthouse-performance"
      className="w-full py-20 md:py-32 bg-gradient-to-br from-zinc-50 to-zinc-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <div className="space-y-8">
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
                style={{ animationDelay: "0.1s" }}
              >
                We don't just build websites—we engineer performance
                machines. Every site we deliver achieves 95+ Lighthouse
                scores across performance, SEO, and accessibility.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-6">
              <div
                className="flex gap-4 scroll-animate"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 text-lg mb-2">
                    Sub-Second Load Times
                  </h3>
                  <p className="text-zinc-600">
                    Consistently deliver &lt;1s load times that boost
                    conversions by 15% and reduce bounce rates by 32%.
                  </p>
                </div>
              </div>

              <div
                className="flex gap-4 scroll-animate"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 text-lg mb-2">
                    SEO Optimization
                  </h3>
                  <p className="text-zinc-600">
                    Perfect Core Web Vitals, structured data, and technical
                    SEO that ranks your site higher in search results.
                  </p>
                </div>
              </div>

              <div
                className="flex gap-4 scroll-animate"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 text-lg mb-2">
                    Accessibility First
                  </h3>
                  <p className="text-zinc-600">
                    WCAG 2.1 AA compliance ensures your site is usable by
                    everyone, expanding your reach and improving user
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Apple Activity Card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="bg-white rounded-3xl shadow-xl border border-zinc-200 scroll-animate max-w-lg w-full"
              style={{ animationDelay: "0.2s" }}
            >
              <AppleActivityCard
                title="Lighthouse Scores"
                className="bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 