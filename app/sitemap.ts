import type { MetadataRoute } from "next";
import { blogPosts, cityPages, services } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

const STATIC_PAGE_DATE = new Date("2026-05-14");
const SERVICE_DATE = new Date("2026-05-14");
const LOCATION_DATE = new Date("2026-05-14");

const staticRoutes: { route: string; priority: number }[] = [
  { route: "/", priority: 1 },
  { route: "/about", priority: 0.7 },
  { route: "/contact", priority: 0.8 },
  { route: "/get-quote", priority: 0.9 },
  { route: "/coverage-areas", priority: 0.7 },
  { route: "/industries", priority: 0.7 },
  { route: "/blog", priority: 0.7 },
  { route: "/careers", priority: 0.5 },
  { route: "/track-shipment", priority: 0.3 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map(({ route, priority }) => ({
      url: absoluteUrl(route),
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "monthly" as const,
      priority
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: SERVICE_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.9
    })),
    ...cityPages.map((page) => ({
      url: absoluteUrl(`/locations/${page.slug}`),
      lastModified: LOCATION_DATE,
      changeFrequency: "monthly" as const,
      priority: page.city === "Karachi" ? 0.95 : 0.85
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.65
    }))
  ];
}
