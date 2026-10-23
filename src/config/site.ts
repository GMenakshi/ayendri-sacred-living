/**
 * Central AYENDRI site configuration.
 * Edit copy, links and navigation here — components read from this file.
 */

export const SITE = {
  name: "AYENDRI",
  tagline: "Sacred for a Higher You",
  description:
    "AYENDRI is a premium shopping app for authentic Hindu spiritual essentials — rudraksha, malas, idols, jewellery and puja needs, curated with reverence and delivered with care.",
} as const;

/**
 * ⚠️ PLACEHOLDER LINKS — replace both values with the official URLs.
 * Nothing here points to a real destination until you provide the links.
 */
export const DOWNLOAD_LINKS = {
  // ⚠️ PLACEHOLDER: official Google Play Store listing URL for AYENDRI
  googlePlay: "https://play.google.com/store/apps/details?id=REPLACE_WITH_AYENDRI_APP_ID",
  // ⚠️ PLACEHOLDER: official direct APK download URL for AYENDRI
  apk: "https://REPLACE-WITH-OFFICIAL-HOST/ayendri-app-latest.apk",
} as const;

export const NAV_LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Experience", href: "#experience" },
  { label: "Download", href: "#download" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Collections", href: "#collections" },
      { label: "The AYENDRI Experience", href: "#experience" },
      { label: "Get the App", href: "#download" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Rudraksha", href: "#collections" },
      { label: "Malas", href: "#collections" },
      { label: "Idols & Deities", href: "#collections" },
      { label: "Puja Essentials", href: "#collections" },
    ],
  },
  {
    title: "Support",
    links: [
      // ⚠️ PLACEHOLDER: point these at real pages when available
      { label: "Contact Us", href: "#contact" },
      { label: "FAQs", href: "#faq" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Use", href: "#terms" },
    ],
  },
] as const;

/** ⚠️ PLACEHOLDER social links — replace with official profiles */
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/REPLACE_WITH_AYENDRI_HANDLE" },
  { label: "YouTube", href: "https://youtube.com/@REPLACE_WITH_AYENDRI_HANDLE" },
  { label: "X", href: "https://x.com/REPLACE_WITH_AYENDRI_HANDLE" },
] as const;
