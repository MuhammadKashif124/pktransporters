import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";

export const site = {
  name: "PK Transporters",
  legalName: "PK Transporters Logistics",
  contactName: "Muhammad Kashif",
  phone: "+92 310 3488563",
  whatsapp: "923103488563",
  address: "Karachi Port Area, Karachi, Sindh, Pakistan",
  areaServed: ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Pakistan"],
  coordinates: { latitude: 24.8508, longitude: 66.9777 },
  tagline: "Pakistan's trusted container transport and logistics partner with nationwide coverage and Karachi port expertise."
};

const defaultOgImage = absoluteUrl("/og-default.jpg");

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  ogImage
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const image = ogImage || defaultOgImage;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
