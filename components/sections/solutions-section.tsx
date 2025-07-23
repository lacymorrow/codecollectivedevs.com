import DisplayCards from "@/components/display-card";
import { Monitor, Layers, ShoppingCart } from "lucide-react";

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

export default function SolutionsSection() {
  return (
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
  );
} 