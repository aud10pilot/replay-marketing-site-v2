"use client";

import { useState } from "react";

export default function CopyPromptBlock({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl border border-brand-pink/30 bg-surface p-6 pr-14">
      <pre className="font-mono text-sm text-foreground leading-relaxed whitespace-pre-wrap break-words">{prompt}</pre>
      <button
        onClick={copy}
        title={copied ? "Copied!" : "Copy to clipboard"}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-surface hover:border-brand-pink/40 hover:text-brand-pink transition text-muted"
      >
        {copied ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-pink">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </div>
  );
}
