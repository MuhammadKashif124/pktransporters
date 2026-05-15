import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts } from "@/lib/content";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
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
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: post.title, url: `/blog/${post.slug}` }])} />
      <div className="mx-auto max-w-3xl px-4">
        <p className="font-bold text-accent">Logistics guide</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">{post.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          By {post.author} &middot;{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
        <div className="prose prose-slate mt-10 max-w-none">
          {post.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
        <Button asChild className="mt-10" size="lg">
          <Link href="/get-quote">Request a freight estimate</Link>
        </Button>
      </div>
    </article>
  );
}
