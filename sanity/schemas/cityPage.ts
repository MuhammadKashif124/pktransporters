import { defineField, defineType } from "sanity";
import { seoFields } from "./objects";

export default defineType({
  name: "cityPage",
  title: "City Pages",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "city", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "focusKeyword", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "industrialZones", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "routes", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "testimonials", type: "array", of: [{ type: "reference", to: [{ type: "testimonial" }] }] }),
    defineField({ name: "faqs", type: "array", of: [{ type: "reference", to: [{ type: "faq" }] }] }),
    defineField({ name: "mapEmbedUrl", type: "url" }),
    defineField({ name: "seo", title: "SEO", type: "object", fields: seoFields })
  ]
});
