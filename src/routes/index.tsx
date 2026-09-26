import { createFileRoute } from "@tanstack/react-router";
import { CallPrompt } from "@/components/site/CallPrompt";
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

const TITLE = "IX Support | No-Cost Satellite Radio Connection Guidance";
const DESCRIPTION =
  "IX Support provides no-cost guidance for eligible new satellite radio connections. Customers do not pay IX Support directly; IX Support may receive a commission when an eligible connection is completed.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://satellitecaraudio.com/" },
      { property: "og:site_name", content: "IX Support" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://satellitecaraudio.com/#website",
              name: "IX Support",
              url: "https://satellitecaraudio.com/",
              inLanguage: "en-US",
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://satellitecaraudio.com/#business",
              name: "IX Support",
              url: "https://satellitecaraudio.com/",
              description: DESCRIPTION,
              telephone: "+1-800-878-9170",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3400 N Alma School Rd",
                addressLocality: "Chandler",
                addressRegion: "AZ",
                postalCode: "85224-8012",
                addressCountry: "US",
              },
              areaServed: "US",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <CallPrompt />
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
