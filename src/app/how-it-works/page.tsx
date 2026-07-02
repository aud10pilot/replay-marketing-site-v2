import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import LoopQAHowItWorks from "@/app/qa/LoopQAHowItWorks";
import CopyPromptBlock from "@/app/qa/CopyPromptBlock";
import HeroUrlInput from "@/components/HeroUrlInput";

export const metadata: Metadata = {
  title: "How Replay QA Works",
  description:
    "From URL to bug report — automatically. See how Replay QA explores your app, records every session, and delivers root cause and fix for every bug it finds.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How Replay QA Works",
    description:
      "From URL to bug report — automatically. See how Replay QA explores your app, records every session, and delivers root cause and fix for every bug it finds.",
  },
};

const FULL_PROMPT = `Set up a continuous QA loop for the app we're building using Replay QA (https://loop-qa.replay.io).

Drive everything through the REST API at https://loop-qa.replay.io/api/v1 — read the OpenAPI spec at /api/v1/openapi.json first; it documents the full workflow. Authenticate with my API token ("Authorization: Bearer lqa_..."), asking me for it if needed.

Your job:
1. Create a QA project for the running app — give it the target_url and a short note on the key flows. If the app is only reachable from this machine (e.g. http://localhost:3000), enable the reverse proxy and follow the spec's setup steps.
2. Let QA run — poll the project status and don't kick off explorations or test runs yourself; QA drives those.
3. For each open bug, read its full root-caused report and apply the fix directly in the codebase, then mark it fixed via the API.
4. Keep looping until no open bugs remain.`;

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="hero-fade-in flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
          How it works
        </span>
        <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
          From URL to bug report.
          <br />
          <span className="text-brand-pink">Automatically.</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Give Replay QA a URL. It explores your app, records every session with our time-travel debugger, and delivers a root cause and suggested fix for every bug it finds.
        </p>
      </section>

      {/* How it works stepper */}
      <div className="bg-surface-tinted">
        <LoopQAHowItWorks />
      </div>

      {/* GitHub repo integration — continuous quality gate */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
          Testing continuously
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 leading-tight">
          Connect your GitHub repo
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          The URL drop is a run-it-once check. When you want a quality gate that stays on as your team ships, connect a repo instead &mdash; same autonomous QA, running on every change. No test suite, no pipeline config.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              number: "01",
              title: "Add your repo URL",
              description:
                "Paste a link to your GitHub repository — the same “paste a link to your thing” pattern as the URL drop.",
            },
            {
              number: "02",
              title: "Authenticate with GitHub",
              description:
                "Sign in with your GitHub account. One technical lead can complete setup — no procurement, no engineering ticket.",
            },
            {
              number: "03",
              title: "The Replay QA app installs",
              description:
                "The GitHub app installs on your repo. No existing Playwright suite, no playwright.config.ts changes, no separate bot to wire up.",
            },
            {
              number: "04",
              title: "Choose your run cadence",
              description:
                "Run on every main-branch update, on every pull request, or both. On PRs, root cause and a suggested fix are posted right on the pull request.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-border bg-surface p-6 flex flex-col"
            >
              <span className="text-sm font-bold tabular-nums text-brand-pink mb-3">
                {step.number}
              </span>
              <h3 className="text-base font-semibold mb-2 leading-snug">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="https://qa.replay.io/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Connect your GitHub repo
          </a>
        </div>
      </section>

      {/* What you get — bug report example */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
          What you get
        </p>
        <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
          Root cause. Suggested fix. Full recording.
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12">
          Every bug Replay QA finds comes with everything your agent needs to fix it &mdash; not just &ldquo;something broke.&rdquo;
        </p>
        <div className="rounded-xl border border-border bg-surface overflow-hidden text-sm">
          <div className="px-5 py-3 border-b border-border bg-surface-tinted flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">Bug found</span>
            </div>
            <span className="text-xs text-muted">confidence: high</span>
          </div>
          <div className="px-6 py-5 border-b border-border">
            <p className="font-semibold text-base">Checkout button does nothing on mobile Safari</p>
          </div>
          <div className="px-6 py-5 border-b border-border">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Root cause</p>
            <p className="text-sm text-foreground leading-relaxed">
              <code className="bg-surface-tinted px-1.5 py-0.5 rounded font-mono text-xs">handleSubmit</code> is never called because the button is rendered outside the{" "}
              <code className="bg-surface-tinted px-1.5 py-0.5 rounded font-mono text-xs">{"<form>"}</code>{" "}
              element after the responsive layout change on screens under 768px.
            </p>
          </div>
          <div className="px-6 py-5 border-b border-border">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Suggested fix</p>
            <p className="text-sm leading-relaxed">
              Move the button inside the form, or add{" "}
              <code className="bg-surface-tinted px-1.5 py-0.5 rounded font-mono text-xs">{'form="checkout-form"'}</code>{" "}
              to the button element.
            </p>
          </div>
          <div className="px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">Evidence</p>
            <div className="flex flex-wrap gap-2">
              {["Replay recording", "DOM mutations", "Network trace", "React state"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-2.5 py-1 rounded-full border border-border text-xs text-muted bg-surface-tinted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-muted text-center mt-5 italic">
          Example output &mdash; actual reports are generated from your app&apos;s real runtime data.
        </p>
      </section>

      {/* Ask Your Agent */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
            Ask Your Agent
          </p>
          <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
            One prompt. Your agent does the rest.
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-10">
            Try feeding this prompt to your coding agent to see the magic unfold.
          </p>
          <CopyPromptBlock prompt={FULL_PROMPT} collapsible />
          <p className="text-xs text-muted text-center mt-5">
            Works with Codex, Claude Code, Cursor, and any agent you&apos;re using.
          </p>
        </section>
      </div>

      {/* Technology */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
          The technology
        </p>
        <h2 className="text-3xl font-bold text-center mb-4">
          Underneath it all: our time-travel debugger.
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Whether you&apos;re running Replay QA on a web app or analyzing a CI failure, the same recording engine is at work. Replay captures the full browser runtime deterministically &mdash; making AI analysis possible where it wasn&apos;t before.
        </p>
        <div className="max-w-3xl mx-auto rounded-xl border border-border overflow-hidden">
          {[
            { label: "Render chains", detail: "Which component re-rendered, what triggered it, what changed" },
            { label: "State flow", detail: "Redux actions, React state updates, context changes across the component tree" },
            { label: "Network timing", detail: "Every request and response, with exact payload and timing data" },
            { label: "JS execution", detail: "Every function call on every frame, with arguments and return values" },
            { label: "DOM mutations", detail: "What changed in the DOM, when, and what code caused it" },
          ].map((row, i, arr) => (
            <div
              key={row.label}
              className={`flex items-baseline gap-6 px-6 py-4 ${i < arr.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-surface" : "bg-surface-tinted"}`}
            >
              <span className="w-36 flex-shrink-0 text-sm font-semibold text-foreground">{row.label}</span>
              <span className="text-sm text-muted leading-relaxed">{row.detail}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted italic mt-8">
          This isn&apos;t guessing from error messages. It&apos;s reading the actual execution.
        </p>
      </section>

      {/* Final CTA */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Test your app for free.
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
            Give Replay QA a URL. No test suite, no QA team, no credit card required.
          </p>
          <HeroUrlInput />
        </section>
      </div>

      <Footer />
    </div>
  );
}
