"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PromoBanner() {
  const pathname = usePathname();
  if (pathname === "/qa") return null;

  return (
    <div
      className="w-full py-2.5 px-4 text-center text-sm text-white flex items-center justify-center gap-3 flex-wrap"
      style={{ background: "var(--brand-gradient)" }}
    >
      <span><strong>Introducing Replay QA:</strong> Test your web apps with confidence</span>
      <Link
        href="/qa"
        className="inline-block rounded-full bg-white/20 hover:bg-white/30 px-3.5 py-1 text-xs font-semibold text-white transition whitespace-nowrap border border-white/30"
      >
        Learn More
      </Link>
    </div>
  );
}
