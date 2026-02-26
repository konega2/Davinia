import BookingWhatsappSection from "@/components/sections/booking-whatsapp-section";
import ArtworkSection from "@/components/sections/artwork-section";
import FaqEditorialSection from "@/components/sections/faq-editorial-section";
import FooterEditorialSection from "@/components/sections/footer-editorial-section";
import HeroSection from "@/components/sections/hero-section";
import LocationsAndAvailabilitySection from "@/components/sections/locations-and-availability-section";
import PortfolioByStyleSection from "@/components/sections/portfolio-by-style-section";
import ProcessExperienceSection from "@/components/sections/process-experience-section";
import StorySection from "@/components/sections/story-section";
import StyleShowcaseSection from "@/components/sections/style-showcase-section";
import TrajectorySection from "@/components/sections/trajectory-section";

import {getTranslations, setRequestLocale} from "next-intl/server";

export default async function Home({
  params,
}: {
  params: {locale: string};
}) {
  const {locale} = params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: "nav"});
  const schema = await getTranslations({locale, namespace: "schema"});

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t("brand"),
    jobTitle: schema("jobTitle"),
    address: {
      "@type": "PostalAddress",
      addressLocality: schema("addressLocality"),
      addressCountry: schema("addressCountry"),
    },
    url: schema("url"),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
      />

      <main className="relative bg-brand-black">
        <HeroSection />
        <StorySection />
        <StyleShowcaseSection />
        <TrajectorySection />
        <ProcessExperienceSection />
        <PortfolioByStyleSection />
        <ArtworkSection />
        <LocationsAndAvailabilitySection />
        <FaqEditorialSection />
        <BookingWhatsappSection />
        <FooterEditorialSection />
      </main>
    </>
  );
}
