import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { getPublishTimestamp } from "./blog-utils";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  excerpt: string;
  youtubeId?: string;
  seoTitle?: string;
  seoDescription?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

function readPostFile(slug: string): { data: BlogPost; content: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const { slug: _ignored, ...frontmatter } = data as BlogPost & { slug?: string };
  return {
    data: {
      slug,
      title: frontmatter.title || "",
      date: frontmatter.date || "",
      author: frontmatter.author || "",
      category: frontmatter.category || "",
      tags: frontmatter.tags || [],
      featuredImage: frontmatter.featuredImage || "",
      excerpt: frontmatter.excerpt || "",
      youtubeId: frontmatter.youtubeId,
      seoTitle: frontmatter.seoTitle,
      seoDescription: frontmatter.seoDescription,
      noindex: frontmatter.noindex,
      nofollow: frontmatter.nofollow,
    },
    content,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const result = readPostFile(slug);
      return result?.data ?? null;
    })
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => getPublishTimestamp(b.date) - getPublishTimestamp(a.date));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return readPostFile(slug)?.data ?? null;
}

export async function getBlogPostContentWithHtml(slug: string): Promise<string> {
  const result = readPostFile(slug);
  if (!result) return "";
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(result.content);
  return processed.toString();
}

export function getAllBlogPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
