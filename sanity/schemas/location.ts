import { defineField, defineType } from "sanity";

export default defineType({
  name: "location",
  title: "Locations",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "city", type: "string" }),
    defineField({ name: "address", type: "text", rows: 3 }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "mapEmbedUrl", type: "url" })
  ]
});
