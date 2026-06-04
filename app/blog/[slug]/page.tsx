import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllBlogPostSlugs, getBlogPostBySlug, getBlogPostContentWithHtml } from "@/lib/blog-posts";
import { addHeadingIds, extractHeadings, estimateReadingTime } from "@/lib/blog-utils";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogPostMeta } from "@/components/blog/BlogPostMeta";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

const PLACEHOLDER = "/images/blog/welcome.jpg";
const SITE_NAME = "PK Transporters";

export async function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  const url = absoluteUrl(`/blog/${slug}`);
  return {
    title: { absolute: post.seoTitle || `${post.title} | ${SITE_NAME}` },
    description: post.seoDescription || post.excerpt,
    robots: {
      index: post.noindex === true ? false : true,
      follow: post.nofollow === true ? false : true,
    },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images:
        post.featuredImage && post.featuredImage !== PLACEHOLDER
          ? [{ url: post.featuredImage, width: 1200, height: 630 }]
          : [],
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const rawHtml = await getBlogPostContentWithHtml(slug);
  const contentHtml = addHeadingIds(rawHtml);
  const tocItems = extractHeadings(contentHtml);
  const readingTime = estimateReadingTime(contentHtml);
  const pageUrl = absoluteUrl(`/blog/${slug}`);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  return (
    <article>
      <JsonLd data={articleSchema(post)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <div className="pk-post-hero">
        <div className="pk-post-hero-inner">
          <nav className="pk-post-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>
          <h1 className="mt-4 text-3xl font-black text-white md:text-5xl">{post.title}</h1>
          <BlogPostMeta post={post} readingTime={readingTime} />
        </div>
      </div>

      {/* Featured image */}
      {post.featuredImage && post.featuredImage !== PLACEHOLDER && (
        <div className="mx-auto max-w-5xl px-4">
          <div className="pk-post-cover">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="pk-post-cover-img object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
      )}

      {/* YouTube embed */}
      {post.youtubeId && (
        <div className="mx-auto max-w-5xl px-4 mt-8">
          <div className="pk-youtube">
            <iframe
              src={`https://www.youtube.com/embed/${post.youtubeId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={post.title}
            />
          </div>
        </div>
      )}

      {/* Layout: content + TOC sidebar */}
      <div className="mx-auto max-w-5xl px-4 pb-20">
        <div className="pk-post-layout">
          <div>
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="pk-post-tags mt-10">
                {post.tags.map((tag) => (
                  <span key={tag} className="pk-post-tag">#{tag}</span>
                ))}
              </div>
            )}

            <ShareButtons title={post.title} url={pageUrl} />

            <div className="mt-10 border-t pt-8">
              <p className="text-sm text-muted-foreground">
                Written by <strong>{post.author}</strong>
              </p>
            </div>

            <div className="mt-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">
                ← Back to blog
              </Link>
            </div>
          </div>

          {/* TOC sidebar */}
          <aside>
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </article>
  );
}
