import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Logistics Blog Pakistan | Container Transport & Karachi Port Guides",
  description: "SEO topical authority hub for logistics guides, import/export, freight forwarding, customs clearance, Karachi port updates, and container transport.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <Badge>Topical authority hub</Badge>
        <h1 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">Pakistan logistics guides for serious cargo buyers.</h1>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full transition hover:-translate-y-1 hover:shadow-industrial">
                <CardContent>
                  <h2 className="text-xl font-black">{post.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-5 flex items-center gap-2 font-bold text-primary">Read guide <ArrowRight className="h-4 w-4" /></div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
