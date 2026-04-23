"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "https://docs.replay.io/basics/replay-mcp/overview", label: "Docs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative z-50 px-6 py-5 max-w-6xl mx-auto">
      <div className="relative flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="Replay" width={24} height={28} />
          <span className="text-xl font-bold tracking-tight">Replay</span>
        </Link>

        {/* Desktop: centered links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-muted absolute left-1/2 -translate-x-1/2">
          {links.map((l) => {
            const isCurrent = pathname === l.href;
            const isExternal = l.href.startsWith("http");
            const className = `transition whitespace-nowrap ${
              isCurrent
                ? "text-brand-pink font-medium"
                : "hover:text-foreground"
            }`;
            return isExternal ? (
              <a key={l.href} href={l.href} className={className}>
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={l.href} className={className}>
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop: right actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://app.replay.io/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-muted border border-border hover:text-foreground hover:border-foreground/20 transition"
          >
            Sign In
          </a>
          <a
            href="https://app.replay.io/sign-up"
            className="rounded-full px-4 py-2 text-sm font-medium text-white transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Sign Up
          </a>
        </div>

        {/* Mobile: toggle + theme */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted hover:text-foreground hover:border-foreground/20 transition cursor-pointer"
          >
            {open ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 pb-2 flex flex-col gap-4 border-t border-border pt-4">
          {links.map((l) => {
            const isCurrent = pathname === l.href;
            const isExternal = l.href.startsWith("http");
            const className = `text-sm transition ${
              isCurrent
                ? "text-brand-pink font-medium"
                : "text-muted hover:text-foreground"
            }`;
            return isExternal ? (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={className}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={className}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href="https://app.replay.io/login"
            onClick={() => setOpen(false)}
            className="rounded-full px-4 py-2.5 text-sm font-medium text-muted border border-border text-center transition"
          >
            Sign In
          </a>
          <a
            href="https://app.replay.io/sign-up"
            onClick={() => setOpen(false)}
            className="rounded-full px-4 py-2.5 text-sm font-medium text-white text-center transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}
