import BookingWhatsappSection from "@/components/sections/booking-whatsapp-section";
import FaqEditorialSection from "@/components/sections/faq-editorial-section";
import FooterEditorialSection from "@/components/sections/footer-editorial-section";
import HeroSection from "@/components/sections/hero-section";
import PortfolioByStyleSection from "@/components/sections/portfolio-by-style-section";
import ProcessExperienceSection from "@/components/sections/process-experience-section";
import StorySection from "@/components/sections/story-section";
import StudioSection from "@/components/sections/studio-section";
import StyleShowcaseSection from "@/components/sections/style-showcase-section";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Memphis 21",
    jobTitle: "Tattoo Artist",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gandía",
      addressCountry: "ES",
    },
    url: "https://memphis21.art",
    sameAs: ["https://instagram.com/memphis21tattoo"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="relative bg-brand-black">
        <HeroSection />
        <StorySection />
        <StyleShowcaseSection />
        <ProcessExperienceSection />
        <StudioSection />
        <PortfolioByStyleSection />
        <FaqEditorialSection />
        <BookingWhatsappSection />
        <FooterEditorialSection />
      </main>
    </>
  );
}
