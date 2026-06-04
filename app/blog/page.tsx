import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { formatDate, estimateReadingTime } from "@/lib/blog-utils";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Logistics Blog Pakistan | Container Transport & Karachi Port Guides",
  description:
    "Practical guides on container transport, freight forwarding, customs clearance, Karachi port operations, and logistics planning for Pakistan importers and exporters.",
  path: "/blog",
});

const PLACEHOLDER = "/images/blog/welcome.jpg";

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <p className="font-bold text-accent uppercase text-sm tracking-wide">Logistics knowledge base</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black md:text-6xl">
          Pakistan logistics guides for serious cargo buyers.
        </h1>

        {featured && (
          <Link href={`/blog/${featured.slug}`} className="pk-blog-feat-card group mt-10 block">
            {featured.featuredImage && featured.featuredImage !== PLACEHOLDER && (
              <div className="pk-blog-feat-img">
                <Image
                  src={featured.featuredImage}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            )}
            <div className="pk-blog-feat-body">
              {featured.category && <span className="pk-post-category">{featured.category}</span>}
              <h2 className="mt-2 text-2xl font-black md:text-3xl group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="mt-3 text-muted-foreground leading-7">{featured.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 font-bold text-accent">
                Read guide <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        )}

        {rest.length > 0 && (
          <div className="pk-blog-grid mt-10">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="pk-blog-card group block">
                {post.featuredImage && post.featuredImage !== PLACEHOLDER && (
                  <div className="pk-blog-card-img">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                )}
                <div className="pk-blog-card-body">
                  {post.category && <span className="pk-post-category">{post.category}</span>}
                  <h2 className="mt-2 text-lg font-black group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-bold text-accent">
                    Read <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
