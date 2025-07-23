import { HeroSection } from "@/components/blocks/hero-section-1";
import PartnersSection from "@/components/sections/partners-section";
import SectionWithMockup from "@/components/sections/section-with-mockup";
import PerformanceSection from "@/components/sections/performance-section";
import SolutionsSection from "@/components/sections/solutions-section";
import EnterpriseSection from "@/components/sections/enterprise-section";
import CaseStudies from "@/components/blocks/case-studies";
import PricingSection from "@/components/sections/pricing-section";
import CTASection from "@/components/sections/cta-section";
import Footer from "@/components/sections/footer";

const aiSectionData = {
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

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
          <HeroSection />
        </section>

        {/* Partners Section */}
        <PartnersSection />

        {/* Build with AI Section */}
        <SectionWithMockup
          title={aiSectionData.title}
          description={aiSectionData.description}
          primaryImageSrc={aiSectionData.primaryImageSrc}
          secondaryImageSrc={aiSectionData.secondaryImageSrc}
          reverseLayout={false}
        />

        {/* Lighthouse Performance Section */}
        <PerformanceSection />

        {/* Solutions Section */}
        <SolutionsSection />

        {/* Enterprise Section */}
        <EnterpriseSection />

        {/* Case Studies Section */}
        <CaseStudies />

        {/* Pricing Section */}
        <PricingSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
