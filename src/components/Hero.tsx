import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Play, Download, Star, ChevronDown } from "lucide-react";
import { DOWNLOAD_LINKS } from "@/config/site";
import { HERO_IMAGE } from "@/config/showcase";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden bg-deep text-ivory"
    >
      {/* Cinematic backdrop with parallax */}
      <motion.div style={{ y: bgY }} className="absolute -inset-y-10 inset-x-0" aria-hidden="true">
        <img
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          width={HERO_IMAGE.width}
          height={HERO_IMAGE.height}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      {/* Legibility gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/55 to-deep/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-deep/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-deep/70 to-transparent"
      />

      {/* Subtle floating golden motes */}
      <motion.div
        aria-hidden="true"
        className="absolute right-[12%] top-[24%] hidden h-40 w-40 rounded-full bg-gold/20 blur-3xl md:block"
        animate={{ y: [0, -22, 0], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[18%] right-[30%] hidden h-24 w-24 rounded-full bg-primary/25 blur-2xl md:block"
        animate={{ y: [0, 16, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-36 sm:px-8 sm:pt-40"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.p variants={item} className="eyebrow text-gold">
            Curated Hindu Spiritual Essentials
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-ivory sm:text-6xl lg:text-7xl"
          >
            Where devotion
            <span className="block text-gold">meets everyday grace</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
            AYENDRI brings you authentic rudraksha, hand-strung malas, sacred idols and puja
            essentials — sourced with reverence, delivered with care.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a href={DOWNLOAD_LINKS.googlePlay} target="_blank" rel="noreferrer" className="btn btn-lg btn-hero">
              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              Download on Google Play
            </a>
            <a href={DOWNLOAD_LINKS.apk} target="_blank" rel="noreferrer" className="btn btn-lg btn-outline-light">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download APK
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex items-center gap-3 text-sm text-ivory/70"
            aria-label="Rated 4.8 by over ten thousand devotees"
          >
            <span className="flex items-center gap-1 text-gold" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span>
              <strong className="font-semibold text-ivory">4.8</strong> · loved by 10,000+ devotees
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#collections"
        aria-label="Scroll to collections"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-ivory/60 transition-colors hover:text-ivory"
      >
        <ChevronDown className="h-7 w-7 animate-scroll-cue" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
