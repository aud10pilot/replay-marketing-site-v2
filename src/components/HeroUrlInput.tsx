"use client";

import { useState } from "react";

export default function HeroUrlInput({ showGitHubLink = true }: { showGitHubLink?: boolean }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const base = "https://qa.replay.io/new";
    const raw = url.trim();
    const normalized = raw && !/^https?:\/\//i.test(raw) ? `https://${raw}` : raw;
    const destination = normalized
      ? `${base}?url=${encodeURIComponent(normalized)}`
      : base;
    window.open(destination, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="flex items-center rounded-full border border-border bg-surface shadow-lg px-2 py-2 gap-2 transition-all focus-within:border-[#F02D5E]/40 focus-within:shadow-[0_0_0_3px_rgba(240,45,94,0.15)]">
        <input
          type="text"
          inputMode="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="your-app.com"
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted/60 outline-none pl-4 min-w-0"
        />
        <button
          type="submit"
          className="flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition whitespace-nowrap"
          style={{ background: "var(--brand-gradient)" }}
        >
          Test my app for free
        </button>
      </div>
      <p className="text-xs text-muted text-center mt-3">
        No test suite &middot; No credit card &middot; Just a URL
      </p>
      {showGitHubLink && (
        <p className="flex flex-wrap items-center justify-center gap-x-1.5 text-xs text-muted mt-6">
          <span>Using GitHub?</span>
          <a
            href="https://qa.replay.io/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-brand-pink hover:opacity-80 transition"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Connect a GitHub repo for continuous testing &rarr;
          </a>
        </p>
      )}
    </form>
  );
}
