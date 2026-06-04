"use client";

import { useState } from "react";
import { Link2 } from "lucide-react";

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  function handleCopy() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="pk-share">
      <span className="pk-share-label">Share</span>
      <a href={linkedInHref} target="_blank" rel="noopener noreferrer" className="pk-share-btn" aria-label="Share on LinkedIn">
        <span className="text-xs font-bold">in</span>
      </a>
      <a href={twitterHref} target="_blank" rel="noopener noreferrer" className="pk-share-btn" aria-label="Share on X">
        <span className="text-xs font-bold">𝕏</span>
      </a>
      <button onClick={handleCopy} className="pk-share-btn" aria-label="Copy link">
        {copied ? <span className="text-xs font-medium">Copied!</span> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  );
}
