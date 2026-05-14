import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";

export const site = {
  name: "PK Transporters",
  legalName: "PK Transporters Logistics",
  contactName: "Muhammad Kashif",
  phone: "+92 310 3488563",
  whatsapp: "923103488563",
  email: "sales@pktransporters.com",
  address: "Karachi Port Area, Karachi, Sindh, Pakistan",
  areaServed: ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Pakistan"],
  coordinates: { latitude: 24.8508, longitude: 66.9777 },
  tagline: "Pakistan's trusted container transport and logistics partner with nationwide coverage and Karachi port expertise."
};

const defaultOgImage = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80";

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
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
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage]
    }
  };
}
