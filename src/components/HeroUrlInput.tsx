"use client";

import { useState } from "react";

export default function HeroUrlInput() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const base = "https://qa.replay.io";
    const raw = url.trim();
    const normalized = raw && !/^https?:\/\//i.test(raw) ? `https://${raw}` : raw;
    const destination = normalized
      ? `${base}?url=${encodeURIComponent(normalized)}`
      : base;
    window.open(destination, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
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
    </form>
  );
}
