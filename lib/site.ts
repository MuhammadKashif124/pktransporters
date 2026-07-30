import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";

export const site = {
  name: "PK Transporters",
  legalName: "PK Transporters Logistics",
  contactPerson: "Chaudhary Faisal Matloob",
  phone: "+92 305 6000097",
  whatsapp: "923056000097",
  phoneSecondary: "+92 311 0000097",
  whatsappSecondary: "923110000097",
  corporatePhone: "+92 310 3488563",
  corporatePhoneNote: "For corporate offices requiring documentation, guidance, or formal quotations.",
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
