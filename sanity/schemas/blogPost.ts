import { defineField, defineType } from "sanity";
import { seoFields } from "./objects";

export default defineType({
  name: "blogPost",
  title: "Blog Posts",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "category", type: "string", options: { list: ["logistics guides", "import/export", "freight forwarding", "customs clearance", "Karachi port updates", "transportation industry news", "container transport guides"] } }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({ name: "mainImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({ name: "body", type: "blockContent" }),
    defineField({ name: "faqs", type: "array", of: [{ type: "reference", to: [{ type: "faq" }] }] }),
    defineField({ name: "seo", title: "SEO", type: "object", fields: seoFields })
  ]
});
