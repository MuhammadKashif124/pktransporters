import type { MetadataRoute } from "next";
import { blogPosts, cityPages, services } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/contact", "/get-quote", "/track-shipment", "/industries", "/coverage-areas", "/careers", "/blog"];
  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route), lastModified: new Date(), changeFrequency: "weekly" as const, priority: route === "/" ? 1 : 0.7 })),
    ...services.map((service) => ({ url: absoluteUrl(`/services/${service.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 })),
    ...cityPages.map((page) => ({ url: absoluteUrl(`/locations/${page.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: page.city === "Karachi" ? 0.95 : 0.85 })),
    ...blogPosts.map((post) => ({ url: absoluteUrl(`/blog/${post.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.65 }))
  ];
}
