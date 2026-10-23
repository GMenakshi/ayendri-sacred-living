import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Play, Download } from "lucide-react";
import { DOWNLOAD_LINKS, NAV_LINKS, SITE } from "@/config/site";
import { BRAND } from "@/config/showcase";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tone = scrolled || open ? "text-foreground" : "text-ivory";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border bg-ivory/90 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8" aria-label="Main">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label={`${SITE.name} home`}>
          <img
            src={BRAND.emblem.url}
            alt={`${SITE.name} logo`}
            width={144}
            height={96}
            className={`h-10 w-auto shrink-0 transition-transform duration-300 hover:scale-[1.04] sm:h-12 ${tone}`}
          />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-semibold tracking-wide transition-colors ${tone} hover:text-primary`}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href={DOWNLOAD_LINKS.googlePlay} target="_blank" rel="noreferrer" className="btn btn-hero px-5 py-2.5 text-sm">
            Get the App
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`grid h-11 w-11 place-items-center rounded-full border transition-colors md:hidden ${
            scrolled || open ? "border-border" : "border-ivory/30"
          } ${tone}`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-ivory/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-3">
                <a
                  href={DOWNLOAD_LINKS.googlePlay}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-lg btn-hero w-full"
                >
                  <Play className="h-4 w-4 fill-current" /> Download on Google Play
                </a>
                <a href={DOWNLOAD_LINKS.apk} target="_blank" rel="noreferrer" className="btn btn-lg btn-outline-dark w-full">
                  <Download className="h-4 w-4" /> Download APK
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
