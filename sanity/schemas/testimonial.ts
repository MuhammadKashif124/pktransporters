import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "quote", type: "text", rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: "name", type: "string" }),
    defineField({ name: "company", type: "string" }),
    defineField({ name: "city", type: "string" }),
    defineField({ name: "service", type: "reference", to: [{ type: "service" }] })
  ]
});
