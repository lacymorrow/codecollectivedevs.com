import { Badge } from "@/components/ui/badge";
import { AnimatedBackground } from "@/components/animated-background";
import { Shield, Zap, Users, GaugeIcon } from "lucide-react";

export default function EnterpriseSection() {
  return (
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
  );
} 