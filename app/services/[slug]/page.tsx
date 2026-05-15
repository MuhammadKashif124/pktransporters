import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { ServiceLanding } from "@/components/sections/page-shells";
import { services } from "@/lib/content";
import { breadcrumbSchema, faqSchema, howToSchema, serviceSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/site";

export const revalidate = 3600;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: `${service.title} Pakistan | PK Transporters`,
    description: service.summary,
    path: `/services/${service.slug}`,
    keywords: service.keywords
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={howToSchema(`${service.title} process`, service.process)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services/container-services" }, { name: service.title, url: `/services/${service.slug}` }])} />
      <ServiceLanding service={service} />
    </>
  );
}
