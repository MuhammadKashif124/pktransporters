import type { MetadataRoute } from "next";
import { cityPages, services } from "@/lib/content";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { absoluteUrl } from "@/lib/utils";

const STATIC_PAGE_DATE = new Date("2026-05-14");
const SERVICE_DATE = new Date("2026-05-14");
const LOCATION_DATE = new Date("2026-05-14");

// Core money pages — highest commercial value
const coreServiceSlugs = new Set([
  "container-services",
  "freight-forwarding",
  "karachi-port-logistics",
  "port-qasim-logistics",
  "container-haulage",
  "inland-transportation",
]);

const staticRoutes: { route: string; priority: number }[] = [
  { route: "/", priority: 1.0 },
  { route: "/get-quote", priority: 0.9 },
  { route: "/contact", priority: 0.8 },
  { route: "/industries", priority: 0.8 },
  { route: "/coverage-areas", priority: 0.75 },
  { route: "/blog", priority: 0.75 },
  { route: "/about", priority: 0.6 },
  { route: "/careers", priority: 0.4 },
  // /track-shipment is noindex — excluded from sitemap
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map(({ route, priority }) => ({
      url: absoluteUrl(route),
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: SERVICE_DATE,
      changeFrequency: "monthly" as const,
      priority: coreServiceSlugs.has(service.slug) ? 0.9 : 0.75,
    })),
    ...cityPages.map((page) => ({
      url: absoluteUrl(`/locations/${page.slug}`),
      lastModified: LOCATION_DATE,
      changeFrequency: "monthly" as const,
      priority: page.city === "Karachi" ? 0.95 : 0.85,
    })),
    ...getAllBlogPosts().map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
