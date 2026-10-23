import { motion } from "motion/react";
import { Play, Download } from "lucide-react";
import { DOWNLOAD_LINKS } from "@/config/site";
import { APP_SCREENSHOT, BRAND } from "@/config/showcase";
import { Reveal } from "@/components/Reveal";

export function DownloadCta() {
  return (
    <section id="download" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <img
              src={BRAND.appIcon.url}
              alt="AYENDRI app icon"
              width={96}
              height={96}
              loading="lazy"
              className="h-20 w-20 rounded-2xl shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)] md:animate-float"
            />
            <h2 className="mt-7 font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
              Carry AYENDRI with you
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Shop authentic spiritual essentials, follow guided puja collections and receive your
              order with doorstep sanctity — all from one beautifully crafted app.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={DOWNLOAD_LINKS.googlePlay} target="_blank" rel="noreferrer" className="btn btn-lg btn-hero">
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                Download on Google Play
              </a>
              <a href={DOWNLOAD_LINKS.apk} target="_blank" rel="noreferrer" className="btn btn-lg btn-outline-dark">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download APK
              </a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">Android 8.0 and above · Free to download</p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative mx-auto w-fit">
            <motion.div
              aria-hidden="true"
              className="absolute -inset-10 rounded-full bg-gold/20 blur-3xl"
              animate={{ opacity: [0.45, 0.8, 0.45] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={APP_SCREENSHOT.src}
              alt={APP_SCREENSHOT.alt}
              width={APP_SCREENSHOT.width}
              height={APP_SCREENSHOT.height}
              loading="lazy"
              initial={{ rotate: 2.5, y: 24, opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: -1.5, scale: 1.02 }}
              className="relative w-[260px] rounded-[2.2rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.45)] sm:w-[320px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
