import Link from "next/link";

export default function AudienceSplit() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
        <p className="text-2xl mb-3">
          <span role="img" aria-label="tools">🛠</span>
        </p>
        <h3 className="text-lg font-semibold mb-2">Building with an IDE?</h3>
        <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
          The browser extension is the fastest way to your first Replay
          recording — install in seconds, no setup required. Ready for more?
          Replay MCP connects directly to your coding agent for automated
          root-cause analysis and specific fixes.
        </p>
        <Link
          href="/for-engineers"
          className="inline-block rounded-full px-6 py-3 text-sm font-medium text-white text-center hover:opacity-90 transition"
          style={{ background: "var(--brand-gradient)" }}
        >
          Get started &rarr;
        </Link>
      </div>

      <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
        <p className="text-2xl mb-3">
          <span role="img" aria-label="art">🎨</span>
        </p>
        <h3 className="text-lg font-semibold mb-2">
          Building with Lovable, Replit, or Base44?
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
          The Replay extension is your primary tool — record a bug in Chrome,
          get a fix to paste straight into your AI. No coding required. Also
          using Cursor or Claude Code? Replay MCP works there too.
        </p>
        <Link
          href="/for-vibe-coders"
          className="inline-block rounded-full px-6 py-3 text-sm font-medium text-white text-center hover:opacity-90 transition"
          style={{ background: "var(--brand-gradient)" }}
        >
          Install Extension &rarr;
        </Link>
      </div>
    </div>
  );
}
