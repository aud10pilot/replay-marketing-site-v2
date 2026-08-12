import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import WarpSpeedBg from "@/components/WarpSpeedBg";
import CIAgentHowItWorks from "./CIAgentHowItWorks";

export const metadata: Metadata = pageMetadata({
  title: "Replay QA for CI — Automated Analysis on Every Test Failure",
  description:
    "Replay QA records every test run, analyzes failures using time-travel data, and posts a root cause and suggested fix as a comment on your PR — automatically.",
  canonical: "/ci-agent",
});

const useCases = [
  {
    title: "Engineering teams at startups",
    description:
      "Moving fast, PRs merging constantly. There's no time to manually debug every CI failure — Replay QA investigates automatically so your team stays focused on shipping.",
  },
  {
    title: "Teams using AI coding agents",
    description:
      "Agents can't fix what they can't see. Replay QA gives them the full runtime picture — every function call, DOM mutation, and network request — so they fix it right the first time.",
  },
  {
    title: "Teams with flaky test suites",
    description:
      "Stop rerrunning until green. Each failure is investigated individually with full runtime evidence — so you know whether it's a real bug or a true flake.",
  },
  {
    title: "Orgs running CI at scale",
    description:
      "Dozens of deploys per day means dozens of potential failures. Human review at that cadence is a bottleneck. Replay QA makes failure analysis automatic infrastructure.",
  },
  {
    title: "Teams adopting Playwright or Cypress",
    description:
      "You invested in a test suite. Replay QA makes that investment pay off — every failure is a learning, not a blocker.",
  },
];

