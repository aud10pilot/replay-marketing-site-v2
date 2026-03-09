import Link from "next/link";

export default function PromoBanner() {
  return (
    <div
      className="w-full py-2.5 px-4 text-center text-sm text-white flex items-center justify-center gap-3 flex-wrap"
      style={{ background: "var(--brand-gradient)" }}
    >
      <span>Become a design partner to help shape Replay MCP</span>
      <Link
        href="/design-partner"
        className="inline-block rounded-full bg-white/20 hover:bg-white/30 px-3.5 py-1 text-xs font-semibold text-white transition whitespace-nowrap border border-white/30"
      >
        Apply now
      </Link>
    </div>
  );
}
