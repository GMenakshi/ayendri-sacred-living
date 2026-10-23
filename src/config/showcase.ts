/**
 * Central image + showcase configuration.
 * Swap any image here (drop a new file into src/assets and update the import)
 * and every section updates automatically. No images are hardcoded in components.
 */

import heroImage from "@/assets/hero.jpg";
import appScreen from "@/assets/app-screen.png";
import experienceHands from "@/assets/experience-hands.jpg";
import productRudraksha from "@/assets/product-rudraksha.jpg";
import productMala from "@/assets/product-mala.jpg";
import productIdol from "@/assets/product-idol.jpg";
import productJewellery from "@/assets/product-jewellery.jpg";
import productPuja from "@/assets/product-puja.jpg";
import emblem from "@/assets/ayendri-emblem.png.asset.json";
import appIcon from "@/assets/ayendri-app-icon.png.asset.json";

/** Official AYENDRI logo (unmodified). Use `emblem.url` in <img src>. */
export const BRAND = {
  emblem: emblem,
  appIcon: appIcon,
} as const;

export const HERO_IMAGE = {
  src: heroImage,
  alt: "Brass oil lamps, marigold flowers and a rudraksha mala glowing in warm golden light",
  width: 1920,
  height: 1080,
} as const;

export const EXPERIENCE_IMAGE = {
  src: experienceHands,
  alt: "Hands holding a rudraksha mala in prayer by warm lamplight",
  width: 1024,
  height: 1360,
} as const;

export const APP_SCREENSHOT = {
  src: appScreen,
  alt: "AYENDRI app home screen showing curated spiritual products",
  width: 1080,
  height: 1920,
} as const;

export type Product = {
  id: string;
  name: string;
  blurb: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

/** Product categories shown in the horizontal showcase. */
export const PRODUCTS: Product[] = [
  {
    id: "rudraksha",
    name: "Rudraksha",
    blurb: "Energised beads, sourced and certified at the origin.",
    image: productRudraksha,
    alt: "Rudraksha mala resting on a polished brass Shiva lingam",
    width: 1024,
    height: 1360,
  },
  {
    id: "malas",
    name: "Malas",
    blurb: "Hand-strung tulsi, sandalwood and lotus seed japa malas.",
    image: productMala,
    alt: "Tulsi and sandalwood prayer mala with a gold lotus pendant",
    width: 1024,
    height: 1360,
  },
  {
    id: "idols",
    name: "Idols & Deities",
    blurb: "Hand-finished brass murtis for your home mandir.",
    image: productIdol,
    alt: "Polished brass Ganesha idol on an ivory stone pedestal",
    width: 1024,
    height: 1360,
  },
  {
    id: "jewellery",
    name: "Temple Jewellery",
    blurb: "Traditional gold-finish pieces with sacred motifs.",
    image: productJewellery,
    alt: "Ornate gold temple necklace with ruby and pearl accents",
    width: 1024,
    height: 1360,
  },
  {
    id: "puja",
    name: "Puja Essentials",
    blurb: "Thalis, diyas, kalash and natural incense, curated as sets.",
    image: productPuja,
    alt: "Brass puja thali with a glowing diya, kalash and incense sticks",
    width: 1024,
    height: 1360,
  },
] as const;
