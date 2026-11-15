// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// All subpage slugs (shared across all languages)
const subpages = [
  "", // homepage
  "/serwis-telewizorow",
  "/serwis-laptopow",
  "/serwis-komputerow",
  "/multi-guard",
  "/cennik",
  "/kontakt",
  "/faq",
  "/about",
  "/case-studies",
];

// Build i18n entries: each page maps to pl, en, uk URLs
const i18nEntries = {};
for (const slug of subpages) {
  const plUrl = `https://multi-servis.pl${slug || "/"}`;
  i18nEntries[plUrl] = {
    pl: `https://multi-servis.pl${slug || "/"}`,
    en: `https://multi-servis.pl/en${slug}`,
    uk: `https://multi-servis.pl/uk${slug}`,
  };
  i18nEntries[`https://multi-servis.pl/en${slug}`] = {
    pl: `https://multi-servis.pl${slug || "/"}`,
    en: `https://multi-servis.pl/en${slug}`,
    uk: `https://multi-servis.pl/uk${slug}`,
  };
  i18nEntries[`https://multi-servis.pl/uk${slug}`] = {
    pl: `https://multi-servis.pl${slug || "/"}`,
    en: `https://multi-servis.pl/en${slug}`,
    uk: `https://multi-servis.pl/uk${slug}`,
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://multi-servis.pl",
  redirects: {
    "/serwis-konsol": "/",
    "/en/serwis-konsol": "/en",
    "/uk/serwis-konsol": "/uk",
    "/polityka-prywatnosci": "/polityka-prywatnosci-multi-guard-browser-shield/",
    "/en/polityka-prywatnosci-multi-guard-browser-shield": "/polityka-prywatnosci-multi-guard-browser-shield/",
    "/uk/polityka-prywatnosci-multi-guard-browser-shield": "/polityka-prywatnosci-multi-guard-browser-shield/",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/admin/"),
      i18n: {
        defaultLocale: "pl",
        locales: {
          pl: "pl",
          en: "en",
          uk: "uk",
        },
      },
      serialize: (item) => {
        // Add priority and changefreq based on path
        const url = item.url;
        if (url.endsWith("/") && (url.split("/").length <= 4)) {
          item.priority = 1.0;
          item.changefreq = "weekly";
        } else if (url.includes("serwis-") || url.includes("multi-guard")) {
          item.priority = 0.9;
          item.changefreq = "weekly";
        } else {
          item.priority = 0.8;
          item.changefreq = "monthly";
        }
        return item;
      },
    }),
  ],
  vite: {
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  },
});