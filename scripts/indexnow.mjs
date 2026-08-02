#!/usr/bin/env node
// Submits all sitemap URLs to IndexNow (Bing, Yandex, Naver, Seznam, etc.)
// Usage: node scripts/indexnow.mjs [url1 url2 ...]
// With no args, submits every URL currently in the sitemap.

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const HOST = "pktransporters.com";
const KEY = "c4a5508c23c242da938e9ebc11a188f3";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function getSitemapUrls() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`);
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  return matches;
}

async function submit(urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow: submitted ${urls.length} URL(s), status ${res.status}`);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error(text);
    process.exitCode = 1;
  }
}

async function main() {
  const argUrls = process.argv.slice(2);
  const urls = argUrls.length > 0 ? argUrls : await getSitemapUrls();
  if (urls.length === 0) {
    console.log("No URLs to submit.");
    return;
  }
  await submit(urls);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
