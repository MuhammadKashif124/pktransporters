import { defineField, defineType } from "sanity";
import { seoFields } from "./objects";

export default defineType({
  name: "seoMetadata",
  title: "SEO Metadata",
  type: "document",
  fields: [
    defineField({ name: "pagePath", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "seo", title: "SEO", type: "object", fields: seoFields })
  ]
});
