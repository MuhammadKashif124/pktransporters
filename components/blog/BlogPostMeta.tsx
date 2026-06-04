import { formatDate } from "@/lib/blog-utils";
import type { BlogPost } from "@/lib/blog-posts";

export function BlogPostMeta({
  post,
  readingTime,
}: {
  post: BlogPost;
  readingTime: number;
}) {
  return (
    <div className="pk-post-meta">
      {post.category && (
        <span className="pk-post-category">{post.category}</span>
      )}
      <span className="pk-post-meta-sep">·</span>
      <span>{post.author}</span>
      <span className="pk-post-meta-sep">·</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span className="pk-post-meta-sep">·</span>
      <span>{readingTime} min read</span>
    </div>
  );
}
