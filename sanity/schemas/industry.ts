import { defineField, defineType } from "sanity";
import { seoFields } from "./objects";

export default defineType({
  name: "industry",
  title: "Industries",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "services", type: "array", of: [{ type: "reference", to: [{ type: "service" }] }] }),
    defineField({ name: "seo", title: "SEO", type: "object", fields: seoFields })
  ]
});