export default function CIAgentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <WarpSpeedBg
          className="absolute inset-0 opacity-30 dark:opacity-40"
          config={{
            speed: 10,
            targetSpeed: 10,
            speedAdjFactor: 0.8,
            density: 0.7,
            starSize: 2,
            warpEffect: true,
            warpEffectLength: 5,
            depthFade: true,
            shape: "square",
            backgroundColor: "#FFFFFF",
            starColor: "hsl(263,45%,7%)",
          }}
          darkConfig={{
            backgroundColor: "hsl(263,45%,7%)",
            starColor: "#FFFFFF",
          }}
        />
        <section className="hero-fade-in relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-20 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
            Replay QA for CI
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Your tests fail.
            <br />
            <span className="text-brand-purple">Replay QA tells you why — and how to fix it.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Replay QA records every test run, analyzes failures using time-travel data, and posts a root cause and suggested fix as a comment on your PR — automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href="https://app.replay.io/sign-up"
              className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
              style={{ background: "var(--brand-gradient)" }}
            >
              Get started free &rarr;
            </a>
            <a
              href="https://docs.replay.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-8 py-3.5 text-base font-medium border border-border hover:border-foreground/30 transition"
            >
              Read the docs &rarr;
            </a>
          </div>
          <p className="text-xs text-muted text-center mt-1">
            Works with Playwright &amp; Cypress &middot; No test code changes required
          </p>
        </section>
      </div>

      {/* Problem */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 leading-tight">
            The test assertion tells you what failed.
            <br />
            <span className="text-brand-purple">Not why.</span>
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Your Playwright test fails. The error says <code className="font-mono text-sm bg-surface border border-border px-1.5 py-0.5 rounded">expect(page.getByTestId(&apos;submit-btn&apos;)).toBeVisible()</code> — timeout after 30 seconds. Why isn&apos;t the button there? Could be a dozen reasons.
            </p>
            <p>
              Your team opens the test, reads the selectors, tries to reproduce locally, adds console.logs, re-runs, waits. Maybe they find it in 20 minutes. Maybe it takes two hours. Maybe they mark it as flaky and move on.
            </p>
            <p>
              Your coding agent tries to help — but without runtime data, it&apos;s guessing from the error message just like you are. It suggests a fix, the test still fails, it tries again, burns tokens, goes in circles.
            </p>
            <p>
              Meanwhile, PRs sit blocked. CI re-runs burn time and money. The team stops trusting the test suite — failures get ignored, flaky tests accumulate, bad code slips through.
            </p>
          </div>
        </section>
      </div>

      {/* How It Works */}
      <CIAgentHowItWorks />

      {/* Comparison Table */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            With Replay QA vs. without
          </h2>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-surface-tinted border-b border-border">
              <div className="px-6 py-3" />
              <div className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-muted border-l border-border">Without Replay</div>
              <div className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-brand-purple border-l border-border">With Replay QA</div>
            </div>
            {[
              {
                label: "Test fails",
                without: "Read error message, guess at cause",
                with: "Agent traces exact failure sequence",
              },
              {
                label: "Root cause",
                without: "Manual reproduction, console.logs, trial and error",
                with: "Identified automatically with confidence score",
              },
              {
                label: "Time to fix",
                without: "30 min to 2+ hours per failure",
                with: "Fix suggestion posted in minutes",
              },
              {
                label: "Flaky tests",
                without: "Marked as flaky, ignored, accumulate",
                with: "Each failure investigated individually with runtime evidence",
              },
              {
                label: "Team impact",
                without: "PRs blocked, CI re-runs burning time and money",
                with: "Developer reads comment, applies fix, merges",
              },
              {
                label: "Effort",
                without: "High — requires deep codebase knowledge",
                with: "Zero — agent does the investigation",
              },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-surface" : "bg-surface-tinted"}`}
              >
                <div className="px-6 py-4 text-sm font-semibold text-foreground">{row.label}</div>
                <div className="px-6 py-4 text-sm text-muted border-l border-border">{row.without}</div>
                <div className="px-6 py-4 text-sm font-semibold text-foreground/80 border-l border-border/50 bg-brand-purple/[0.03]">{row.with}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Use Cases */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-purple mb-4 text-center">
          Use cases
        </p>
        <h2 className="text-3xl font-bold text-center mb-14 leading-tight">
          Who is Replay QA for?
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {useCases.map((uc) => (
            <div key={uc.title} className="rounded-xl border border-border bg-surface p-7">
              <h3 className="text-base font-semibold mb-2">{uc.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{uc.description}</p>
            </div>
          ))}
          <div className="rounded-xl border border-dashed border-brand-purple/40 bg-brand-purple/[0.03] p-7 flex flex-col justify-center">
            <h3 className="text-base font-semibold mb-2">Don&apos;t see your use case?</h3>
            <p className="text-sm text-muted leading-relaxed">
              We want to hear about how you&apos;d like to use Replay QA.{" "}
              <a href="mailto:sales@replay.io" className="text-brand-purple hover:opacity-80 transition">Let&apos;s talk.</a>
            </p>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Fits your existing stack
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-12">
            Swap in Replay in your Playwright or Cypress config and install the GitHub bot. No changes to your test code.
          </p>
          <div className="mb-8">
            <p className="text-xs text-muted/60 uppercase tracking-widest mb-4">
              Test frameworks &amp; CI
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Playwright", logo: "/logos/playwright.svg" },
                { name: "Cypress", logo: "/logos/cypress.svg" },
                { name: "GitHub Actions", logo: "/logos/github-actions.svg" },
                { name: "CircleCI", logo: "/logos/circleci.svg" },
                { name: "Jenkins", logo: "/logos/jenkins.svg" },
              ].map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-border bg-surface px-5 py-2 text-sm inline-flex items-center gap-2"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] dark:invert"
                  />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-muted/60 uppercase tracking-widest mb-4">
              Coding agents
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Claude Code", logo: "/logos/claude.svg" },
                { name: "Codex", logo: "/logos/codex.svg" },
                { name: "Cursor", logo: "/logos/cursor.svg" },
                { name: "Copilot", logo: "/logos/copilot.svg" },
                { name: "Windsurf", logo: "/logos/windsurf.svg" },
              ].map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-brand-purple/30 bg-brand-purple/5 px-5 py-2 text-sm inline-flex items-center gap-2"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] dark:invert"
                  />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Common questions</h2>
        <div className="space-y-2">
          {[
            {
              q: "How does Replay record my tests?",
              a: "Replay works by swapping in a Replay-instrumented browser in your CI config. When a test runs, Replay captures every DOM mutation, network request, and JS execution deterministically — so the recording is a perfect, replayable trace of exactly what happened.",
            },
            {
              q: "What does the analysis include?",
              a: "For each failing test, Replay QA posts a PR comment with: a root cause statement, a confidence score, the exact line of code that caused the failure, and an evidence trail showing the sequence of events leading up to it. If the failure has a clear fix, it includes a suggested code change.",
            },
            {
              q: "Does Replay only work with React?",
              a: "No — Replay works with any JavaScript or TypeScript application. React apps get deeper analysis because Replay can inspect component state and re-renders, but Replay captures full execution data for any JS stack.",
            },
            {
              q: "How long does analysis take?",
              a: "Usually a few minutes after the test run completes. Replay QA posts its analysis as a PR comment, so your developer sees the root cause and suggested fix before they even open the CI logs.",
            },
            {
              q: "What if the analysis is wrong?",
              a: "Replay QA includes a confidence score with every analysis, so you can tell at a glance how certain it is. Every analysis also links to the full recording — you can open it in Replay DevTools and inspect every frame yourself.",
            },
            {
              q: "Does recording slow down my CI?",
              a: "Minimal overhead — comparable to screen recording. Most teams run Replay in CI without noticing a difference in build times.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-surface overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-medium cursor-pointer list-none select-none hover:text-foreground transition [&::-webkit-details-marker]:hidden">
                {faq.q}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-muted flex-shrink-0 transition-transform group-open:rotate-45" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M8 3v10M3 8h10" />
                </svg>
              </summary>
              <div className="px-5 pb-4 pt-3 text-sm text-muted leading-relaxed border-t border-border">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Stop debugging test failures manually.
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
            Replay QA investigates every failure automatically — root cause and fix posted to your PR before you open the logs.
          </p>
          <a
            href="https://app.replay.io/sign-up"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Get started free &rarr;
          </a>
          <p className="text-xs text-muted mt-3">Free plan available &middot; No credit card required</p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
