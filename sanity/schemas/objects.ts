import { defineField, defineType } from "sanity";

export const seoFields = [
  defineField({ name: "metaTitle", title: "Meta title", type: "string" }),
  defineField({ name: "metaDescription", title: "Meta description", type: "text", rows: 3 }),
  defineField({ name: "keywords", title: "Keywords", type: "array", of: [{ type: "string" }] }),
  defineField({ name: "canonicalPath", title: "Canonical path", type: "string" }),
  defineField({ name: "ogImage", title: "Open Graph image", type: "image", options: { hotspot: true } }),
  defineField({ name: "schemaJson", title: "Custom schema JSON", type: "text", rows: 8 })
];

export const blockContent = defineType({
  name: "blockContent",
  title: "Block content",
  type: "array",
  of: [
    { type: "block" },
    { type: "image", options: { hotspot: true } }
  ]
});
