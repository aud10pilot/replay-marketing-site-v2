"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Code snippets ────────────────────────────────────────────────────────────

const PLAYWRIGHT_INSTALL = `npm install @replayio/playwright --save-dev`;

const PLAYWRIGHT_CONFIG = `// playwright.config.ts
import { defineConfig } from '@playwright/test';
import { replayReporter, replayDevices } from '@replayio/playwright';

export default defineConfig({
  reporter: [
    ['line'],
    replayReporter({ apiKey: process.env.REPLAY_API_KEY }),
  ],
  projects: [
    {
      name: 'replay-chromium',
      use: { ...replayDevices['Replay Chromium'] },
    },
  ],
});`;

const GITHUB_ACTION = `# .github/workflows/ci.yml
env:
  REPLAY_API_KEY: \${{ secrets.REPLAY_API_KEY }}`;

// ─── Spiral background ────────────────────────────────────────────────────────

function SpiralBg() {
  const rings = [
    { r: 90,  color: "#F02D5E", dash: "56 112", dur: "8s",  dir: "normal" },
    { r: 150, color: "#9089fc", dash: "94 188", dur: "12s", dir: "reverse" },
    { r: 210, color: "#F02D5E", dash: "132 264", dur: "18s", dir: "normal" },
    { r: 270, color: "#9089fc", dash: "170 340", dur: "26s", dir: "reverse" },
    { r: 330, color: "#F02D5E", dash: "207 414", dur: "36s", dir: "normal" },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
      <svg
        width="700"
        height="700"
        viewBox="-350 -350 700 700"
        fill="none"
        aria-hidden="true"
      >
        {rings.map((ring, i) => (
          <circle
            key={i}
            cx={0}
            cy={0}
            r={ring.r}
            stroke={ring.color}
            strokeWidth={1.5}
            strokeDasharray={ring.dash}
            opacity={0.12}
            style={{
              animation: `spin-ring ${ring.dur} linear infinite`,
              animationDirection: ring.dir as "normal" | "reverse",
              transformOrigin: "center",
            }}
          />
        ))}
        {/* Center dot */}
        <circle cx={0} cy={0} r={4} fill="#F02D5E" opacity={0.4} />
      </svg>
    </div>
  );
}

// ─── Animated CI run stream ───────────────────────────────────────────────────

