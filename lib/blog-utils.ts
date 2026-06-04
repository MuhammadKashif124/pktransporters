export interface TableOfContentsItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export function getPublishTimestamp(dateValue: string | Date | undefined): number {
  if (!dateValue) return 0;
  if (dateValue instanceof Date) return dateValue.getTime();
  const d = new Date(dateValue);
  return isNaN(d.getTime()) ? 0 : d.getTime();
}

export function formatDate(dateValue: string | Date | undefined): string {
  if (!dateValue) return "";
  const d = new Date(dateValue);
  if (isNaN(d.getTime())) return String(dateValue);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function decodeHTMLEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

export function extractHeadings(html: string): TableOfContentsItem[] {
  const headings: TableOfContentsItem[] = [];
  const regex = /<h([23])[^>]*>(.*?)<\/h[23]>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1]) as 2 | 3;
    const raw = match[2].replace(/<[^>]+>/g, "");
    const text = decodeHTMLEntities(raw);
    const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    headings.push({ id, text, level });
  }
  return headings;
}

export function addHeadingIds(html: string): string {
  return html.replace(/<h([23])>(.*?)<\/h[23]>/gi, (_match, level, inner) => {
    const text = inner.replace(/<[^>]+>/g, "");
    const id = decodeHTMLEntities(text)
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });
}

export function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}
