import Image from "next/image";

export default function PartnersSection() {
  return (
    <section 
      className="w-full py-16 md:py-24 overflow-hidden bg-zinc-900 text-white"
      aria-labelledby="partners-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h2 
              id="partners-heading"
              className="text-2xl font-bold tracking-tight text-zinc-50 scroll-animate"
            >
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
            role="region"
            aria-label="Technology partners and tools"
          >
            {/* First Marquee - Left to Right */}
            <div className="relative" aria-label="AI and Design Tools">
              <div className="flex overflow-hidden">
                <div className="flex animate-marquee-left group-hover:pause whitespace-nowrap">
                  {Array.from({ length: 3 }).map((_, setIndex) => (
                    <div
                      key={`ai-tools-set-${setIndex}`}
                      className="flex space-x-8 mr-8"
                    >
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
                          key={`${logo.name}-${setIndex}`}
                          className="group/item relative flex-shrink-0"
                        >
                          <div className="w-16 h-16 bg-zinc-800 rounded-lg shadow-sm border border-zinc-700 flex items-center justify-center hover:shadow-lg hover:border-violet-500 transition-all duration-300">
                            <Image
                              src={logo.src || "/placeholder.svg"}
                              alt={`${logo.name} logo`}
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
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none z-10" aria-hidden="true"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none z-10" aria-hidden="true"></div>
            </div>

            {/* Second Marquee - Right to Left */}
            <div className="relative mt-8" aria-label="Development and Infrastructure Tools">
              <div className="flex overflow-hidden">
                <div className="flex animate-marquee-right group-hover:pause whitespace-nowrap">
                  {Array.from({ length: 3 }).map((_, setIndex) => (
                    <div
                      key={`dev-tools-set-${setIndex}`}
                      className="flex space-x-8 mr-8"
                    >
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
                          key={`${logo.name}-${setIndex}`}
                          className="group/item relative flex-shrink-0"
                        >
                          <div className="w-16 h-16 bg-zinc-800 rounded-lg shadow-sm border border-zinc-700 flex items-center justify-center hover:shadow-lg hover:border-violet-500 transition-all duration-300">
                            <Image
                              src={logo.src || "/placeholder.svg"}
                              alt={`${logo.name} logo`}
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
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none z-10" aria-hidden="true"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none z-10" aria-hidden="true"></div>
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
            <div className="flex flex-wrap items-center justify-center gap-8" role="list">
              <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg" role="listitem">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center" aria-hidden="true">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-medium text-zinc-300">
                  TypeScript First
                </span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg" role="listitem">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center" aria-hidden="true">
                  <span className="text-white text-xs font-bold">⚡</span>
                </div>
                <span className="text-sm font-medium text-zinc-300">
                  Performance Optimized
                </span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg" role="listitem">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center" aria-hidden="true">
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
  );
} 