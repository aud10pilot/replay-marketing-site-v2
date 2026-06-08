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
    <div className="relative rounded-xl border border-brand-pink/30 bg-surface p-6 pr-24">
      <p className="font-mono text-sm text-foreground leading-relaxed">{prompt}</p>
      <button
        onClick={copy}
        className="absolute top-1/2 -translate-y-1/2 right-4 rounded-full px-4 py-1.5 text-xs font-semibold border border-border bg-surface hover:border-brand-pink/40 hover:text-brand-pink transition text-muted whitespace-nowrap"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
