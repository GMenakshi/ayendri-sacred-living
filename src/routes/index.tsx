import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Experience } from "@/components/Experience";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";
import { SITE } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE.name} — ${SITE.tagline}` },
      { name: "twitter:description", content: SITE.description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Experience />
        <DownloadCta />
      </main>
      <Footer />
    </div>
  );
}
