import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { CityLanding } from "@/components/sections/page-shells";
import { cityPages } from "@/lib/content";
import { breadcrumbSchema, cityLocalSchema, faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/site";

export const revalidate = 3600;

export function generateStaticParams() {
  return cityPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = cityPages.find((item) => item.slug === slug);
  if (!page) return {};
  return createMetadata({
    title: `${page.title} | Container Transport, Freight & Road Cargo`,
    description: page.summary,
    path: `/locations/${page.slug}`,
    keywords: [page.focus, `${page.city} cargo services`, `${page.city} container trailer`, "logistics company Pakistan"]
  });
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = cityPages.find((item) => item.slug === slug);
  if (!page) notFound();
  return (
    <>
      <JsonLd data={cityLocalSchema(page)} />
      <JsonLd data={faqSchema(page.faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Coverage Areas", url: "/coverage-areas" }, { name: page.title, url: `/locations/${page.slug}` }])} />
      <CityLanding page={page} />
    </>
  );
}
