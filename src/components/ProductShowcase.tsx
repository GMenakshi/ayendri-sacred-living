import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/config/showcase";
import { Reveal } from "@/components/Reveal";

export function ProductShowcase() {
  return (
    <section id="collections" className="overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">Curated Collections</p>
          <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            Everything your sadhana needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Five sacred categories, one standard — authenticity. Every piece is verified before it
            reaches your mandir.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-12 sm:mt-16">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:gap-7 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="group w-[76vw] max-w-[320px] min-w-[260px] shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-card shadow-[0_10px_40px_-24px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_-24px_rgba(0,0,0,0.3)] sm:w-[320px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  width={product.width}
                  height={product.height}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-deep/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-500 group-hover:opacity-100">
                  Explore in app
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </article>
          ))}

          {/* End spacer card for comfortable edge scrolling */}
          <div aria-hidden="true" className="w-2 shrink-0 sm:w-6" />
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm text-muted-foreground">
          Swipe to explore — every product is authenticity-verified in the AYENDRI app.
        </p>
      </Reveal>
    </section>
  );
}
