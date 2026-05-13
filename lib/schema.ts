import { absoluteUrl } from "@/lib/utils";
import { site } from "@/lib/site";
import type { FAQ, Service, CityPage } from "@/lib/content";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: absoluteUrl("/"),
    telephone: site.phone,
    email: site.email,
    address: { "@type": "PostalAddress", streetAddress: site.address, addressCountry: "PK" },
    areaServed: site.areaServed
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.tagline,
    url: absoluteUrl("/"),
    telephone: site.phone,
    address: { "@type": "PostalAddress", streetAddress: site.address, addressLocality: "Karachi", addressRegion: "Sindh", addressCountry: "PK" },
    geo: { "@type": "GeoCoordinates", ...site.coordinates },
    areaServed: site.areaServed
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
    areaServed: "Pakistan",
    serviceType: service.title,
    url: absoluteUrl(`/services/${service.slug}`)
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url)
    }))
  };
}

export function cityLocalSchema(page: CityPage) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${site.name} - ${page.title}`,
    description: page.summary,
    url: absoluteUrl(`/locations/${page.slug}`),
    telephone: site.phone,
    areaServed: page.city,
    address: { "@type": "PostalAddress", addressLocality: page.city, addressCountry: "PK" }
  };
}

export function howToSchema(name: string, steps: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((step, index) => ({ "@type": "HowToStep", position: index + 1, text: step }))
  };
}
