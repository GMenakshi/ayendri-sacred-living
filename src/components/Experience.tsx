import { BadgeCheck, Flame, Truck, ArrowRight } from "lucide-react";
import { EXPERIENCE_IMAGE } from "@/config/showcase";
import { Reveal } from "@/components/Reveal";

const PILLARS = [
  {
    icon: BadgeCheck,
    title: "Authenticity, certified",
    body: "Every rudraksha and mala is sourced at origin and verified by trusted pandits before listing.",
  },
  {
    icon: Flame,
    title: "Energised with care",
    body: "Products are blessed and quality-checked, so what arrives home carries the right spirit.",
  },
  {
    icon: Truck,
    title: "Doorstep sanctity",
    body: "Thoughtful, tamper-proof packaging keeps your sacred items pristine from our hands to yours.",
  },
] as const;

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-deep py-20 text-ivory sm:py-28">
      {/* Ambient gold glows */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-gold/30 sm:-inset-4"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 h-full w-full rounded-[2rem] border border-gold/15"
            />
            <img
              src={EXPERIENCE_IMAGE.src}
              alt={EXPERIENCE_IMAGE.alt}
              width={EXPERIENCE_IMAGE.width}
              height={EXPERIENCE_IMAGE.height}
              loading="lazy"
              className="relative aspect-[3/4] w-full rounded-[2rem] object-cover shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-gold">The AYENDRI Experience</p>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Sacred for a higher you
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
              We believe devotion deserves more than a checkout page. AYENDRI is built like a
              sanctuary — every product, every order, every detail honoured.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-8">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.1 + i * 0.12}>
                <div className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                    <pillar.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg text-ivory sm:text-xl">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ivory/65">{pillar.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <a
              href="#download"
              className="group mt-11 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-gold transition-colors hover:text-gold-soft"
            >
              Discover more in the app
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
