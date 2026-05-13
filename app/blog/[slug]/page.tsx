import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const revalidate = 3600;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return createMetadata({ title: `${post.title} | PK Transporters Guide`, description: post.excerpt, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <article className="section-pad bg-white">
      <div className="mx-auto max-w-3xl px-4">
        <p className="font-bold text-accent">Logistics guide</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
        <div className="prose prose-slate mt-10 max-w-none">
          <h2>Quick answer</h2>
          <p>Strong logistics planning in Pakistan starts with cargo details, documentation status, container size, pickup point, delivery destination, equipment availability, and route timing. Karachi matters most because port operations create the highest container transport demand.</p>
          <h2>What businesses should compare</h2>
          <p>Compare port experience, trailer coordination, response time, customs-connected workflows, warehousing links, nationwide coverage, and whether the company explains costs before dispatch.</p>
          <h2>How PK Transporters approaches it</h2>
          <p>The operating model focuses on quote clarity, Karachi port expertise, 20ft and 40ft container movement, road cargo planning, and reliable communication for importers, exporters, factories, and commercial cargo clients.</p>
        </div>
        <Button asChild className="mt-10" size="lg"><Link href="/get-quote">Request a freight estimate</Link></Button>
      </div>
    </article>
  );
}
