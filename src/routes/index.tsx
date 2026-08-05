import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar, Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  InstantHelpSection,
  MarineSection,
  StoreSection,
  SupportNumberSection,
  VoucherSection,
} from "@/components/site/Sections";
import { Faq, FinalCta, Footer, RoutingHub } from "@/components/site/Sections2";

const TITLE = "Satellite Car Audio Support & Activation | Call (855) 943-8332";
const DESCRIPTION =
  "Satellite Car Audio support for radio activation, signal refresh, subscriptions, billing, installation and marine radios. Toll-free 24/7 help at (855) 943-8332.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Satellite Car Audio",
          url: "https://satellitecaraudio.com",
          description: DESCRIPTION,
          telephone: "+1-855-943-8332",
          areaServed: "US",
          openingHours: "Mo-Su 00:00-23:59",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <StoreSection />
        <InstantHelpSection />
        <SupportNumberSection />
        <VoucherSection />
        <MarineSection />
        <RoutingHub />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
