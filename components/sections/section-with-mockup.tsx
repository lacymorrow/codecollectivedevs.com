import Image from "next/image";

interface SectionWithMockupProps {
  title: React.ReactNode;
  description: React.ReactNode;
  primaryImageSrc: string;
  secondaryImageSrc: string;
  reverseLayout?: boolean;
}

export default function SectionWithMockup({
  title,
  description,
  primaryImageSrc,
  secondaryImageSrc,
  reverseLayout = false,
}: SectionWithMockupProps) {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`grid gap-12 lg:grid-cols-2 items-center max-w-7xl mx-auto ${reverseLayout ? 'lg:grid-flow-col-dense' : ''}`}>
          <div className={`space-y-8 ${reverseLayout ? 'lg:col-start-2' : ''}`}>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 scroll-animate">
                {title}
              </h2>
              <div
                className="text-xl text-zinc-600 leading-relaxed scroll-animate"
                style={{ animationDelay: "0.1s" }}
              >
                {description}
              </div>
            </div>
          </div>
          
          <div className={`relative ${reverseLayout ? 'lg:col-start-1' : ''}`}>
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
                    <span className="font-semibold text-zinc-900">AI-Powered Development</span>
                  </div>
                  
                  <Image
                    src={primaryImageSrc}
                    alt="AI Development Dashboard"
                    width={400}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-violet-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-violet-600">95%</div>
                      <div className="text-sm text-zinc-600">Faster Development</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">10x</div>
                      <div className="text-sm text-zinc-600">Code Quality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 