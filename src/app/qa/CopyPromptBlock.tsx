"use client";

import { useState } from "react";

// Returns the first sentence of the prompt for the collapsed preview.
function firstSentence(text: string): string {
  const match = text.match(/^[\s\S]*?[.!?](?=\s|$)/);
  return (match ? match[0] : text).trim();
}

export default function CopyPromptBlock({
  prompt,
  collapsible = false,
}: {
  prompt: string;
  collapsible?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isCollapsed = collapsible && !expanded;
  const visible = isCollapsed ? firstSentence(prompt) : prompt;

  return (
    <div className="relative rounded-xl border border-brand-pink/30 bg-surface p-6 pr-14">
      <pre className="font-mono text-sm text-foreground leading-relaxed whitespace-pre-wrap break-words">
        {visible}
        {isCollapsed && <span className="text-muted">{" …"}</span>}
      </pre>
      {collapsible && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            className={`stroke-current transition-transform ${expanded ? "rotate-90" : ""}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 3l5 5-5 5" />
          </svg>
          {expanded ? "Show less" : "Show full prompt"}
        </button>
      )}
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
