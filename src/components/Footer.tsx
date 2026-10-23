import { Instagram, Youtube, Twitter } from "lucide-react";
import { FOOTER_COLUMNS, SITE, SOCIAL_LINKS } from "@/config/site";
import { BRAND, PRODUCTS } from "@/config/showcase";

const SOCIAL_ICONS = { Instagram, YouTube: Youtube, X: Twitter } as const;

export function Footer() {
  return (
    <footer className="bg-deep pt-16 text-ivory/70 sm:pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-14 sm:px-8 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-sm">
          <img
            src={BRAND.emblem.url}
            alt={`${SITE.name} logo`}
            width={144}
            height={96}
            loading="lazy"
            className="h-12 w-auto"
          />
          <p className="mt-5 text-sm leading-relaxed text-ivory/60">
            {SITE.tagline}. Authentic rudraksha, malas, idols and puja essentials — curated with
            reverence for your spiritual journey.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${SITE.name} on ${social.label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 text-ivory/70 transition-all duration-300 hover:border-gold/50 hover:text-gold"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{column.title}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-7 text-xs text-ivory/45 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>
            {PRODUCTS.length} sacred categories · Made with devotion in India
          </p>
        </div>
      </div>
    </footer>
  );
}
