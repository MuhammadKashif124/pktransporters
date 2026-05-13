import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactInfo",
  title: "Contact Information",
  type: "document",
  fields: [
    defineField({ name: "companyName", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "whatsapp", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "address", type: "text", rows: 3 }),
    defineField({ name: "socialLinks", type: "array", of: [{ type: "url" }] })
  ]
});
