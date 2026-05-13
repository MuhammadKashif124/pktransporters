import service from "@/sanity/schemas/service";
import cityPage from "@/sanity/schemas/cityPage";
import blogPost from "@/sanity/schemas/blogPost";
import testimonial from "@/sanity/schemas/testimonial";
import faq from "@/sanity/schemas/faq";
import industry from "@/sanity/schemas/industry";
import location from "@/sanity/schemas/location";
import seo from "@/sanity/schemas/seo";
import homepageSection from "@/sanity/schemas/homepageSection";
import contactInfo from "@/sanity/schemas/contactInfo";
import { blockContent } from "@/sanity/schemas/objects";

export const schemaTypes = [blockContent, service, cityPage, blogPost, testimonial, faq, industry, location, seo, homepageSection, contactInfo];
