# Future SEO Fixes

Items that require design work, external accounts, or infrastructure that cannot be completed in code alone.

---

## 1. Create and self-host OG images

**What:** The current `defaultOgImage` in `lib/site.ts` points to an Unsplash stock photo. All 45+ pages share the same image.

**Why it matters:** Social sharing previews are identical for every URL. Broken or rate-limited Unsplash URLs would silently break all OG metadata.

**How to fix:**
1. Design a branded 1200×630px default OG image using your logo and brand colours.
2. Save it to `/public/og/default.jpg`.
3. Update `lib/site.ts`: change `defaultOgImage` to `/og/default.jpg`.
4. Create page-specific OG images for high-value pages (homepage, Karachi port logistics, container services) and pass them via the `ogImage` parameter in `createMetadata()`.

---

## 2. Add logo file and update Organization schema

**What:** The `organizationSchema()` in `lib/schema.ts` has no `logo` field. A logo strengthens Knowledge Graph signals.

**How to fix:**
1. Export a square PNG logo (minimum 512×512px) to `/public/logo.png`.
2. Add to `organizationSchema()` in `lib/schema.ts`:
   ```ts
   logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png"), width: 512, height: 512 }
   ```

---

## 3. Add social media profiles to Organization schema (`sameAs`)

**What:** The `sameAs` field in `organizationSchema()` is currently an empty array. Google uses these links to confirm the business entity across platforms.

**How to fix:**
Once social profiles are created (LinkedIn, Facebook, Twitter/X, etc.), add their URLs:
```ts
sameAs: [
  "https://www.linkedin.com/company/pktransporters",
  "https://www.facebook.com/pktransporters",
  // add others as they are created
]
```
Update `lib/schema.ts` → `organizationSchema()`.

---

## 4. Add Twitter/X handle to metadata

**What:** `createMetadata()` in `lib/site.ts` does not include a `twitter.site` handle.

**How to fix:**
Once a Twitter/X account is created, add to the `twitter` object in `createMetadata()`:
```ts
twitter: {
  card: "summary_large_image",
  site: "@pktransporters",  // ← add this
  title,
  description,
  images: [image]
}
```

---

## 5. Build real shipment tracking functionality

**What:** `/track-shipment` is currently a non-functional placeholder. It is noindexed in the current build to avoid it being crawled as thin content.

**How to fix:**
Options in order of complexity:
- **Option A:** Connect to a carrier or freight management system API that returns container or booking status.
- **Option B:** Build a simple lookup against a Sanity dataset where ops staff manually update shipment statuses.
- **Option C:** Redirect `/track-shipment` to a WhatsApp message pre-filled with "Track shipment" as a low-friction alternative.

Once functional, remove the `robots: { index: false, follow: false }` from `app/track-shipment/page.tsx`.

---

## 6. Submit sitemap to Google Search Console and Bing Webmaster Tools

**What:** The sitemap at `https://www.pktransporters.com/sitemap.xml` is referenced in `robots.txt` but must be manually submitted to Search Console and Bing to prompt indexing of all 45 URLs.

**How to fix:**
1. Verify the domain at [Google Search Console](https://search.google.com/search-console) using DNS TXT or HTML file verification.
2. Submit `https://www.pktransporters.com/sitemap.xml` in the Sitemaps report.
3. Repeat at [Bing Webmaster Tools](https://www.bing.com/webmasters).
4. Monitor the Coverage report weekly for any indexation errors.

---

## 7. Monitor and improve Core Web Vitals

**What:** Core Web Vitals (LCP, INP, CLS) have not been measured. These are Google ranking signals.

**How to fix:**
1. Run [PageSpeed Insights](https://pagespeed.web.dev/) on the homepage, one service page, and one blog post.
2. Fix the top 2–3 issues reported (typically image sizes, render-blocking scripts, or layout shift from fonts/images).
3. Check the Core Web Vitals report in Google Search Console after 28 days of field data accumulates.

---

## 8. Expand blog content (ongoing)

**What:** The blog currently has 5 posts. Topical authority in logistics requires consistent publishing across related topics.

**Suggested topics:**
- Pakistan customs clearance step-by-step (WeBOC walkthrough)
- How to read a bill of lading — a guide for Pakistan importers
- Karachi Port vs Port Qasim: which is better for your cargo?
- Afghanistan transit cargo guide for Pakistani forwarders
- How to choose container size for textile exports
- Faisalabad to Karachi Port: export container logistics
- Common import mistakes at Karachi Port and how to avoid them
- CPEC cargo routes and logistics implications for Pakistani businesses

**Target cadence:** 2 posts per month minimum to build topical authority within 6 months.

---

## 9. Add Google Business Profile

**What:** No Google Business Profile (GBP) is claimed for PK Transporters. This affects local search visibility and the branded Knowledge Panel on Google.

**How to fix:**
1. Claim or create the profile at [Google Business](https://business.google.com).
2. Set business category to "Freight Forwarding Service" and/or "Logistics Service".
3. Add accurate NAP (Name, Address, Phone), business hours, photos, and services.
4. Add the GBP URL to the `sameAs` array in `organizationSchema()`.

---

## 10. Set update date constants when content changes

**What:** `app/sitemap.ts` uses fixed date constants (`STATIC_PAGE_DATE`, `SERVICE_DATE`, `LOCATION_DATE`). These need to be manually updated when the corresponding content changes, so Google recrawls updated pages promptly.

**How to update:**
When you meaningfully update content on service pages, city pages, or static pages, update the relevant constant in `app/sitemap.ts` to the date of the change. This signals to Google that the page has been updated and should be recrawled.