function CIRunStream() {
  return (
    <div className="w-full max-w-xl mx-auto mt-12 rounded-xl border border-border bg-[#0d0f14] overflow-hidden shadow-2xl shadow-black/40">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#111318]">
        <span className="w-3 h-3 rounded-full bg-brand-pink opacity-70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-50" />
        <span className="w-3 h-3 rounded-full bg-green-500 opacity-50" />
        <span className="ml-3 text-xs text-muted font-mono">
          github actions — ci.yml
        </span>
      </div>

      {/* Run rows */}
      <div className="divide-y divide-border/50">
        {/* Failed runs — these animate in */}
        {[
          { n: 142, t: "1m 47s" },
          { n: 143, t: "2m 03s" },
          { n: 144, t: "1m 58s" },
        ].map((run, i) => (
          <div
            key={run.n}
            className="flex items-center justify-between px-4 py-3 ci-row-fail"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="flex items-center gap-3">
              <span className="text-brand-pink">✗</span>
              <div>
                <p className="text-xs font-mono text-foreground/80">
                  Run #{run.n}
                </p>
                <p className="text-xs text-muted font-mono">
                  checkout · install · test
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted">{run.t}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-brand-pink/10 text-brand-pink font-mono border border-brand-pink/20">
                FAILED
              </span>
            </div>
          </div>
        ))}

        {/* Replay row — the magic one */}
        <div className="flex items-start justify-between px-4 py-4 bg-brand-purple/5 border-brand-purple/20 border-t ci-row-replay">
          <div className="flex items-start gap-3">
            <Image
              src="/logo.svg"
              alt="Replay"
              width={14}
              height={16}
              className="mt-0.5 opacity-90"
            />
            <div>
              <p className="text-xs font-mono text-foreground/90">
                Run #145
                <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-brand-purple recording-pulse align-middle" />
              </p>
              <p className="text-xs text-muted font-mono">
                checkout · install · test
              </p>
              <div className="mt-2 space-y-1">
                <p className="text-xs font-mono text-brand-purple">
                  ↳ Replay captured 1 failure
                </p>
                <p className="text-xs font-mono text-muted/80">
                  Root cause: Race condition in{" "}
                  <span className="text-foreground/70">
                    useAsyncValidator
                  </span>{" "}
                  cleanup
                </p>
                <p className="text-xs font-mono text-green-400">
                  ✓ Fix shipped — commit a7f3d92
                </p>
              </div>
            </div>
          </div>
          <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-400 font-mono border border-green-500/20 whitespace-nowrap mt-0.5">
            FIXED
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Code block ───────────────────────────────────────────────────────────────

function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="relative rounded-lg bg-[#0d0f14] border border-border overflow-hidden">
      {label && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-[#111318]">
          <span className="text-xs font-mono text-muted">{label}</span>
          <button
            onClick={copy}
            className="text-xs font-mono text-muted hover:text-foreground transition px-2 py-0.5 rounded border border-border hover:border-foreground/20 cursor-pointer"
          >
            {copied ? "copied ✓" : "copy"}
          </button>
        </div>
      )}
      <pre className="p-4 text-xs font-mono text-foreground/80 overflow-x-auto leading-relaxed whitespace-pre">
        {code}
      </pre>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function CILandingPage() {

  return (
    <>
      <style>{`
        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes recording-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
        .recording-pulse {
          animation: recording-pulse 1.2s ease-in-out infinite;
        }
        @keyframes ci-fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ci-row-fail {
          animation: ci-fade-up 0.5s ease both;
        }
        .ci-row-replay {
          animation: ci-fade-up 0.6s ease 0.5s both;
        }
        @keyframes hero-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-in {
          animation: hero-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .step-line::before {
          content: '';
          position: absolute;
          left: 19px;
          top: 48px;
          bottom: -32px;
          width: 1px;
          background: linear-gradient(to bottom, var(--border), transparent);
        }
      `}</style>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pt-16 pb-8 text-center">
        <SpiralBg />

        <div className="relative z-10 max-w-3xl mx-auto hero-in">
          {/* Ad match badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink recording-pulse" />
            Replay CI · Root Cause Analysis
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            Every flaky test in CI{" "}
            <span className="text-brand-pink">is your agent guessing.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Replay records the failure, finds the root cause, and ships the fix.{" "}
            <span className="text-foreground font-medium">Automatically.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <a
              href="https://docs.replay.io/reference/test-runners/playwright/installation"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
              style={{ background: "var(--brand-gradient)" }}
            >
              <PlaywrightIcon />
              Connect Playwright
            </a>
          </div>

          <p className="text-xs text-muted font-mono">
            Works with GitHub Actions · CircleCI · Jenkins · Any CI provider
          </p>
        </div>

        <CIRunStream />
      </section>

      {/* ── THE LOOP ───────────────────────────────────────────────────────── */}
      <div className="bg-surface-tinted mt-16">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              The loop you&rsquo;re stuck in.
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Without a recording, your agent has one tool: guessing. And guessing
              creates more flakes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="rounded-xl border border-brand-pink/20 bg-brand-pink/5 p-8">
              <p className="text-xs font-mono uppercase tracking-widest text-brand-pink mb-5">
                Without Replay
              </p>
              <div className="space-y-3">
                {[
                  "Test fails in CI",
                  "Agent receives a stack trace",
                  "Agent patches what it can see",
                  "Test fails again, differently",
                  "Agent patches again",
                  "Repeat. Indefinitely.",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-brand-pink/30 bg-brand-pink/10 text-brand-pink text-xs flex items-center justify-center flex-shrink-0">
                      {i < 5 ? i + 1 : "∞"}
                    </span>
                    <span
                      className={`text-sm ${
                        i === 5 ? "text-brand-pink font-medium" : "text-muted"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="rounded-xl border border-brand-purple/20 bg-brand-purple/5 p-8">
              <p className="text-xs font-mono uppercase tracking-widest text-brand-purple mb-5">
                With Replay
              </p>
              <div className="space-y-3">
                {[
                  "Test fails in CI",
                  "Replay records the full execution",
                  "GitHub Bot triggers root cause analysis",
                  "Agent receives the recording + diagnosis",
                  "Agent ships the correct fix",
                  "Done. First time.",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span
                      className={`w-5 h-5 rounded-full border text-xs flex items-center justify-center flex-shrink-0 ${
                        i === 5
                          ? "border-green-500/40 bg-green-500/10 text-green-400"
                          : "border-brand-purple/30 bg-brand-purple/10 text-brand-purple"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`text-sm ${
                        i === 5 ? "text-green-400 font-medium" : "text-muted"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────────── */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Connect Replay to your CI in 3 steps.
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Under 30 minutes from zero to automated root cause analysis on every
            test failure.
          </p>
        </div>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="relative flex gap-6 step-line">
            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-sm font-bold font-mono z-10">
              1
            </div>
            <div className="flex-1 pt-1.5 pb-8">
              <h3 className="text-lg font-semibold mb-2">
                Install the Replay test runner
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                Drop in our Playwright plugin. Your tests run
                identically — Replay just records every execution in CI.
              </p>

              <CodeBlock code={PLAYWRIGHT_INSTALL} label="terminal" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex gap-6 step-line">
            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-sm font-bold font-mono z-10">
              2
            </div>
            <div className="flex-1 pt-1.5 pb-8">
              <h3 className="text-lg font-semibold mb-2">
                Configure the reporter
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                Add the Replay reporter to your config. This is what tells
                Replay to record and upload failures to your team&rsquo;s
                workspace.
              </p>
              <CodeBlock code={PLAYWRIGHT_CONFIG} label="playwright.config.ts" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-brand-purple/40 bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm font-bold font-mono z-10">
              3
            </div>
            <div className="flex-1 pt-1.5">
              <h3 className="text-lg font-semibold mb-2">
                Add your API key and install the GitHub Bot
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                Add{" "}
                <code className="text-xs bg-surface px-1.5 py-0.5 rounded border border-border font-mono">
                  REPLAY_API_KEY
                </code>{" "}
                to your GitHub repository secrets. Then install the Replay
                GitHub Bot — it watches every PR from here on out.
              </p>
              <CodeBlock code={GITHUB_ACTION} label=".github/workflows/ci.yml" />
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://docs.replay.io/reference/test-runners/playwright/installation"
                  className="inline-block text-sm font-medium text-brand-purple hover:opacity-80 transition"
                >
                  Playwright setup guide →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GITHUB BOT ─────────────────────────────────────────────────────── */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-brand-purple mb-4">
                The Replay GitHub Bot
              </p>
              <h2 className="text-3xl font-bold mb-5 leading-tight">
                It watches your PRs so you don&rsquo;t have to.
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Install the Replay GitHub Bot on your repository. On every pull
                request, it monitors your CI runs, detects test failures, pulls
                the recordings Replay captured, and runs automated root cause
                analysis — then posts the diagnosis directly in your PR.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  {
                    icon: "⬤",
                    color: "text-brand-pink",
                    text: "Detects failing tests across every PR",
                  },
                  {
                    icon: "⬤",
                    color: "text-brand-purple",
                    text: "Pulls recordings from Replay's servers",
                  },
                  {
                    icon: "⬤",
                    color: "text-brand-purple",
                    text: "Runs root cause analysis via Replay MCP",
                  },
                  {
                    icon: "⬤",
                    color: "text-green-400",
                    text: "Posts the diagnosis + fix suggestion to the PR",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`${item.color} text-xs mt-1`}>
                      {item.icon}
                    </span>
                    <span className="text-sm text-muted">{item.text}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://github.com/apps/replay-io"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
                style={{ background: "var(--brand-gradient)" }}
              >
                <GitHubIcon />
                Install the GitHub Bot
              </a>
            </div>

            {/* PR Comment mockup */}
            <div className="rounded-xl border border-border bg-[#0d0f14] overflow-hidden shadow-xl shadow-black/30">
              {/* PR header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-[#111318]">
                <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center">
                  <Image
                    src="/logo.svg"
                    alt="Replay"
                    width={10}
                    height={12}
                  />
                </div>
                <span className="text-xs font-mono text-muted">
                  replay-bot commented on PR #312
                </span>
                <span className="ml-auto text-xs text-muted">just now</span>
              </div>

              <div className="p-5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-brand-pink/10 text-brand-pink border border-brand-pink/20 font-mono">
                    1 failure detected
                  </span>
                  <span className="text-xs text-muted font-mono">
                    checkout-flow.spec.ts
                  </span>
                </div>

                <div className="text-sm text-muted leading-relaxed border-l-2 border-brand-purple/40 pl-4">
                  <p className="font-medium text-foreground/90 mb-1">
                    Root cause identified
                  </p>
                  <p className="text-xs">
                    The{" "}
                    <code className="text-brand-purple bg-brand-purple/10 px-1 rounded">
                      usePaymentValidation
                    </code>{" "}
                    hook fires before the async address lookup resolves. The
                    test assertion at line 47 catches stale state.
                  </p>
                </div>

                <div className="rounded-lg bg-[#111318] border border-border p-3">
                  <p className="text-xs font-mono text-muted mb-2">
                    Suggested fix · PaymentFlow.tsx:47
                  </p>
                  <pre className="text-xs font-mono text-green-400 leading-relaxed">{`- await validateForm()
+ await addressLookup.resolved
+ await validateForm()`}</pre>
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-xs font-mono text-brand-purple hover:opacity-80 transition"
                  >
                    View recording →
                  </a>
                  <a
                    href="#"
                    className="text-xs font-mono text-muted hover:text-foreground transition"
                  >
                    Open in Replay DevTools →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── SOCIAL PROOF ───────────────────────────────────────────────────── */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">
          Teams shipping faster
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "If I don't immediately know the answer to a bug, I immediately reach for Replay.io. It's like HMR for repros.",
              name: "Sebastian Markbåge",
              role: "React Maintainer",
            },
            {
              quote:
                "Next.js App Router is now stable in 13.4. Wouldn't have been possible without Replay — we investigated so many super complicated bugs.",
              name: "Tim Neutkins",
              role: "Co-author of Next.js",
              company: "Vercel",
              logo: "/logos/vercel.svg",
            },
            {
              quote:
                "The tools we were using before were barely better than useless. You'd spend 2–3 days trying to recreate issues. Replay ends that.",
              name: "Shane Duff",
              role: "Front End Lead",
              company: "Pantheon",
              logo: "/logos/pantheon.png",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-surface p-6 flex flex-col"
            >
              <blockquote className="text-sm leading-relaxed text-muted mb-4 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm">
                  <span className="font-semibold text-foreground">
                    {t.name}
                  </span>
                  <br />
                  <span className="text-muted text-xs">
                    {t.role}
                    {t.company && `, ${t.company}`}
                  </span>
                </div>
                {t.logo && (
                  <Image
                    src={t.logo}
                    alt={t.company || ""}
                    width={64}
                    height={20}
                    className="h-4 w-auto object-contain opacity-40 dark:invert flex-shrink-0"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Stop guessing.{" "}
            <span className="text-brand-pink">Start recording.</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-10 text-lg">
            Every CI failure is a recording waiting to happen. Connect Replay
            today — free to get started, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <a
              href="https://docs.replay.io/reference/test-runners/playwright/installation"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white hover:opacity-90 transition"
              style={{ background: "var(--brand-gradient)" }}
            >
              <PlaywrightIcon />
              Connect Playwright
            </a>
          </div>
          <a
            href="https://docs.replay.io"
            className="text-sm text-muted hover:text-foreground transition font-mono"
          >
            Read the full docs →
          </a>
        </section>
      </div>
    </>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function PlaywrightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 8l6 4-6 4V8z" fill="currentColor" />
    </svg>
  );
}


function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}
