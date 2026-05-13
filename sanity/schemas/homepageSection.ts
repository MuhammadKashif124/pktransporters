import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepageSection",
  title: "Homepage Sections",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "sectionKey", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "blocks", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "enabled", type: "boolean", initialValue: true })
  ]
});
