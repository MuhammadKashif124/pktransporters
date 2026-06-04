"use client";

import { useEffect, useState } from "react";
import type { TableOfContentsItem } from "@/lib/blog-utils";

export function TableOfContents({ items }: { items: TableOfContentsItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -60% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav className="pk-toc">
      <p className="pk-toc-title">On this page</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: item.level === 3 ? "0.75rem" : "0" }}>
            <a
              href={`#${item.id}`}
              className={`pk-toc-link${activeId === item.id ? " active" : ""}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
