import { defineField, defineType } from "sanity";
import { seoFields } from "./objects";

export default defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "heroImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "industries", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "benefits", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "process", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "faqs", type: "array", of: [{ type: "reference", to: [{ type: "faq" }] }] }),
    defineField({ name: "content", type: "blockContent" }),
    defineField({ name: "seo", title: "SEO", type: "object", fields: seoFields })
  ]
});
