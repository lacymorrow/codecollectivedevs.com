import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PricingSection() {
  return (
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
  );
} 