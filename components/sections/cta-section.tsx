import { Button } from "@/components/ui/button";
import { AppleHelloEnglishEffect } from "@/components/apple-hello";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
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
  );
} 